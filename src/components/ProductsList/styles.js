import styled from 'styled-components';
import { animated } from 'react-spring';
import { Col } from 'react-bootstrap';

export const DivProduct = styled(animated.div)`
  height: 255px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.7s;
  will-change: transform;
  background: #fff;

  :hover {
    cursor: pointer;
    z-index: 4;
    position: absolute;
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

export const DivSecond = styled.div`
  width: 100%;
  transition: padding 0.7s;
`;

export const DivHolder = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const ProductImage = styled.img`
  height: 150px;
  max-width: 70%;
  border: 1px solid black;
  object-fit: cover;
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

export const DivPerProduct = styled(Col)`
  background: #fff;
  margin: 5px;
  padding: 0px;
`;

export const DivWrapper = styled.div``;
