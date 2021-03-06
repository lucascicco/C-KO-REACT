import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const RowGeral = styled(Row)`
  opacity: ${(props) => (props.error ? '0.5' : '1.0')};
`;

export const DescriptionCol = styled(Col)`
  opacity: ${(props) => (props.error ? '0.5' : '1.0')};
`;

export const SellerRow = styled(Row)`
  width: 100%;
  margin-bottom: 15px;
`;

export const WarningText = styled.h2`
  color: black;
`;

export const ButtonEdit = styled.button`
  border: none;
  height: 60px;
  width: 60px;

  outline: none !important;
  box-shadow: none !important;
  background: transparent;

  transition: opacity 0.3s;

  :hover {
    opacity: 0.5;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 2px;
`;

export const ProductDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #212121;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const ProductTitle = styled.h1`
  color: black;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: 'Raleway', sans-serif;
`;

export const ProductPrice = styled.h3`
  color: black;
  font-size: 35px;
`;

export const ProductDiv2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductStock = styled.h5`
  color: ${(props) => (props.status === 'Aberto' ? '#4caf50' : '#e53935')};
`;

export const SoldFavoriteDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsSold = styled.h6`
  color: #455a64;
`;

export const QuantityDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityText = styled.h4`
  color: #455a64;
  font-weight: bold;
`;

export const QuantitySmallText = styled.p`
  text-align: center;
  color: #455a64;
  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const QuantityInput = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 15px;
  height: 80px;
`;

export const InputMoreUnitys = styled.input`
  padding: 10px;
  width: 30%;
  border: 1px solid gray;
  border-radius: 2px;
  font-size: 15x;
  color: ${(props) => (props.available ? 'black' : '#c62828')};
`;

export const NotAvailable = styled.p`
  color: #e53935;
  font-weight: bold;
  font-size: 15px;
`;

export const ProductDetails = styled.div``;

export const TitleDescription = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  color: #eceff1;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-top: 5px;
`;

export const DescriptionText = styled.p`
  text-align: justify;
  word-break: break-word;
  font-size: 20px;
`;

export const DivImage = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextAbsolute = styled.h3`
  position: absolute;
  z-index: 100;
  color: #90a4ae;
  background: white;
`;
