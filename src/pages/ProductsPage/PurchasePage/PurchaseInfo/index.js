import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineArrowRight, AiFillCreditCard } from 'react-icons/ai';
import PropTypes from 'prop-types';
import ConvertBRL from '~/utils/ConvertMoney';

import {
  ImgProduct,
  Div1,
  DivInfo1,
  DivInfo2,
  DivTitle,
  Title,
  DivSecond,
  Text,
  DivValues,
  DivTotal,
  Div2,
  DivAddress,
  AddressTitle,
  DivPayment1,
  DivPayment2,
  ButtonNext,
  ButtonText,
  PaymentTitle,
  Div3,
  CreditCard,
  CreditCardText,
  Strong,
} from './styles';

export default function PurchaseInfo({ state, setPage }) {
  const {
    location,
    price,
    purchase_quantity,
    frete,
    product_name,
    image_url,
    total_price,
    total_products,
  } = state;

  return (
    <Row className="d-flex justify-content-center mt-3">
      <Col lg="8">
        <h1 className="display-4 text-dark text-center">
          Informações da compra
        </h1>

        <Div1>
          <DivInfo1 lg="5">
            <ImgProduct src={image_url} />
          </DivInfo1>

          <DivInfo2 lg="7">
            <DivTitle>
              <Title>{product_name}</Title>
            </DivTitle>

            <DivSecond>
              <DivValues>
                <Text>
                  Valor unitário:
                  {ConvertBRL(price)}
                </Text>
                <Text>
                  Quantidade: {purchase_quantity} x {ConvertBRL(price)} ={' '}
                  {ConvertBRL(total_products)}
                </Text>

                <Text>Preço frete: {ConvertBRL(frete.fretePrice)}</Text>
              </DivValues>

              <DivTotal>
                <Text>
                  Total: <Strong>{ConvertBRL(total_price)}</Strong>
                </Text>
              </DivTotal>
            </DivSecond>
          </DivInfo2>
        </Div1>

        <Div2>
          <DivAddress>
            <AddressTitle>Endereço de entrega</AddressTitle>
            <Text>
              {location.state}, {location.city}. {location.postcode}
            </Text>
            <Text>
              {location.street}, {location.street_number}
            </Text>
          </DivAddress>
        </Div2>

        <Div3>
          <DivPayment1 lg="6">
            <PaymentTitle>Forma de pagamento</PaymentTitle>
            <CreditCard>
              <AiFillCreditCard size={30} />
              <CreditCardText>Cartão de crédito</CreditCardText>
            </CreditCard>
          </DivPayment1>

          <DivPayment2 lg="6">
            <ButtonNext onClick={() => setPage('second')}>
              <ButtonText className="display-4">Prosseguir</ButtonText>
              <AiOutlineArrowRight size={60} />
            </ButtonNext>
          </DivPayment2>
        </Div3>
      </Col>
    </Row>
  );
}

PurchaseInfo.propTypes = {
  state: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      postcode: PropTypes.string.isRequired,
      street_number: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
    total_price: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    purchase_quantity: PropTypes.number.isRequired,
    total_products: PropTypes.number.isRequired,
    frete: PropTypes.shape({
      fretePrice: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  setPage: PropTypes.func.isRequired,
};
