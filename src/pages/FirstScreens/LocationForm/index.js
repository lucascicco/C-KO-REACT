import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import history from '~/services/history';
import ReactSelect from '~/components/ReactSelect';
import LocationIcon from '~/assets/Geolocation_icon.png';
import { Content, SkipButton, Button, FlexDiv, Title, LogoImg } from './styles';
import { createLocationRequest } from '~/store/modules/user/actions';
import BrazilStates from '~/utils/BrazilStates';

import { EmptyObject } from '~/utils/EmptyObjectVerifier';

export default function LocationFormRc() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (EmptyObject(data)) {
      toast.error('Todos os campos são obrigatórios.');
    } else {
      dispatch(createLocationRequest(data));
    }
  }

  return (
    <Content>
      <FlexDiv>
        <LogoImg src={LocationIcon} alt="PersonalLogo" />
        <Title>Localização</Title>
      </FlexDiv>
      <Form onSubmit={handleSubmit}>
        <ReactSelect
          name="states"
          placeholder="Selecione seu estado"
          options={BrazilStates}
          isSearchable
        />

        <Input name="city" type="text" placeholder="Cidade" />

        <Input name="neighborhood" type="text" placeholder="Bairro" />
        <Input name="postcode" type="text" placeholder="CEP" />

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
          history.push('/homepage');
          history.go();
        }}
      >
        Pular
      </SkipButton>
    </Content>
  );
}
