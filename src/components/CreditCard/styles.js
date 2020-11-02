import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
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

export const DivGeral = styled(Row)`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: black !important;
  }
`;

export const DivOne = styled(Col)``;

export const DivTwo = styled(Col)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: none;
  margin-bottom: 10px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const InputExpiry = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: none;
  margin-bottom: 10px;
  color: ${(props) => (props.validExpiry ? 'black' : '#d32f2f')};

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const InputNumber = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  height: 35px;
  border: none;
  margin-bottom: 10px;
  color: ${(props) => (props.validNumber ? 'black' : '#d32f2f')};

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const CVC = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  margin-left: 20px;
  height: 35px;
  border: none;
  margin-bottom: 10px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const DivFlex = styled.div`
  display: flex;
`;
