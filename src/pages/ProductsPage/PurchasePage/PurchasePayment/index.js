import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CreditCard from '~/components/CreditCard';

export default function PurchasePage({ onSubmit, animation, outcome }) {
  return (
    <Row className="mt-3 w-100">
      <Col lg="12">
        <h1 className="display-4 text-light text-center">
          Finalize sua compra
        </h1>

        <CreditCard
          onSubmit={onSubmit}
          animation={animation}
          outcome={outcome}
        />
      </Col>
    </Row>
  );
}

PurchasePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  animation: PropTypes.bool.isRequired,
  outcome: PropTypes.bool,
};

PurchasePage.defaultProps = {
  outcome: null,
};
