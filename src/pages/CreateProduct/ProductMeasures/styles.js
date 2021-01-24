import styled from 'styled-components';
import { Input as RockeseatInput } from '@rocketseat/unform';
import { lighten } from 'polished';

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
  color: #000000;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;

export const WarningText = styled.p`
  color: #000000;
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
`;

export const WarningButton = styled.button`
  width: 30%;
  border: 0;
  border-radius: 3px;
  font-size: 20px;
  transition: border-radius 0.7s;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    opacity: 0.8;
    border-radius: 15px;
  }
`;

export const DivButtonWarning = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-bottom: 10px;
`;

export const DivButton = styled.button`
  display: flex;
  justify-content: center;
  height: 45px;
  width: 100%;
  outline: none !important;
  box-shadow: none !important;
  transition: background 0.2s;
  border-radius: 5px;
  border: none;
  background: ${(props) => (props.outcome ? '#43a047' : '#3949ab')};

  &:hover {
    background: ${(props) =>
      !props.disabled && !props.outcome ? lighten(0.03, '#3949ab') : ''};
    cursor: ${(props) => (props.disabled ? 'wait' : 'cursor')};
  }
`;

export const Progress = styled.span`
  z-index: 1;
  transition: width 3s;
  width: ${(props) => (props.animation && !props.outcome ? '95%' : '0px')};
  height: 45px;
  position: absolute;
  background: #283593;
  border-radius: 5px;
  bottom: 0px;
  left: 15px;
  padding: 0px;
`;

export const Content = styled.div`
  z-index: 9;
  padding: 0px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  color: white;
  padding-top: 10px;
`;
