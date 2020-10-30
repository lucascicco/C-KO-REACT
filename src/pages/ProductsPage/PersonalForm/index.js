import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDatePicker from '~/components/ReactDatePicker';

import ReactSelect from '~/components/ReactSelect';
import PersonalIcon from '~/assets/Information_Icon.png';
import { createPersonalDataRequest } from '~/store/modules/user/actions';
import Professions from '~/utils/Profession';
import { EmptyObject, CompareObjects } from '~/utils/EmptyObjectVerifier';

import {
  Content,
  Button,
  FlexDiv,
  Title,
  LogoImg,
  GenderDivSmall,
  SameLine,
  GenderDiv,
  Input,
  ButtonNext,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';
import { cpfMask, telefoneMask } from '~/utils/masks';

export default function PersonalForm({ match }) {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.user.profile.personal_data);

  const [allow, setAllow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentPersonalID, setCurrentPersonalID] = useState(
    personal === null ? '' : personal.id
  );
  const [disable, setDisable] = useState(personal !== null);

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

  async function GoNextPage(data) {
    setLoading(true);
    data.gender = gender;
    data.profession = profession;

    const testing = EmptyObject(data);

    if (testing) {
      setLoading(false);
      return toast.error('Todos os campos são obrigatórios.');
    }

    if (personal === null) {
      dispatch(createPersonalDataRequest(data));
      setCurrentPersonalID(personal.id);
    } else if (CompareObjects(data, personal)) {
      const response = await api.post('personal_data', data);
      setCurrentPersonalID(response.data.id);
    }

    history.push(`/address/product/${match.params.id}`, {
      purchase_quantity: history.location.state.purchase_quantity,
      personalID: currentPersonalID,
      product_name: history.location.state.product_name,
      price: history.location.state.price,
      image_url: history.location.state.image_url,
      previousPage: 'personalPage',
    });
    history.go();

    setLoading(false);
  }

  useEffect(() => {
    if (history.location.state !== null) {
      setAllow(history.location.state.previousPage === 'productPage');
    } else {
      setAllow(false);
    }
  }, []);

  return (
    <Content>
      {allow && (
        <>
          <FlexDiv>
            <LogoImg src={PersonalIcon} alt="PersonalLogo" />
            <Title>Informações</Title>
          </FlexDiv>

          <Form onSubmit={GoNextPage}>
            <ReactSelect
              name="profession"
              placeholder={profession || 'Selecione sua profissão'}
              options={Professions}
              onChange={(e) => setProfession(e.title)}
              isDisabled={disable}
            />

            <ReactDatePicker
              name="birthday"
              placeholderText="Data de nascimento"
              onChange={(e) => setBirthday(e)}
              value={birthday}
              isDisabled={disable}
            />

            <SameLine>
              <Input
                name="cellphone"
                type="text"
                placeholder="Telefone"
                maxLength={14}
                value={cellphone}
                onChange={(e) => setCellphone(telefoneMask(e.target.value))}
                disabled={disable}
              />
              <Input
                name="identification"
                type="text"
                placeholder="CPF"
                maxLength={14}
                value={identification}
                onChange={(e) => setIdentification(cpfMask(e.target.value))}
                disabled={disable}
              />
            </SameLine>

            <GenderDiv>
              <GenderDivSmall
                type="button"
                onClick={() => setGender('M')}
                genderActived={gender === 'M'}
                disabled={disable}
              >
                Masculino
              </GenderDivSmall>

              <GenderDivSmall
                type="button"
                onClick={() => setGender('F')}
                genderActived={gender === 'F'}
                disabled={disable}
              >
                Feminino
              </GenderDivSmall>
            </GenderDiv>

            {personal && (
              <Button type="button" onClick={() => setDisable(false)}>
                Alterar
              </Button>
            )}

            <ButtonNext className="w-100 mt-5 mb-2" type="submit">
              {loading ? 'Carregando...' : 'Prosseguir'}
            </ButtonNext>
          </Form>
        </>
      )}
    </Content>
  );
}

PersonalForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
