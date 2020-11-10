import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { RowGeral, ColWrapper } from './styles';

export default function MyPurchases({ data }) {
  return (
    <RowGeral>
      <ColWrapper xl="7">
        {data.map((item) => {
          return <Item item={item} />;
        })}
      </ColWrapper>
    </RowGeral>
  );
}

MyPurchases.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      buyer: PropTypes.number,
      canceled_at: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      createdAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      frete_price: PropTypes.number,
      id: PropTypes.number,
      location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        neighborhood: PropTypes.string,
        postcode: PropTypes.string,
        state: PropTypes.string,
        street: PropTypes.string,
        street_number: PropTypes.string,
      }),
      payment_form: PropTypes.string,
      product: PropTypes.number,
      purchase_code: PropTypes.string,
      purchase_location: PropTypes.number,
      purchase_product: PropTypes.shape({
        category: PropTypes.number,
        path: PropTypes.string,
        price: PropTypes.number,
        product_name: PropTypes.string,
        url: PropTypes.string,
      }),
      purchase_quantity: PropTypes.number,
      seller: PropTypes.number,
      total_price: PropTypes.number,
      updatedAt: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.string,
      ]),
      user_seller: PropTypes.shape({
        personal_info: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    })
  ).isRequired,
};
