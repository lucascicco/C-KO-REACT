import React from 'react';
import ProductBox from './productbox';
import { DivWrapper } from './styles';

export default function ProductList({ data }) {
  const productItems = data.map((item, index) => {
    return <ProductBox item={item} key={index} />;
  });

  return <DivWrapper className="row offset-md-1">{productItems}</DivWrapper>;
}
