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

export const ProductImage = styled.img`
  height: 150px;
  width: 100%;
  border-radius: 300px;
  border: 1px solid white;
  background: #607d8b;
  text-indent: -10000px;
  transition: background 1s;
`;

export const InputFile = styled.input`
  opacity: 0;
`;

export const Title = styled.h1`
  color: white;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;

export const Descriptrion = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  color: #fff;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  transition: font-size 1s;
`;

export const Label = styled.label`
  width: 35%;

  &:hover {
    cursor: pointer;

    ${Descriptrion} {
      font-size: 22px;
    }

    ${ProductImage} {
      background: #455a64;
    }
  }
`;

export const DivLabel = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivWrapper = styled.div`
  position: relative;
  margin-top: 15px;
`;
