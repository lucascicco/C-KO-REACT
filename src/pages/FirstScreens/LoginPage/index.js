import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando ...' : 'Acessar '}</button>
      </Form>
    </>
  );
}
