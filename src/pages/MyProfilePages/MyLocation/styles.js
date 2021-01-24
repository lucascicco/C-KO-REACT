import styled from 'styled-components';
import { lighten } from 'polished';
import { Row, Col } from 'react-bootstrap';
import { Form, Input as InputRocket } from '@rocketseat/unform';

export const RowWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const ColWrapper = styled(Col)``;

export const FormInput = styled(Form)``;

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
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${lighten(0.03, '#3f51b5')};
  }
`;

export const Input = styled(InputRocket)`
  background: #37474f;
  border: 0;
  border-radius: 2px;
  height: 45px;
  width: 100%;
  padding: 0 15px;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  margin: 0 0 10px;
  font-size: 17px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Title = styled.h1`
  color: #000000;
  text-decoration: underline;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-bottom: 35px;
`;
