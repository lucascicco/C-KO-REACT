import React from 'react';
import { Content } from './styles';
import Logo from '~/assets/Cko_logo.png';

export default function HomePage() {
  return (
    <Content>
      <img src={Logo} width={250} alt="logo" />
    </Content>
  );
}
