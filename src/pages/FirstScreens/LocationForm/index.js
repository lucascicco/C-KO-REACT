import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import history from '../../../services/history';
import ReactSelect from '../../../components/ReactSelect';

import { Content, SkipButton, Button } from './styles';

import BrazilStates from '../../../utils/BrazilStates';

const schema = Yup.object().shape({
  states: Yup.string().required('Escolha seu estado.'),
  city: Yup.string().required('Preencha sua cidade.'),
  neighborhood: Yup.string().required('Preencha seu bairro.'),
  postcode: Yup.string().required('Seu CEP é obrigatório.'),
  streetnumber: Yup.string().required('Este campo é obrigatório.'),
  address: Yup.string().required('O seu endereço é obrigatório.'),
});

export default function LocationFormRc() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit}>
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
          name="streetnumber"
          type="text"
          placeholder="Número"
          maxLength={5}
        />
        <Input name="address" type="text" placeholder="Endereço" />

        <Button type="submit">Próximo</Button>

        <SkipButton
          onClick={() => {
            history.push('homepage');
          }}
        >
          Pular
        </SkipButton>
      </Form>
    </Content>
  );
}
