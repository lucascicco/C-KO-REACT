import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(data) {
    console.log(data);
    setLoading(true);
  }

  return (
    <Content>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando ...' : 'Acessar '}</button>
        <Link to="/register">Primeiro acesso? Cadastre-se </Link>
      </Form>
    </Content>
  );
}
