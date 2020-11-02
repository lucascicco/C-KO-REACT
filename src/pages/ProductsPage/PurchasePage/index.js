import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PurchaseInfo from './PurchaseInfo';
import PurchasePayment from './PurchasePayment';
import history from '~/services/history';

export default function PurchasePage() {
  const [allow, setAllow] = useState(false);
  const [page, setPage] = useState('first');

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
            <PurchasePayment state={history.location.state} />
          )}
        </>
      )}
    </Container>
  );
}
