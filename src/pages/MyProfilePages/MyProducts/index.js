import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import api from '~/services/api';
import MyProductList from '~/components/MyProducts';

export default function MyProducts() {
  const [myProducts, SetMyProducts] = useState([]);

  const sortItems = (a, b) => {
    if (a.product.status_id > b.product.status_id) {
      return 1;
    }
    if (a.product.status_id < b.product.status_id) {
      return -1;
    }
    return 0;
  };

  const loadMyProducts = async () => {
    const response = await api.get('myProducts');

    SetMyProducts(response.data.sort(sortItems));
  };

  useEffect(() => {
    loadMyProducts();
  }, []);

  return (
    <Container>
      <MyProductList data={myProducts} />
    </Container>
  );
}
