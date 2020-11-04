import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { set } from 'date-fns';
import PurchaseInfo from './PurchaseInfo';
import PurchasePayment from './PurchasePayment';
import history from '~/services/history';
import api from '~/services/api';
import { CreditCardVerifier } from '~/utils/EmptyObjectVerifier';

export default function PurchasePage({ match }) {
  const [allow, setAllow] = useState(false);
  const [page, setPage] = useState('first');

  const [animation, setAnimation] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [purchase, setPurchase] = useState([]);

  const onSubmit = async (data) => {
    if (!CreditCardVerifier(data)) {
      toast.error('Algum campo não foi preenchido corretamente.');
    } else {
      try {
        setAnimation(true);

        const response = await api.post('createPurchase', {
          product: Number(match.params.id),
          purchase_quantity: history.location.state.purchase_quantity,
          payment_form: 'creditcard',
          purchase_total: history.location.state.total_products,
          frete_price: history.location.state.frete.fretePrice,
          total_price: history.location.state.total_price,
          location: history.location.state.location.id,
          frete_date: history.location.state.frete.freteDays,
        });

        setPurchase(response.data);
        setOutcome(true);
      } catch (e) {
        setOutcome(false);

        setTimeout(() => {
          setAnimation(false);
          setOutcome(null);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (history.location.state !== null) {
      setAllow(history.location.state.previousPage === 'addressPage');
    } else {
      setAllow(false);
    }
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      {allow && (
        <>
          {page === 'first' && (
            <PurchaseInfo
              state={history.location.state}
              setPage={() => setPage('second')}
            />
          )}
          {page === 'second' && (
            <PurchasePayment
              onSubmit={onSubmit}
              animation={animation}
              outcome={outcome}
            />
          )}
        </>
      )}
    </Container>
  );
}

PurchasePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
