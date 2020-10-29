import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import FavoriteIcon from '~/components/FavoriteIcon';
import history from '~/services/history';

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
} from './styles';

export default function ProductPage({
  product,
  favorite,
  onFavoritePress,
  sellsDone,
}) {
  const [dropdownValue, setDropDown] = useState('Selecione uma quantidade');
  const [quantitySelected, setQuantity] = useState('');
  const [qttAvailable, setQttAvailable] = useState(true);

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
      history.push(`/personal/product/${product.id}`, {
        purchase_quantity: quantitySelected,
      });
      history.go();
    }
  };

  return (
    <Row className="mt-5 p-3">
      <Row>
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
              <FavoriteIcon favorite={favorite} onPress={onFavoritePress} />
            </SoldFavoriteDiv>

            <ProductDiv>
              <ProductTitle>{product.product_name}</ProductTitle>
              <Button
                variant="primary"
                size="lg"
                block
                className="shadow"
                onClick={buyProduct}
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
              <ProductStock>Estoque disponível</ProductStock>
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
      </Row>

      <Col lg={{ span: 12 }} className="mt-4 border-top border-dark">
        <TitleDescription>Descrição</TitleDescription>
        <DescriptionText>{product.description}</DescriptionText>
      </Col>
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
  }).isRequired,
  favorite: PropTypes.bool.isRequired,
  onFavoritePress: PropTypes.func.isRequired,
  sellsDone: PropTypes.number.isRequired,
};
