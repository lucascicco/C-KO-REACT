import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { Div } from './styles';

export default function MyCartList({ products, onDeleteProduct }) {
  return (
    <Div>
      {products.map((product) => {
        return <Item product={product} onDeleteProduct={onDeleteProduct} />;
      })}
    </Div>
  );
}

MyCartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
};
