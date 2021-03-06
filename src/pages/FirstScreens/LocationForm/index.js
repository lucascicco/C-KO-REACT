import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';
import ReactSelect from '~/components/ReactSelect';
import LocationIcon from '~/assets/Geolocation_icon.png';
import { Content, SkipButton, Button, FlexDiv, Title, LogoImg } from './styles';
import { createLocationRequest } from '~/store/modules/user/actions';
import { TurnFirstAccessOff } from '~/store/modules/auth/actions';
import BrazilStates from '~/utils/BrazilStates';
import { EmptyObjectLocation } from '~/utils/EmptyObjectVerifier';
import { cepMask } from '~/utils/masks';
import ErrorWarning from '~/components/NoAccess';

export default function LocationFormRc() {
  const dispatch = useDispatch();
  const first_access = useSelector((state) => state.auth.first_access);
  const [postcode, setPostcode] = useState('');
  const [error, setError] = useState(true);

  async function handleSubmit(data) {
    const testing = await EmptyObjectLocation(data);

    if (testing) {
      toast.error('Todos os campos são obrigatórios.');
    } else {
      setError(false);
      dispatch(createLocationRequest(data));

      history.push('/homepage');
      history.go();

      dispatch(TurnFirstAccessOff());
    }
  }

  return (
    <Content>
      {first_access ? (
        <>
          <FlexDiv>
            <LogoImg src={LocationIcon} alt="PersonalLogo" />
            <Title>Localização</Title>
          </FlexDiv>

          <Form onSubmit={handleSubmit}>
            <ReactSelect
              name="state"
              placeholder="Selecione seu estado"
              options={BrazilStates}
            />

            <Input name="city" type="text" placeholder="Cidade" />

            <Input name="neighborhood" type="text" placeholder="Bairro" />
            <Input
              name="postcode"
              value={postcode}
              type="text"
              placeholder="CEP"
              onChange={(e) => {
                setPostcode(cepMask(e.target.value));
              }}
            />

            <Input
              name="street_number"
              type="text"
              placeholder="Número"
              maxLength={5}
            />
            <Input name="street" type="text" placeholder="Endereço" />

            <Button type="submit">Próximo</Button>
          </Form>

          <SkipButton
            onClick={() => {
              setError(false);
              dispatch(TurnFirstAccessOff());

              history.push('/homepage');
              history.go();
            }}
          >
            Pular
          </SkipButton>
        </>
      ) : (
        <>{error && <ErrorWarning />}</>
      )}
    </Content>
  );
}
