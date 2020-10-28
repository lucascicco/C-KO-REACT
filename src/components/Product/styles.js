import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 500px;
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
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-family: 'Raleway', sans-serif;
`;

export const ProductPrice = styled.h3`
  color: white;
  font-size: 35px;
`;

export const ProductDiv2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductStock = styled.h5`
  color: #00c853;
`;

export const SoldFavoriteDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsSold = styled.h6`
  color: #b0bec5;
`;

export const QuantityDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityText = styled.h4`
  color: black;
  font-weight: bold;
`;

export const QuantitySmallText = styled.p`
  text-align: center;
  color: #eceff1;
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
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  margin-top: 5px;
`;

export const DescriptionText = styled.p`
  text-align: justify;
  word-break: break-word;
  font-size: 20px;
`;
