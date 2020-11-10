import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import api from '~/services/api';
import PurchaseList from '~/components/MyPurchases';

export default function MyPurchases() {
  const [myPurchases, setMyPurchases] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('myPurchases');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setMyPurchases(organizedData);
  };

  useEffect(() => {
    loadMySells();
  }, []);

  return (
    <Container>
      <PurchaseList data={myPurchases} />
    </Container>
  );
}
