import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { Div, ColWrapper } from './styles';

export default function MyCartList({ products, onDeleteProduct }) {
  return (
    <Div>
      <ColWrapper xl="7">
        {products.map((product) => {
          return <Item product={product} onDeleteProduct={onDeleteProduct} />;
        })}
      </ColWrapper>
    </Div>
  );
}

MyCartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
