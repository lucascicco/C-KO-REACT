import React from 'react';
import { format } from 'date-fns';
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
  StatusText,
  ColThree,
  DivTextWrapper,
  ColFour,
} from './styles';
import TranslateStatus from '~/utils/translateStatus';
import ConvertMoney from '~/utils/ConvertMoney';

export default function PurchaseItem({ item }) {
  const { purchase_product, location, user_seller } = item;

  return (
    <RowItem>
      <ColTitle md="12">
        <Title>{purchase_product.product_name}</Title>
      </ColTitle>

      <ColOne md="3">
        <ImageItem src={purchase_product.url} />
      </ColOne>

      <ColTwo md="4">
        <DivOne>
          <StrongText>
            Preço total:{' '}
            <TextNormal>{ConvertMoney(item.total_price)}</TextNormal>
          </StrongText>

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
        <StrongText>Endereço para entrega</StrongText>

        <TextNormal>
          {location.postcode}. {location.state}, {location.city}
        </TextNormal>

        <TextNormal>
          {location.street}, {location.street_number}. {location.neighborhood}
        </TextNormal>

        <TextNormal>
          {location.street}, {location.street_number}. {location.neighborhood}
        </TextNormal>
        <DivTextWrapper>
          <StrongText>Data estimada para entrega</StrongText>
          <TextNormal>
            {format(new Date(item.deliver_date), 'dd/MM/yyyy')}
          </TextNormal>
        </DivTextWrapper>
      </ColThree>

      <ColFour md="12">
        <DivTwo>
          <Button>
            <ButtonText>Comprar novamente</ButtonText>
          </Button>

          <ButtonContact>
            <ButtonContactText>Contato do vendedor</ButtonContactText>
          </ButtonContact>
        </DivTwo>
      </ColFour>
    </RowItem>
  );
}
