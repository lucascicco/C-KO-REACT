import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Input as RockeseatInput } from '@rocketseat/unform';

export const Input = styled(RockeseatInput)`
  background: #37474f;
  border: 0;
  border-radius: 2px;
  height: 45px;
  padding: 0 15px;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  margin: 0 0 10px;
  font-size: 17px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #37474f inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    select {
      background: rgba(0, 0, 0, 0.5);
      border: 0;
      border-radius: 4px;
      height: 35px;
      font-size: 17px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.9);
      }
    }

    span {
      color: #b71c1c;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 1;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Button = styled.button`
  margin: 0px auto;
  margin-top: 15px;
  height: 44px;
  width: 90%;
  background: #546e7a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${darken(0.03, '#263238')};
  }
`;

export const SameLine = styled.div`
  display: flex;
  height: 35px;
  margin-bottom: 10px;
  justify-content: space-between;

  input {
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 2px;
    padding: 0 15px;
    color: #fff;
    width: 48%;
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 130px;
  align-items: center;
  margin-top: 25px;
`;

export const Title = styled.h1`
  color: #000000;
  font-family: 'Raleway', sans-serif;
  margin-left: 10px;
  line-height: 70px;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  margin: 0;
`;

export const SendDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SendFont = styled.h3`
  font-size: 25px;
  color: white;
`;

export const RadioButton = styled.button`
  width: 70%;
  padding: 5px;
  margin-bottom: 5px;
  height: 35px;
  font-family: 'Raleway', sans-serif;
  border-radius: 5px;
  border: none;
  outline: none !important;
  box-shadow: none !important;
`;

export const ButtonNext = styled.button`
  margin: 5px 0 0;
  height: 44px;
  background: #283593;
  font-weight: bold;
  color: #fff;
  border: 0;
  font-size: 16px;
  transition: background 0.2s;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${lighten(0.03, '#3f51b5')};
  }
`;
