import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import PurchaseInfo from './PurchaseInfo';
import PurchasePayment from './PurchasePayment';
import history from '~/services/history';
import api from '~/services/api';
import { CreditCardVerifier } from '~/utils/EmptyObjectVerifier';
import ErrorWarning from '~/components/NoAccess';
import SecurityComponent from '~/components/SecurityAnimation';

export default function PurchasePage({ match }) {
  const [allow, setAllow] = useState(null);
  const [page, setPage] = useState('first');

  const [animation, setAnimation] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [opacityControl, setOpacityControl] = useState(1);

  const animationTwo = () => {
    setPage('second');

    setTimeout(() => {
      setOpacityControl(0);
    }, 1500);

    setTimeout(() => {
      setPage('third');
    }, 2500);
  };

  const settingPermission = async () => {
    const response = await api.get('verifierProduct', {
      params: {
        product_id: Number(match.params.id),
      },
    });

    if (history.location.state !== null && response.data.allow) {
      setAllow(history.location.state.previousPage === 'addressPage');
    } else {
      setAllow(false);
    }
  };

  const onSubmit = async (data) => {
    if (CreditCardVerifier(data)) {
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

        setOutcome(true);

        history.push('/homepage', {
          purchase: response.data,
          previousPage: 'purchasePage',
        });
        history.go();
      } catch (e) {
        setOutcome(false);

        if (e.response.data.error) {
          history.push('/homepage', {
            error:
              e.response.data.error === 'soldout'
                ? 'O produto acabou de esgostar, tente mais tarde'
                : `A quantidade em estoque acabou de ser alterada para ${e.response.data.available}, tente comprar novamente`,
          });
          history.go();
          return;
        }

        toast.error(
          'Algum erro durante a transição aconteceu, verique a situação do seu cartão'
        );

        setTimeout(() => {
          setAnimation(false);
          setOutcome(null);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    settingPermission();
  }, []);

  return (
    <Container>
      {allow ? (
        <>
          {page === 'first' && (
            <PurchaseInfo
              state={history.location.state}
              setPage={animationTwo}
            />
          )}
          {page === 'second' && (
            <SecurityComponent opacityControl={opacityControl} />
          )}

          {page === 'third' && (
            <PurchasePayment
              onSubmit={onSubmit}
              animation={animation}
              outcome={outcome}
            />
          )}
        </>
      ) : (
        <>{allow !== null && <ErrorWarning />}</>
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
