import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import { AiFillEdit } from 'react-icons/ai';
import FavoriteIcon from '~/components/FavoriteIcon';
import history from '~/services/history';
import TranslateStatus from '~/utils/translateStatus';

import {
  ProductImage,
  ProductDetails,
  ProductPrice,
  ProductTitle,
  ProductDiv,
  ProductsSold,
  SoldFavoriteDiv,
  ProductDiv2,
  ProductStock,
  QuantityDiv,
  QuantityText,
  QuantitySmallText,
  QuantityInput,
  InputMoreUnitys,
  NotAvailable,
  TitleDescription,
  DescriptionText,
  RowGeral,
  DescriptionCol,
  SellerRow,
  WarningText,
  ButtonEdit,
  TextAbsolute,
} from './styles';

export default function ProductPage({
  product,
  favorite,
  onFavoritePress,
  sellsDone,
  error,
  profile_id,
}) {
  const [dropdownValue, setDropDown] = useState('Selecione uma quantidade');
  const [quantitySelected, setQuantity] = useState('');
  const [qttAvailable, setQttAvailable] = useState(true);
  const status = TranslateStatus(product.status);

  const options = Array.from({
    length: product.quantity > 7 ? 7 : product.quantity,
  }).map((x, y) => {
    if (y + 1 < 7) {
      return {
        value: y + 1,
        label: `${y + 1} unidade`,
      };
    }
    return {
      value: '',
      label: `Mais unidades`,
    };
  });

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setQuantity(Number(e.target.value));
    }

    if (Number(e.target.value) > product.quantity) {
      setQttAvailable(false);
    }

    if (Number(e.target.value) < product.quantity) {
      setQttAvailable(true);
    }
  };

  const buyProduct = () => {
    if (quantitySelected > 0 && qttAvailable) {
      history.push(`/purchase/personal/${product.id}`, {
        purchase_quantity: quantitySelected,
        product_name: product.product_name,
        price: product.price,
        image_url: product.url,
        previousPage: 'productPage',
      });
      history.go();
    }
  };

  return (
    <Row className="mt-5 p-3">
      {error && product.status !== 'open' && (
        <TextAbsolute className="display-2">{status}</TextAbsolute>
      )}

      {error && product.seller === profile_id && (
        <SellerRow>
          <Col
            lg="12"
            className="d-flex justify-content-between align-items-center"
          >
            <WarningText>Você é o proprietário desse produto</WarningText>

            <ButtonEdit
              onClick={() => {
                console.log('Trying');
              }}
            >
              <AiFillEdit size={60} />
            </ButtonEdit>
          </Col>
        </SellerRow>
      )}

      <RowGeral error={!!error}>
        <Col
          lg="5"
          className="d-flex justify-content-center align-items-center"
        >
          <Zoom zoomMargin={40}>
            <ProductImage src={product.url} className="shadow-lg" />
          </Zoom>
        </Col>

        <Col lg={{ span: 6, offset: 1 }}>
          <ProductDetails>
            <SoldFavoriteDiv>
              <ProductsSold>{sellsDone} vendidos</ProductsSold>
              <FavoriteIcon
                favorite={favorite}
                onPress={onFavoritePress}
                disabled={error}
              />
            </SoldFavoriteDiv>

            <ProductDiv>
              <ProductTitle>{product.product_name}</ProductTitle>
              <Button
                variant="primary"
                size="lg"
                block
                className="shadow"
                onClick={buyProduct}
                disabled={error}
              >
                Comprar
              </Button>
            </ProductDiv>

            <ProductDiv2>
              <ProductPrice>
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </ProductPrice>
              <ProductStock status={status}>
                {status === 'Aberto' ? 'Disponível em estoque' : status}
              </ProductStock>
            </ProductDiv2>

            <QuantityDiv>
              <QuantityText>Quantidade: </QuantityText>

              <Dropdown
                options={options}
                placeholder="Selecione uma quantidade"
                onChange={(value) => {
                  setQttAvailable(true);
                  setDropDown(value.label);
                  setQuantity(value.value);
                }}
                value={dropdownValue}
                className="w-50 ml-2 shadow"
                disabled={!!error}
              />

              <QuantitySmallText>
                ({product.quantity}) disponíveis
              </QuantitySmallText>
            </QuantityDiv>

            <QuantityInput>
              {dropdownValue === 'Mais unidades' && (
                <InputMoreUnitys
                  placeholder="Quantidade"
                  onChange={onChange}
                  value={quantitySelected}
                  maxLength="3"
                  available={qttAvailable}
                  className="shadow"
                />
              )}
              {!qttAvailable && <NotAvailable>Sem estoque</NotAvailable>}
            </QuantityInput>
          </ProductDetails>
        </Col>
      </RowGeral>

      <DescriptionCol
        lg={{ span: 12 }}
        className="mt-4 border-top border-dark"
        error={error}
      >
        <TitleDescription>Descrição</TitleDescription>
        <DescriptionText>{product.description}</DescriptionText>
      </DescriptionCol>
    </Row>
  );
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    seller: PropTypes.number.isRequired,
  }).isRequired,
  favorite: PropTypes.bool.isRequired,
  onFavoritePress: PropTypes.func.isRequired,
  sellsDone: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
  profile_id: PropTypes.number.isRequired,
};
