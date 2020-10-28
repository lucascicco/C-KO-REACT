import styled from 'styled-components';

export const DivProduct = styled.div`
  height: 255px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.7s;

  :hover {
    background: #9e9e9e;

    h4 {
      color: white;
    }

    h5 {
      color: white;
    }

    button {
      background: #9e9e9e;
    }
  }
`;

export const DivSecond = styled.div`
  width: 100%;
  transition: padding 0.7s;

  ${DivProduct}:hover & {
    cursor: pointer;
    padding: 5px;
  }
`;

export const DivHolder = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const ProductImage = styled.img`
  height: 150px;
  width: 65%;
  border: 1px solid black;
`;

export const DivTitle = styled.div`
  height: 60px;
  display: flex;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-size: 22px;
  text-align: start;
  padding: 3px;
  padding-left: 8px;
  width: 85%;
  height: 100%;
  color: #212121;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  :hover {
    cursor: pointer;
  }
`;

export const ProductPrice = styled.h5`
  margin-top: 5px;
  font-weight: bold;
  font-family: #424242;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const DivPerProduct = styled.div`
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  background: #eeeeee;
  margin: 2px;
`;

export const DivWrapper = styled.div``;
