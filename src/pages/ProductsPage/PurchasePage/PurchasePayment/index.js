import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import CreditCard from '~/components/CreditCard';

export default function PurchasePage({ onSubmit, animation, outcome }) {
  return (
    <Row className="mt-3 w-100 mr-auto ml-auto">
      <Motion
        defaultStyle={{
          y: window.innerHeight - (window.innerHeight / 100) * 20,
        }}
        style={{ y: spring(0, { stiffness: 200, damping: 100 }) }}
      >
        {(style) => (
          <Col lg="12" style={{ transform: `translateY(${style.y}px)` }}>
            <h1 className="display-4 text-light text-center">
              Finalize sua compra
            </h1>
            <CreditCard
              onSubmit={onSubmit}
              animation={animation}
              outcome={outcome}
            />
          </Col>
        )}
      </Motion>
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
