import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '~/components/Nav';

import { Content, Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Content>
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </Content>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
