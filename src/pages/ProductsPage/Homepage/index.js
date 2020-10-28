import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import NavBar from '~/components/Nav';
import ProductList from '~/components/ProductsList';

import api from '~/services/api';

import {
  addProducts,
  addCategory,
  removeCategory,
  addFilter,
  removeFilter,
  addSearchText,
} from '~/store/modules/products/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const myfavorites = useSelector((state) => state.user.profile.myfavorites);

  console.log(myfavorites);

  const loadProducts = async () => {
    const response = await api.get('productsExceptMine');
    dispatch(addProducts(response.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Content>
      <NavBar
        onLogOut={() => {
          dispatch(signOut());
        }}
      />
      <Container className="mt-5 col-lg-12  pb-2">
        <ProductList data={products} myfavorites={myfavorites} />
      </Container>
    </Content>
  );
}
