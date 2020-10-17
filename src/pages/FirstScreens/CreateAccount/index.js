import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Content, Title } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string(6).required('A senha precisa ter no mínimo 6 dígitos.'),
});

export default function CreateAccount() {
  const [loading, setLoading] = useState(false);

  function handleSubmit({ email, password }) {
    setLoading(true);
  }

  return (
    <Content>
      <Title>Crie sua conta</Title>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui conta? Clique aqui</Link>
      </Form>
    </Content>
  );
}
