import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const ImgProduct = styled.img`
  height: 90%;
  width: 100%;
`;

export const Div1 = styled(Row)`
  background: white;
`;

export const DivInfo1 = styled(Col)`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 270px;
`;

export const DivInfo2 = styled(Col)`
  padding: 10px;
  height: 270px;
`;

export const DivTitle = styled.div`
  border-bottom: 1px solid black;
  height: 30%;
`;

export const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const DivSecond = styled.div`
  height: 70%;
`;

export const Text = styled.p`
  font-size: 20px;
  word-break: break-word;
`;

export const DivValues = styled.div`
  padding-top: 10px;
  height: 70%;
`;

export const DivTotal = styled.div`
  border-top: 1px solid black;
  padding-top: 10px;
  height: 30%;
`;

export const Div2 = styled(Row)`
  background: white;
`;

export const DivAddress = styled(Col)``;

export const AddressTitle = styled.h4`
  padding-top: 15px;
  font-family: 'Raleway', sans-serif;
  border-top: 1px solid black;
`;

export const PaymentTitle = styled.h4`
  padding-top: 15px;
  font-family: 'Raleway', sans-serif;
`;

export const Div3 = styled(Row)`
  background: white;
  padding-bottom: 10px;
  border-top: 1px solid black;
`;

export const DivPayment1 = styled(Col)``;

export const DivPayment2 = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  outline: none !important;
  box-shadow: none !important;
`;

export const ButtonText = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
`;

export const CreditCard = styled.div`
  display: flex;
`;

export const CreditCardText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
  margin-top: 5px;
`;

export const Strong = styled.b``;
