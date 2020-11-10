import React from 'react';
import PropTypes from 'prop-types';
import {
  RowGeral,
  ColOne,
  ColTwo,
  ColTitle,
  DivOne,
  DivTwo,
  ImageItem,
  Title,
  Button,
  ButtonText,
  ButtonDelete,
  ButtonTextDelete,
  PriceText,
  StatusText,
} from './styles';
import TranslateStatus from '~/utils/translateStatus';
import ConvertMoney from '~/utils/ConvertMoney';

export default function MyCartItem({ product, onDeleteProduct, navigate }) {
  return (
    <RowGeral>
      <ColTitle md="12">
        <Title>{product.product_name}</Title>
      </ColTitle>

      <ColOne md="3">
        <ImageItem src={product.url} />
      </ColOne>
      <ColTwo md="9">
        <DivOne>
          <PriceText>{ConvertMoney(product.price)}</PriceText>
          <StatusText open={product.status === 'open'}>
            {TranslateStatus(product.status)}
          </StatusText>
        </DivOne>

        <DivTwo>
          {product.status === 'open' && (
            <Button
              onClick={() => {
                navigate(product.id);
              }}
            >
              <ButtonText>Comprar</ButtonText>
            </Button>
          )}

          <ButtonDelete
            onClick={() => {
              onDeleteProduct(product.id);
            }}
          >
            <ButtonTextDelete>Remover</ButtonTextDelete>
          </ButtonDelete>
        </DivTwo>
      </ColTwo>
    </RowGeral>
  );
}

MyCartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};
