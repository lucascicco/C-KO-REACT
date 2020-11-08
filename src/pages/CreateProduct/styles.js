import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { lighten } from 'polished';

export const WarningText = styled.h1`
  color: white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin: 50px auto 25px auto;
`;

export const Button = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #303f9f;
  font-weight: bold;
  color: #fff;
  width: 100%;
  border: 0;
  border-radius: 4px;
  font-size: 20px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.03, '#3f51b5')};
  }
`;
