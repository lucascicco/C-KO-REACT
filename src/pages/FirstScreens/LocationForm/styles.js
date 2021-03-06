import styled from 'styled-components';
import { lighten } from 'polished';

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

    input {
      background: #37474f;
      border: 0;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
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
  margin: 5px 0 0;
  height: 44px;
  background: #303f9f;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${lighten(0.03, '#3f51b5')};
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

  outline: none !important;
  box-shadow: none !important;

  &:hover {
    background: ${lighten(0.03, '#f44336')};
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin-bottom: 5px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  color: #000000;
  font-family: Raleway;
  margin-left: 10px;
  line-height: 70px;
`;

export const LogoImg = styled.img`
  width: 70px;
  margin: 0;
`;
