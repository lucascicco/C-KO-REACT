import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { RowGeral, ColWrapper } from './styles';

export default function MyProducts({ data }) {
  return (
    <RowGeral>
      <ColWrapper xl="7">
        {data.map((item) => {
          return (
            <Item
              product={item.product}
              soldQuantity={item.quantity_sold}
              sellsDone={item.sellsdone}
            />
          );
        })}
      </ColWrapper>
    </RowGeral>
  );
}

MyProducts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        status_id: PropTypes.number,
        purchasable: PropTypes.bool,
        url: PropTypes.string,
        id: PropTypes.number,
        product_name: PropTypes.string,
        category: PropTypes.number,
        price: PropTypes.number,
        quantity: PropTypes.number,
        description: PropTypes.string,
        status: PropTypes.string,
        paused_at: PropTypes.oneOfType([
          PropTypes.oneOf([null]),
          PropTypes.string,
        ]),
        name: PropTypes.string,
        path: PropTypes.string,
        createdAt: PropTypes.oneOfType([
          PropTypes.oneOf([null]),
          PropTypes.string,
        ]),
        updatedAt: PropTypes.oneOfType([
          PropTypes.oneOf([null]),
          PropTypes.string,
        ]),
        seller: PropTypes.number,
        features: PropTypes.number,
      }).isRequired,
      sellsdone: PropTypes.number,
    }).isRequired
  ).isRequired,
};
