import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import api from '~/services/api';
import history from '~/services/history';
import SellsList from '~/components/MySells';
import { Title } from './styles';

export default function MySells() {
  const [mySells, SetMySells] = useState([]);

  const loadMySells = async () => {
    const response = await api.get('mySells');

    const organizedData = response.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    SetMySells(organizedData);
  };

  useEffect(() => {
    loadMySells();
  }, []);

  return (
    <Container>
      <Title>Minhas vendas</Title>
      <SellsList data={mySells} />
    </Container>
  );
}
