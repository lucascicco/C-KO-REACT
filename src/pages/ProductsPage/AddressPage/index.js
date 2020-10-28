import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from 'react-radio-group';
import ReactSelect from '~/components/ReactSelect';
import LocationIcon from '~/assets/Geolocation_icon.png';
import {
  Content,
  Button,
  FlexDiv,
  Title,
  LogoImg,
  SendDiv,
  SendFont,
} from './styles';
import { createLocationRequest } from '~/store/modules/user/actions';
import BrazilStates from '~/utils/BrazilStates';
import { EmptyObjectLocation } from '~/utils/EmptyObjectVerifier';

export default function AddressForm() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);
  const [disable, setDisable] = useState(location !== null);
  const [fretetype, setFretetype] = useState('04510');

  const [states, setStates] = useState(
    location === null ? '' : location.states
  );
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
          name="states"
          placeholder="Selecione seu estado"
          options={BrazilStates}
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

      <RadioGroup name="frete" onChange={(e) => setFretetype(e)}>
        <div className="radio-button-background">
          <Radio
            value="04014"
            className="radio-button"
            checked={fretetype === '04014'}
          />
          SEDEX - ENVIO RÁPIDO
        </div>

        <div className="radio-button-background">
          <Radio
            value="04510"
            className="radio-button"
            checked={fretetype === '04510'}
          />
          PAC - ENVIO NORMAL
        </div>
      </RadioGroup>
    </Content>
  );
}
