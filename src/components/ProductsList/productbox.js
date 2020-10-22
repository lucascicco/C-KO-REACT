import React from 'react';
import history from '~/services/history';

import {
  DivPerProduct,
  DivProduct,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DivHolder,
  DivTitle,
  DivSecond,
  lineMiddle,
} from './styles';

import FavoriteIcon from '../FavoriteIcon';

export default function ProductBox({ item, key }) {
  const MoveToProductPage = () => {
    history.push('/product');
    history.go();
  };

  return (
    <DivPerProduct className="col-sm-2 p-0">
      <DivProduct>
        <DivHolder>
          <DivTitle>
            <ProductTitle onClick={MoveToProductPage}>
              {item.product_name}
            </ProductTitle>
            <FavoriteIcon favorite />
          </DivTitle>
          <lineMiddle />
          <DivSecond onClick={MoveToProductPage} className="2p_item">
            <ProductImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLdgQtDPLGEwaiHr_IHPvFYQ9TiRbg2viBTw&usqp=CAU" />
            <ProductPrice>{item.price}</ProductPrice>
          </DivSecond>
        </DivHolder>
      </DivProduct>
    </DivPerProduct>
  );
}
