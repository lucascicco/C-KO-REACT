import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const Wrapper = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 35px;
`;

export const ColWrapper = styled(Col)`
  padding: 10px;
`;

export const ProductImage = styled.img`
  height: 350px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid white;
  background: #607d8b;
  text-indent: -10000px;
  transition: background 1s;
`;

export const InputFile = styled.input`
  opacity: 0;
`;

export const Title = styled.h1`
  color: #000000;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;

export const Descriptrion = styled.div`
  position: absolute;
  top: 150px;
  left: 30%;
  color: #fff;
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  transition: font-size 1s;
`;

export const Label = styled.label`
  width: 100%;
  margin-left: 10px;

  &:hover {
    cursor: pointer;

    ${Descriptrion} {
      font-size: 35px;
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
`;
