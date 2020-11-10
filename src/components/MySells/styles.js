import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const RowGeral = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const ColWrapper = styled(Col)``;

export const ColTitle = styled(Col)`
  margin-bottom: 5px;
  border-bottom: 1px solid black;
`;

export const ColOne = styled(Col)`
  @media (max-width: 767.98px) {
    margin-bottom: 15px;
  }

  max-height: 160px;
`;

export const ColTwo = styled(Col)``;

export const ColThree = styled(Col)`
  @media (max-width: 767.98px) {
    margin-top: 15px;
  }
  display: flex;
  flex-direction: column;
`;

export const ColFour = styled(Col)`
  margin-top: 15px;
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

export const ButtonText = styled.h6`
  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  font-size: 18px;
  color: #388e3c;
  font-family: 'Raleway', sans-serif;
`;

export const ButtonContactText = styled.h6`
  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  font-size: 18px;
  font-family: 'Raleway', sans-serif;
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

    ${ButtonText} {
      font-weight: bold;
    }
  }
`;

export const ButtonContact = styled.button`
  flex: 1;
  border: 1px solid #424242;
  padding: 10px;
  background: white;

  outline: none !important;
  box-shadow: none !important;
  transition: background 0.5s;

  &:hover {
    background: #bdbdbd;

    ${ButtonContactText} {
      font-weight: bold;
    }
  }
`;

export const Div = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PriceText = styled.h3``;

export const StatusText = styled.h5`
  color: ${(props) => (props.open ? '#7cb342' : '#e53935')};
`;

export const RowItem = styled(Row)`
  background: white;
  padding: 15px;
  margin-bottom: 15px;
`;

export const StrongText = styled.h6`
  font-family: 'Raleway', sans-serif;
`;

export const TextNormal = styled.strong`
  font-family: Arial;
`;

export const DivTextWrapper = styled.div`
  margin-top: 10px;
`;

export const AddressDiv = styled.div`
  flex: 1;
`;

export const AddressText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-weight: bold;
`;

export const ItalicText = styled.h6`
  font-style: italic;
  color: black;
`;
