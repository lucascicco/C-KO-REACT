import React from 'react';
import PropTypes from 'prop-types';
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

export default function ProductBox({ item }) {
  const MoveToProductPage = () => {
    history.push(`/product/${item.id}`);
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
            <ProductImage src={item.url} />
            <ProductPrice>
              {item.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ProductPrice>
          </DivSecond>
        </DivHolder>
      </DivProduct>
    </DivPerProduct>
  );
}

ProductBox.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
