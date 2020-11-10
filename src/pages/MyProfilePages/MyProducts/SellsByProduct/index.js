import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import Item from './item';
import { RowGeral, ColWrapper } from './styles';

export default function MySellsList({ data, openModal }) {
  return (
    <RowGeral>
      <Motion
        defaultStyle={{
          x: window.innerHeight - (window.innerHeight / 100) * 20,
        }}
        style={{ x: spring(0, { stiffness: 150, damping: 50 }) }}
      >
        {(style) => (
          <ColWrapper xl="7" style={{ transform: `translateX(${style.x}px)` }}>
            {data.map((item) => {
              return (
                <Item
                  item={item}
                  key={item.id.toString()}
                  openModal={openModal}
                />
              );
            })}
          </ColWrapper>
        )}
      </Motion>
    </RowGeral>
  );
}

MySellsList.propTypes = {
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
      user_buyer: PropTypes.shape({
        personal_info: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
      }),
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
