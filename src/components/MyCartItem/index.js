import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { Div, ColWrapper } from './styles';

export default function MyCartList({ products, onDeleteProduct, navigate }) {
  return (
    <Div>
      <ColWrapper xl="7">
        {products.map((product) => {
          return (
            <Item
              key={product.id.toString()}
              product={product}
              onDeleteProduct={onDeleteProduct}
              navigate={navigate}
            />
          );
        })}
      </ColWrapper>
    </Div>
  );
}

MyCartList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
