import React from 'react';
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
  ButtonEdit,
  ButtonEditText,
  StrongText,
  TextNormal,
  StatusText,
  ButtonSeeProcess,
} from './styles';
import TranslateStatus from '~/utils/translateStatus';

export default function ProductItem({
  product,
  sellsDone,
  soldQuantity,
  goNextClick,
  goEditProduct,
  openProcess,
}) {
  return (
    <RowItem>
      <ColTitle md="12">
        <Title>{product.product_name}</Title>
      </ColTitle>

      <ColOne md="3">
        <ImageItem src={product.url} />
      </ColOne>
      <ColTwo md="9">
        <DivOne>
          <StatusText open={product.status === 'open'}>
            {TranslateStatus(product.status)}
          </StatusText>

          <StrongText>
            Vendas feitas: <TextNormal>{sellsDone}</TextNormal>
          </StrongText>

          <StrongText>
            Quantidade vendida: <TextNormal>{soldQuantity}</TextNormal>
          </StrongText>

          <StrongText>
            Quantidade disponível: <TextNormal>{product.quantity}</TextNormal>
          </StrongText>
        </DivOne>

        <DivTwo>
          <Button
            onClick={() => {
              goNextClick(product.id);
            }}
          >
            <ButtonText>Ver vendas</ButtonText>
          </Button>

          {product.status !== 'deleted' && (
            <>
              {product.status !== 'closed' ? (
                <ButtonEdit
                  onClick={() => {
                    goEditProduct(product.id);
                  }}
                >
                  <ButtonEditText>Editar produto</ButtonEditText>
                </ButtonEdit>
              ) : (
                <ButtonSeeProcess
                  onClick={() => {
                    openProcess(product.id);
                  }}
                >
                  Acompanhar processo
                </ButtonSeeProcess>
              )}
            </>
          )}
        </DivTwo>
      </ColTwo>
    </RowItem>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  sellsDone: PropTypes.number.isRequired,
  soldQuantity: PropTypes.number.isRequired,
  goNextClick: PropTypes.func.isRequired,
  goEditProduct: PropTypes.func.isRequired,
  openProcess: PropTypes.func.isRequired,
};
