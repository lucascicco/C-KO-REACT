import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const RowGeral = styled(Row)`
  background: white;
  padding: 15px;
  margin-bottom: 15px;
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

export const ColTwo = styled(Col)``;

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
  object-fit: cover;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Button = styled.button`
  width: 48%;
  border: 1px solid #388e3c;
  padding: 10px;
  margin-right: 5px;
  background: white;

  outline: none !important;
  box-shadow: none !important;
  transition: background 0.5s;

  &:hover {
    background: #dcedc8;
  }
`;

export const ButtonDelete = styled.button`
  flex: 1;
  border: 1px solid #d32f2f;
  padding: 10px;
  background: white;

  outline: none !important;
  box-shadow: none !important;
  transition: background 0.5s;

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
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PriceText = styled.h3``;

export const StatusText = styled.h3`
  color: ${(props) => (props.open ? '#7cb342' : '#e53935')};
`;

export const ColWrapper = styled(Col)``;
