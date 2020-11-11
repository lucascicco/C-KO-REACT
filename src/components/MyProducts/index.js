import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { RowGeral, ColWrapper } from './styles';

export default function MyProducts({
  data,
  goNextClick,
  goEditProduct,
  openProcess,
}) {
  return (
    <RowGeral>
      <ColWrapper xl="7">
        {data.map((item) => {
          return (
            <Item
              goNextClick={goNextClick}
              product={item.product}
              soldQuantity={item.quantity_sold}
              sellsDone={item.sellsdone}
              goEditProduct={goEditProduct}
              openProcess={openProcess}
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
  goNextClick: PropTypes.func.isRequired,
  goEditProduct: PropTypes.func.isRequired,
  openProcess: PropTypes.func.isRequired,
};
