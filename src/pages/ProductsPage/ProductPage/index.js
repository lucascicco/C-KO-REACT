import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import api from '~/services/api';
import NavBar from '~/components/Nav';
import ProductItem from '~/components/Product';

import { Content, ProductTitle } from './styles';

export default function ProductPage({ match }) {
  const [product, setProduct] = useState([]);

  const loadProduct = async () => {
    const response = await api.get('product', {
      params: {
        product_id: match.params.id,
      },
    });

    setProduct(response.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <Content>
      <NavBar />
      <Container>
        {product.length !== 0 ? (
          <ProductItem product={product} />
        ) : (
          <ProductTitle>Ainda não tem item.</ProductTitle>
        )}
      </Container>
    </Content>
  );
}
