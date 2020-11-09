import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Input,
  Button,
  RowWrapper,
  ColWrapper,
  FormInput,
  Title,
} from './styles';
import {
  updateLocationRequest,
  createLocationRequest,
} from '~/store/modules/user/actions';
import { EmptyObjectLocation } from '~/utils/EmptyObjectVerifier';
import BrazilStates from '~/utils/BrazilStates';
import ReactSelect from '~/components/ReactSelect';
import history from '~/services/history';
import { cepMask } from '~/utils/masks';

export default function MyLocation() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.user.profile.location);

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

  const handleSubmit = async (locationData) => {
    const testing = await EmptyObjectLocation(locationData);

    if (testing) {
      toast.error('Preencha corretamente os campos de localização.');
    } else if (location === null) {
      dispatch(createLocationRequest(locationData));
      history.push('/homepage');
      history.go();
    } else {
      dispatch(updateLocationRequest(locationData));
    }
  };

  return (
    <Container>
      <RowWrapper>
        <ColWrapper xl="5" md="8" lg="6">
          <Title>Minha localização</Title>
          <FormInput autoComplete="off" onSubmit={handleSubmit}>
            <ReactSelect
              name="state"
              placeholder={state || 'Selecione seu estado'}
              options={BrazilStates}
              onChange={(e) => setState(e.id)}
            />
            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              name="neighborhood"
              type="text"
              placeholder="Bairro"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <Input
              name="postcode"
              type="text"
              placeholder="CEP"
              maxLength="9"
              value={postcode}
              onChange={(e) => setPostcode(cepMask(e.target.value))}
            />
            <Input
              name="street_number"
              type="text"
              placeholder="Número"
              maxLength={5}
              value={streetnumber}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
            <Input
              name="street"
              type="text"
              placeholder="Endereço"
              value={street}
              onChange={(e) => setStreet(e.target.event)}
            />

            <Button type="submit">Atualizar</Button>
          </FormInput>
        </ColWrapper>
      </RowWrapper>
    </Container>
  );
}
