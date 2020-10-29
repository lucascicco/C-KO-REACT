import React from 'react';
import { Container } from 'react-bootstrap';
import PurchaseInfo from './PurchaseInfo';
import history from '~/services/history';

export default function PurchasePage() {
  return (
    <Container>
      <PurchaseInfo state={history.location.state} />
    </Container>
  );
}
