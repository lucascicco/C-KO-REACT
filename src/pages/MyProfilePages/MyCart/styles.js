import styled from 'styled-components';
import { Row, Col, FormControl } from 'react-bootstrap';

export const InputFilter = styled(FormControl)`
  padding: 15px;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 20px;

  color: black;
`;

export const DivWrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const ColWrapper = styled(Col)``;

export const WarningText = styled.h1`
  color: #000000;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin: 50px auto 25px auto;
`;
