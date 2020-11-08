import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const RowGeral = styled(Row)`
  background: white;
  padding: 10px;
  margin-bottom: 15px;
  border: 5px solid green;
`;

export const RowOne = styled(Row)`
  width: 100%;
`;

export const ColTitle = styled(Col)`
  margin-bottom: 5px;
  border-bottom: 1px solid black;
`;

export const ColOne = styled(Col)`
  @media (max-width: 767.98px) {
    margin-bottom: 10px;
  }
`;

export const ColTwo = styled(Col)`
  border: 1px solid red;
  height: 190px;
`;

export const DivOne = styled.div``;

export const DivTwo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 0px;
`;

export const ImageItem = styled.img`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Title = styled.h3``;

export const Button = styled.button`
  width: 48%;
  border: 1px solid #388e3c;
  padding: 10px;
  margin-right: 5px;

  outline: none !important;
  box-shadow: none !important;
  transition: background 0.2s;

  &:hover {
    background: #dcedc8;
  }
`;

export const ButtonDelete = styled.button`
  flex: 1;
  border: 1px solid #d32f2f;
  padding: 10px;

  outline: none !important;
  box-shadow: none !important;
  transition: background 0.2s;

  &:hover {
    background: #ef9a9a;
  }
`;

export const ButtonText = styled.h6`
  font-size: 18px;
  color: #388e3c;
`;

export const ButtonTextDelete = styled.h6`
  font-size: 18px;
  color: #d32f2f;
`;

export const Div = styled(Row)`
  border: 5px solid purple;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PriceText = styled.h3``;

export const StatusText = styled.h3`
  color: ${(props) => (props.open ? '#7cb342' : '#e53935')};
`;
