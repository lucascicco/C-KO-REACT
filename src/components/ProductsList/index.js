import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from './productbox';
import { DivWrapper } from './styles';

export default function ProductList({ data, myfavorites }) {
  const productItems = data.map((item) => {
    return <ProductBox item={item} key={item.id} myFavorites={myfavorites} />;
  });

  return <DivWrapper className="row offset-md-1">{productItems}</DivWrapper>;
}

ProductList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      product_name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  myfavorites: PropTypes.arrayOf([PropTypes.number]).isRequired,
};
