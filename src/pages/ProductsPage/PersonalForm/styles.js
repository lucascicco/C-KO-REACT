import styled from 'styled-components';
import { lighten } from 'polished';
import { Input as RockeseatInput } from '@rocketseat/unform';

export const Input = styled(RockeseatInput)`
  background: #37474f;
  border: 0;
  border-radius: 2px;
  height: 35px;
  padding: 0 15px;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.7)' : '#fff')};
  margin: 0 0 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
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
  margin: 5px 0 0;
  height: 44px;
  background: #3f51b5;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.03, '#5c6bc0')};
  }
`;

export const SameLine = styled.div`
  display: flex;
  height: 35px;
  margin-bottom: 10px;
  justify-content: space-between;

  input {
    background: #37474f;
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

export const SkipButton = styled.button`
  margin-top: 10px;
  height: 35px;
  width: 100%;
  background: #d32f2f;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${lighten(0.03, '#f44336')};
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
  color: #fff;
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
  margin-top: 35px;
`;

export const SendFont = styled.h3`
  font-size: 25px;
  color: white;
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

export const GenderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const GenderDivSmall = styled.button`
  width: 48%;
  background: ${(props) =>
    props.genderActived ? 'rgba(0, 0, 0, 0.7)' : 'rgba(55, 71, 79, 1)'};
  color: ${(props) =>
    props.genderActived ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  border-radius: 5px;
  border: ${(props) =>
    props.genderActived
      ? '2px solid white'
      : '1px solid rgba(255, 255, 255, 0.7)'};
  height: 35px;
  line-height: 35px;
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: rgba(55, 71, 79, 0.7);
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'cursor')};
  }
`;
