import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PurchaseInfo from './PurchaseInfo';
import history from '~/services/history';

export default function PurchasePage() {
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    console.log(history.location.state);
    if (history.location.state !== null) {
      setAllow(history.location.state.previousPage === 'addressPage');
    } else {
      setAllow(false);
    }
  }, []);

  return (
    <Container>
      {allow && (
        <>
          <PurchaseInfo state={history.location.state} />
        </>
      )}
    </Container>
  );
}
