import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import api from '~/services/api';
import PurchaseList from '~/components/MyPurchases';
import history from '~/services/history';
import { Title } from './styles';

export default function MyPurchases() {
  const [myPurchases, setMyPurchases] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('myPurchases');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setMyPurchases(organizedData);
  };

  const navigate = (id) => {
    history.push(`/product/${id}`);
    history.go();
  };

  useEffect(() => {
    loadMySells();
  }, []);

  return (
    <Container>
      <Title>Minhas compras</Title>
      <PurchaseList data={myPurchases} navigate={navigate} />
    </Container>
  );
}
