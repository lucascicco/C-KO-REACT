import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CreditCard from '~/components/CreditCard';
import { Button, DivButton } from './styles';

export default function PurchasePage() {
  return (
    <Row className="mt-3">
      <Col lg="12">
        <h1 className="display-4 text-light text-center">
          Finalize sua compra
        </h1>

        <CreditCard />

        <DivButton>
          <Button>Efetuar compra</Button>
        </DivButton>
      </Col>
    </Row>
  );
}
