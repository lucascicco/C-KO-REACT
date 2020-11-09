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
  ProductImage,
  InputFile,
  Title,
  Label,
  DivLabel,
  DivWrapper,
  Descriptrion,
} from './styles';
import {
  updateAccountRequest,
  addAvatarPicture,
} from '~/store/modules/user/actions';
import { AccountVerifierChange } from '~/utils/EmptyObjectVerifier';
import api from '~/services/api';

export default function MyAccount() {
  const dispatch = useDispatch();
  const myAccount = useSelector((state) => state.user.profile.user);

  const [image, setImage] = useState(myAccount.avatar);
  const [preview, setPreview] = useState('');

  const [name, setName] = useState(myAccount.name);
  const [email, setEmail] = useState(myAccount.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const HandleChange = async (e) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    const response = await api.post('avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    setImage(response.data.url);
    dispatch(addAvatarPicture(response.data.url));
  };

  const handleSubmit = (AccountInfo) => {
    if (AccountVerifierChange(AccountInfo)) {
      toast.error(
        'Nenhum campo pode estar vazio, e caso esteja trocando a senha, lembre-se que no mínimo tem que haver 6 dígitos.'
      );
    } else {
      dispatch(updateAccountRequest(AccountInfo));
    }
  };

  return (
    <Container>
      <RowWrapper>
        <ColWrapper xl="5" md="8" lg="6">
          <Title>Meu perfil</Title>
          <FormInput autoComplete="off" onSubmit={handleSubmit}>
            <DivLabel>
              <Label htmlFor="avatar">
                <DivWrapper>
                  <ProductImage src={image || preview} />
                  {!preview && !image && (
                    <Descriptrion>Clique aqui</Descriptrion>
                  )}
                </DivWrapper>

                <InputFile
                  type="file"
                  id="avatar"
                  accept="image/*"
                  data-file={image}
                  onChange={HandleChange}
                />
              </Label>
            </DivLabel>
            <Input
              name="name"
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="oldPassword"
              type="password"
              placeholder="Senha antiga"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Button type="submit">Atualizar</Button>
          </FormInput>
        </ColWrapper>
      </RowWrapper>
    </Container>
  );
}
