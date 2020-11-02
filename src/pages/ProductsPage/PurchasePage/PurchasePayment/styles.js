import styled from 'styled-components';
import { Col } from 'react-bootstrap';

import { lighten } from 'polished';

export const DivButton = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  padding: 10px;
  background: #283593;
  color: white;
  height: 45px;
  width: 90%;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  outline: none !important;
  box-shadow: none !important;
  transition: background 0.2s;
  border-radius: 5px;

  &:hover {
    background: ${lighten(0.03, '#3949ab')};
  }
`;
