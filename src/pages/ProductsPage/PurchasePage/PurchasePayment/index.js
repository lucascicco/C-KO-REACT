import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CreditCard from '~/components/CreditCard';
import { CreditCardVerifier } from '~/utils/EmptyObjectVerifier';

export default function PurchasePage() {
  const onSubmit = (data) => {
    if (CreditCardVerifier(data)) {
      toast.error('Algum campo não foi preenchido corretamente.');
    } else {
      console.log('PAGAMENTO FEITO COM SUCESSO');
    }
  };

  return (
    <Row className="mt-3">
      <Col lg="12">
        <h1 className="display-4 text-light text-center">
          Finalize sua compra
        </h1>
        <CreditCard onSubmit={onSubmit} />
      </Col>
    </Row>
  );
}
