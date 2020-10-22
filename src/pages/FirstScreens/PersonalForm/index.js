import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import history from '~/services/history';
import ReactSelect from '~/components/ReactSelect';
import ReactDatePicker from '~/components/ReactDatePicker';
import PersonalIcon from '~/assets/Information_Icon.png';
import { EmptyObject } from '~/utils/EmptyObjectVerifier';
import { TurnFirstAccessOff } from '~/store/modules/auth/actions';
import { createPersonalDataRequest } from '~/store/modules/user/actions';

import {
  Content,
  SameLine,
  Button,
  GenderDiv,
  GenderDivSmall,
  SkipButton,
  Title,
  FlexDiv,
  LogoImg,
} from './styles';

import Professions from '~/utils/Profession';

export default function PersonalFormRc() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('');

  function handleSubmit(data) {
    data.gender = gender;

    if (EmptyObject(data)) {
      toast.error(
        'Todos os campos são obrigatórios, não esqueça de selecionar seu gênero.'
      );
    } else {
      dispatch(createPersonalDataRequest(data));
    }
  }

  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <FlexDiv>
          <LogoImg src={PersonalIcon} alt="PersonalLogo" />
          <Title>Informações</Title>
        </FlexDiv>

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

        <Button type="submit">Próximo</Button>
      </Form>

      <SkipButton
        onClick={() => {
          dispatch(TurnFirstAccessOff());
          history.push('/crlocation');
          history.go();
        }}
      >
        Pular
      </SkipButton>
    </Content>
  );
}
