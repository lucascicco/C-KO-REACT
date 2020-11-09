import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { Input as RockeseatInput } from '@rocketseat/unform';

export const Wrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const ColWrapper = styled(Col)``;

export const SameDiv = styled.div`
  display: flex;

  margin: 0 0 10px;
`;

export const Input = styled(RockeseatInput)`
  background: #37474f;
  border: 0;
  border-radius: 2px;
  height: 45px;
  flex: 1;
  margin: 3px;
  padding: 0 15px;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  font-size: 17px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const InputSmaller = styled(RockeseatInput)`
  background: ${(props) => (props.disabled ? '#455054' : '#37474f')};
  border: 0;
  border-radius: 2px;
  height: 45px;
  width: 35%;
  margin: 3px;
  padding: 0 15px;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  font-size: 17px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;
