import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from 'react-radio-group';
import PropTypes from 'prop-types';
import { addDays } from 'date-fns';
import ErrorWarning from '~/components/NoAccess';
import ReactSelect from '~/components/ReactSelect';
import LocationIcon from '~/assets/Geolocation_icon.png';

import {
  Content,
  Button,
  FlexDiv,
  Title,
  LogoImg,
  SendDiv,
  RadioButton,
  SendFont,
  ButtonNext,
  Input,
} from './styles';
import { updateLocationSuccess } from '~/store/modules/user/actions';
import BrazilStates from '~/utils/BrazilStates';
import {
  EmptyObjectLocation,
  CompareObjects,
} from '~/utils/EmptyObjectVerifier';
import api from '~/services/api';
import history from '~/services/history';
import { cepMask } from '~/utils/masks';

export default function AddressForm({ match }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);

  const [allow, setAllow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);

  const [disable, setDisable] = useState(location !== null);
  const [fretetype, setFretetype] = useState('04510');

  const [state, setState] = useState(location === null ? '' : location.state);
  const [city, setCity] = useState(location === null ? '' : location.city);
  const [neighborhood, setNeighborhood] = useState(
    location === null ? '' : location.neighborhood
  );
  const [postcode, setPostcode] = useState(
    location === null ? '' : location.postcode
  );
  const [streetnumber, setStreetNumber] = useState(
    location === null ? '' : location.street_number
  );
  const [street, setStreet] = useState(
    location === null ? '' : location.street
  );

  async function GoNextPage(data) {
    setLoading(true);
    data.country = 'BR';
    data.state = state;

    const testing = await EmptyObjectLocation(data);

    if (testing) {
      setLoading(false);
      return toast.error('Todos os campos são obrigatórios.');
    }

    if (location === null) {
      const response = await api.post('location', data);
      dispatch(updateLocationSuccess(response.data));
      setCurrentLocation(response.data);
    } else if (CompareObjects(data, location)) {
      const response = await api.post('location', data);
      setCurrentLocation(response.data);
    }

    const freteApi = await api.get('frete', {
      params: {
        locationId: currentLocation.id,
        product_id: Number(match.params.id),
        service: fretetype,
      },
    });

    const daysSumUp = Number(freteApi.data.PrazoEntrega) + 2;

    const daysMaxDeliver = addDays(new Date(), daysSumUp);

    const total_products =
      history.location.state.purchase_quantity * history.location.state.price;
    const frete_price = parseFloat(freteApi.data.Valor.replace(',', '.'));
    const total_price = parseFloat(total_products + frete_price);

    history.push(`/purchase/payment/${match.params.id}`, {
      purchase_quantity: history.location.state.purchase_quantity,
      personalID: history.location.state.personalID,
      product_name: history.location.state.product_name,
      image_url: history.location.state.image_url,
      price: history.location.state.price,
      total_price,
      total_products,
      location: currentLocation,
      frete: {
        freteType: fretetype,
        fretePrice: frete_price,
        freteDays: daysMaxDeliver,
      },
      previousPage: 'addressPage',
    });
    history.go();

    setLoading(false);
  }

  useEffect(() => {
    if (history.location.state !== null) {
      setAllow(history.location.state.previousPage === 'personalPage');
    } else {
      setAllow(false);
    }
  }, []);

  return (
    <Content>
      {allow ? (
        <>
          <FlexDiv>
            <LogoImg src={LocationIcon} alt="PersonalLogo" />
            <Title>Endereço de entrega</Title>
          </FlexDiv>

          <Form onSubmit={GoNextPage}>
            <ReactSelect
              name="state"
              placeholder={state || 'Selecione seu estado'}
              options={BrazilStates}
              onChange={(e) => setState(e.id)}
              isDisabled={disable}
            />
            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              value={city}
              disabled={disable}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              disabled={disable}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <Input
              name="postcode"
              type="text"
              placeholder="CEP"
              maxLength="9"
              value={postcode}
              disabled={disable}
              onChange={(e) => setPostcode(cepMask(e.target.value))}
            />
            <Input
              name="street_number"
              type="text"
              placeholder="Número"
              maxLength={5}
              value={streetnumber}
              disabled={disable}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
            <Input
              name="street"
              type="text"
              placeholder="Endereço"
              value={street}
              disabled={disable}
              onChange={(e) => setStreet(e.target.event)}
            />

            <SendDiv>
              <SendFont>Escolha o tipo de envio</SendFont>
              <RadioGroup name="frete" onChange={(e) => setFretetype(e)}>
                <RadioButton
                  type="button"
                  className="radio-button-background"
                  onClick={() => setFretetype('04014')}
                >
                  <Radio
                    value="04014"
                    className="radio-button mr-2"
                    checked={fretetype === '04014'}
                  />
                  SEDEX - ENVIO RÁPIDO
                </RadioButton>

                <RadioButton
                  type="button"
                  className="radio-button-background"
                  onClick={() => setFretetype('04510')}
                >
                  <Radio
                    value="04510"
                    className="radio-button mr-2"
                    checked={fretetype === '04510'}
                  />
                  PAC - ENVIO NORMAL
                </RadioButton>
              </RadioGroup>
            </SendDiv>

            {location && (
              <Button
                type="button"
                className="mt-1"
                onClick={() => setDisable(false)}
              >
                Alterar formulário
              </Button>
            )}
            <ButtonNext className="w-100 mt-5 mb-2" type="submit">
              {loading ? 'Carregando...' : 'Prosseguir'}
            </ButtonNext>
          </Form>
        </>
      ) : (
        <ErrorWarning />
      )}
    </Content>
  );
}

AddressForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
