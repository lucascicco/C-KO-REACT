import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { RequestFavoriteItems } from '~/store/modules/user/actions';
import api from '~/services/api';
import CartList from '~/components/MyCartItem';

export default function MyCart() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const loadMyFavoriteProducts = async () => {
    const response = await api.get('myCart');

    setProducts(response.data);
  };

  const onDeleteProduct = (id) => {
    const removedItem = products.filter((item) => {
      return item.id !== id;
    });

    setProducts(removedItem);

    dispatch(RequestFavoriteItems(id, false));
  };

  useEffect(() => {
    loadMyFavoriteProducts();
  }, []);

  return (
    <Container>
      <CartList products={products} onDeleteProduct={onDeleteProduct} />
    </Container>
  );
}
