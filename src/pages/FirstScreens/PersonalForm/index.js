import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import history from '../../../services/history';
import ReactSelect from '../../../components/ReactSelect';
import ReactDatePicker from '../../../components/ReactDatePicker';

import {
  Content,
  SameLine,
  Button,
  GenderDiv,
  GenderDivSmall,
  SkipButton,
} from './styles';

import Professions from '../../../utils/Profession';

export default function PersonalFormRc() {
  const [gender, setGender] = useState('');

  function handleSubmit(data) {
    data.gender = gender;
    console.log({ data });
  }

  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <ReactSelect
          name="profession"
          placeholder="Selecione sua profissão"
          options={Professions}
          isSearchable
        />

        <ReactDatePicker name="birthday" placeholderText="Data de nascimento" />

        <GenderDiv>
          <GenderDivSmall
            onClick={() => setGender('M')}
            genderActived={gender === 'M'}
          >
            Masculino
          </GenderDivSmall>

          <GenderDivSmall
            onClick={() => setGender('F')}
            genderActived={gender === 'F'}
          >
            Feminino
          </GenderDivSmall>
        </GenderDiv>

        <SameLine>
          <Input name="cellphone" type="text" placeholder="Telefone" />
          <Input name="identification" type="text" placeholder="CPF" />
        </SameLine>

        <Input name="address" type="text" placeholder="Endereço" />

        <Button type="submit">Próximo</Button>

        <SkipButton
          onClick={() => {
            history.push('/crlocation');
          }}
        >
          Pular
        </SkipButton>
      </Form>
    </Content>
  );
}
