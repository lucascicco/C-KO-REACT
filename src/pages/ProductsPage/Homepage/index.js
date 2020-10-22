import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Content } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import NavBar from '~/components/Nav';
import ProductList from '~/components/ProductsList';
import FakeData from '~/utils/FakeData';

export default function HomePage() {
  const dispatch = useDispatch();

  return (
    <Content>
      <NavBar
        onLogOut={() => {
          dispatch(signOut());
        }}
      />
      <Container className="mt-5 col-md-12">
        <ProductList data={FakeData} />
      </Container>
    </Content>
  );
}
