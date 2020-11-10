import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  RowItem,
  ColOne,
  ColTwo,
  ColTitle,
  DivOne,
  DivTwo,
  ImageItem,
  Title,
  Button,
  ButtonText,
  ButtonContact,
  ButtonContactText,
  StrongText,
  TextNormal,
  AddressDiv,
  AddressText,
  ColThree,
  DivTextWrapper,
  ColFour,
  ItalicText,
} from './styles';
import ConvertMoney from '~/utils/ConvertMoney';

export default function PurchaseItem({ item, navigate, openModal }) {
  const { purchase_product, location, user_seller } = item;

  return (
    <RowItem>
      <ColTitle md="12">
        <Title>{purchase_product.product_name}</Title>
        <ItalicText>{item.purchase_code}</ItalicText>
      </ColTitle>

      <ColOne md="3">
        <ImageItem src={purchase_product.url} />
      </ColOne>

      <ColTwo md="4">
        <DivOne>
          <StrongText>Preço total</StrongText>
          <TextNormal>{ConvertMoney(item.total_price)}</TextNormal>

          <DivTextWrapper>
            <StrongText>Data da compra</StrongText>
            <TextNormal>
              {format(new Date(item.createdAt), 'dd/MM/yyyy')}
            </TextNormal>
          </DivTextWrapper>

          <DivTextWrapper>
            <StrongText>Pagamento em</StrongText>
            <TextNormal>
              {item.payment_form === 'cash' ? 'Dinheiro' : 'Cartão de crédito'}
            </TextNormal>
          </DivTextWrapper>
        </DivOne>
      </ColTwo>

      <ColThree md="5">
        <AddressDiv>
          <StrongText>Endereço para entrega</StrongText>

          <AddressText>
            {location.state}, {location.city}. {location.postcode} <br />
            {location.street}, {location.street_number} -{' '}
            {location.neighborhood}
          </AddressText>
        </AddressDiv>

        <StrongText>Data estimada para entrega</StrongText>
        <TextNormal>
          {format(new Date(item.deliver_date), 'dd/MM/yyyy')}
        </TextNormal>
      </ColThree>

      <ColFour md="12">
        <DivTwo>
          <Button
            onClick={() => {
              navigate(purchase_product.id);
            }}
          >
            <ButtonText>Comprar novamente</ButtonText>
          </Button>

          <ButtonContact
            onClick={() => {
              openModal({
                person: user_seller,
                code: item.purchase_code,
              });
            }}
          >
            <ButtonContactText>Contato do vendedor</ButtonContactText>
          </ButtonContact>
        </DivTwo>
      </ColFour>
    </RowItem>
  );
}

PurchaseItem.propTypes = {
  item: PropTypes.shape({
    buyer: PropTypes.number,
    canceled_at: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.string,
    ]),
    createdAt: PropTypes.string,
    frete_price: PropTypes.number,
    deliver_date: PropTypes.string,
    id: PropTypes.number,
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      neighborhood: PropTypes.string,
      postcode: PropTypes.string,
      state: PropTypes.string,
      street: PropTypes.string,
      street_number: PropTypes.string,
    }),
    payment_form: PropTypes.string,
    product: PropTypes.number,
    purchase_code: PropTypes.string,
    purchase_location: PropTypes.number,
    purchase_product: PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.number,
      path: PropTypes.string,
      price: PropTypes.number,
      product_name: PropTypes.string,
      url: PropTypes.string,
    }),
    purchase_quantity: PropTypes.number,
    seller: PropTypes.number,
    total_price: PropTypes.number,
    updatedAt: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    user_seller: PropTypes.shape({
      personal_info: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
  navigate: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
