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
  SameLine,
  GenderDiv,
  GenderDivSmall,
} from './styles';
import {
  updatePersonalDataRequest,
  createPersonalDataRequest,
} from '~/store/modules/user/actions';
import { EmptyObject, CompareObjects } from '~/utils/EmptyObjectVerifier';
import Professions from '~/utils/Profession';
import ReactSelect from '~/components/ReactSelect';
import history from '~/services/history';
import ReactDatePicker from '~/components/ReactDatePicker';
import { cpfMask, telefoneMask } from '~/utils/masks';

export default function MyPersonalData() {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.user.profile.personal_data);

  const [profession, setProfession] = useState(
    personal === null ? '' : personal.profession
  );
  const [birthday, setBirthday] = useState(
    personal === null ? '' : new Date(personal.birthday)
  );
  const [gender, setGender] = useState(
    personal === null ? '' : personal.gender
  );
  const [cellphone, setCellphone] = useState(
    personal === null ? '' : personal.cellphone
  );
  const [identification, setIdentification] = useState(
    personal === null ? '' : personal.identification
  );

  const handleSubmit = (personalInfo) => {
    personalInfo.gender = gender;
    personalInfo.profession = profession;

    if (EmptyObject(personalInfo)) {
      return toast.error(
        'Preencha corretamente os campos de informações pessoais.'
      );
    }

    if (personal === null) {
      dispatch(createPersonalDataRequest(personalInfo));
      history.push('/homepage');
      history.go();
    } else if (CompareObjects(personalInfo, personal)) {
      dispatch(updatePersonalDataRequest(personalInfo));
    }
  };

  return (
    <Container>
      <RowWrapper>
        <ColWrapper xl="5" md="8" lg="6">
          <Title>Meus dados pessoais</Title>
          <FormInput autoComplete="off" onSubmit={handleSubmit}>
            <ReactSelect
              name="profession"
              placeholder={profession || 'Selecione sua profissão'}
              options={Professions}
              onChange={(e) => setProfession(e.title)}
            />

            <ReactDatePicker
              name="birthday"
              placeholderText="Data de nascimento"
              onChange={(e) => setBirthday(e)}
              value={birthday}
            />

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

            <GenderDiv>
              <GenderDivSmall
                type="button"
                onClick={() => setGender('M')}
                genderActived={gender === 'M'}
              >
                Masculino
              </GenderDivSmall>

              <GenderDivSmall
                type="button"
                onClick={() => setGender('F')}
                genderActived={gender === 'F'}
              >
                Feminino
              </GenderDivSmall>
            </GenderDiv>
            <Button type="submit">Atualizar</Button>
          </FormInput>
        </ColWrapper>
      </RowWrapper>
    </Container>
  );
}
