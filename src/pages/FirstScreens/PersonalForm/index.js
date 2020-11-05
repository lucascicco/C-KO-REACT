import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';
import ReactSelect from '~/components/ReactSelect';
import ReactDatePicker from '~/components/ReactDatePicker';
import PersonalIcon from '~/assets/Information_Icon.png';
import { EmptyObject } from '~/utils/EmptyObjectVerifier';
import { createPersonalDataRequest } from '~/store/modules/user/actions';
import ErrorWarning from '~/components/NoAccess';

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
import { cpfMask, telefoneMask } from '~/utils/masks';

export default function PersonalFormRc() {
  const dispatch = useDispatch();
  const first_access = useSelector((state) => state.auth.first_access);

  const [gender, setGender] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [identification, setIdentification] = useState('');
  const [birthday, setBirthday] = useState('');

  function handleSubmit(data) {
    data.gender = gender;

    if (EmptyObject(data)) {
      toast.error(
        'Todos os campos são obrigatórios, não esqueça de selecionar seu gênero.'
      );
    } else {
      dispatch(createPersonalDataRequest(data));

      history.push('/crlocation');
      history.go();
    }
  }

  return (
    <Content>
      {first_access ? (
        <>
          <Form onSubmit={handleSubmit}>
            <FlexDiv>
              <LogoImg src={PersonalIcon} alt="PersonalLogo" />
              <Title>Informações</Title>
            </FlexDiv>

            <ReactSelect
              name="profession"
              placeholder="Selecione sua profissão"
              options={Professions}
            />

            <ReactDatePicker
              name="birthday"
              placeholderText="Data de nascimento"
              value={birthday}
              onChange={(e) => setBirthday(e)}
            />

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
              <Input
                name="cellphone"
                type="text"
                placeholder="Telefone"
                maxLength={14}
                value={cellphone}
                onChange={(e) => setCellphone(telefoneMask(e.target.value))}
              />
              <Input
                name="identification"
                type="text"
                placeholder="CPF"
                maxLength={14}
                value={identification}
                onChange={(e) => setIdentification(cpfMask(e.target.value))}
              />
            </SameLine>

            <Button type="submit">Próximo</Button>
          </Form>

          <SkipButton
            onClick={() => {
              history.push('/crlocation');
              history.go();
            }}
          >
            Pular
          </SkipButton>
        </>
      ) : (
        <ErrorWarning />
      )}
    </Content>
  );
}
