import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import { Content } from './styles';
import Logo from '~/assets/Cko_logo.png';
import { signOut } from '~/store/modules/auth/actions';
import NavBar from '~/components/Nav';

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <Content>
      <NavBar />
      <img src={Logo} width={250} alt="logo" />
      <button
        type="button"
        onClick={() => {
          dispatch(signOut());
        }}
      >
        SAIR
      </button>
    </Content>
  );
}
