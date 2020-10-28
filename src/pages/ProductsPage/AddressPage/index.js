import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from 'react-radio-group';
import PropTypes from 'prop-types';
import { addDays } from 'date-fns';

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
import { createLocationRequest } from '~/store/modules/user/actions';
import BrazilStates from '~/utils/BrazilStates';
import {
  EmptyObjectLocation,
  CompareLocation,
} from '~/utils/EmptyObjectVerifier';
import api from '~/services/api';
import history from '~/services/history';

export default function AddressForm({ match }) {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);
  const [currentLocation, setCurrentLocation] = useState(location.id);
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

  const GoNextPage = async () => {
    const values = {
      country: 'BR',
      state: location.state,
      city,
      neighborhood,
      postcode,
      street_number: streetnumber,
      street,
    };

    if (CompareLocation(values, location)) {
      const testing = await EmptyObjectLocation(values);

      if (testing) {
        return toast.error('Todos os campos são obrigatórios.');
      }

      const response = await api.post('location', values);
      setCurrentLocation(response.id);
    }

    const freteApi = await api.get('frete', {
      params: {
        locationId: currentLocation,
        product_id: Number(match.params.id),
        service: fretetype,
      },
    });

    const daysSumUp = Number(freteApi.data.PrazoEntrega) + 2;

    const daysMaxDeliver = addDays(new Date(), daysSumUp);

    history.push(`/personal_info/product/${match.params.id}`, {
      purchase_quantity: history.location.state.purchase_quantity,
      location: currentLocation,
      frete: {
        freteType: fretetype,
        fretePrice: freteApi.data.Valor,
        freteDays: daysMaxDeliver,
      },
    });
  };

  async function handleSubmit(data) {
    const testing = await EmptyObjectLocation(data);

    if (testing) {
      toast.error('Todos os campos são obrigatórios.');
    } else {
      dispatch(createLocationRequest(data));
      setDisable(true);
    }
  }

  return (
    <Content>
      <FlexDiv>
        <LogoImg src={LocationIcon} alt="PersonalLogo" />
        <Title>Endereço de entrega</Title>
      </FlexDiv>

      <Form onSubmit={handleSubmit}>
        <ReactSelect
          name="state"
          placeholder="Selecione o estado"
          options={BrazilStates}
          onChange={(e) => setState(e.id)}
          defaultValueProps={state}
          isSearchable
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
          onChange={(e) => setPostcode(e.target.value)}
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

        {location ? (
          <Button type="button" onClick={() => setDisable(false)}>
            Alterar
          </Button>
        ) : (
          <Button type="submit">Adicionar endereço</Button>
        )}
      </Form>

      <SendDiv>
        <SendFont>Escolha o tipo de envio</SendFont>
        <RadioGroup name="frete" onChange={(e) => setFretetype(e)}>
          <RadioButton
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

      <ButtonNext className="w-100 mt-5 mb-2" onClick={GoNextPage}>
        Prosseguir
      </ButtonNext>
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