import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Motion, spring } from 'react-motion';

import {
  Title,
  Input,
  Button,
  Description,
  Wrapper,
  ColWrapper,
} from '../styles';
import ReactSelect from '~/components/ReactSelect';
import Categories from '~/utils/Categorias';
import { ObjectProduct } from '~/utils/EmptyObjectVerifier';
import {
  onChange_onlyNumber,
  onChange_onlyTextandNumber,
} from '~/utils/RestrictInputs';
import { formatarMoeda, currencyDecimalST } from '~/utils/masks';

export default function ProductData({ animationOne, HandleForm }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const categories = Categories.map((item) => {
    return {
      title: item.category,
      id: item.category_id,
    };
  });

  const HandleSubmit = (data) => {
    if (ObjectProduct(data)) {
      toast.error('Preencha todos os campos');
    } else {
      data.price = currencyDecimalST(price);
      data.quantity = Number(data.quantity);

      HandleForm(data);
    }
  };

  return (
    <Wrapper>
      <Motion
        defaultStyle={{
          x: -window.innerWidth,
        }}
        style={{ x: spring(animationOne, { stiffness: 200, damping: 100 }) }}
      >
        {(style) => (
          <ColWrapper
            xl="5"
            md="8"
            lg="6"
            style={{ transform: `translateX(${style.x}px)` }}
          >
            <Title>Formulário do produto</Title>
            <Form onSubmit={HandleSubmit} autoComplete="off">
              <ReactSelect
                name="category"
                placeholder="Selecione a categoria"
                options={categories}
              />
              <Input
                name="product_name"
                type="text"
                placeholder="Nome do produto"
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                name="price"
                type="text"
                placeholder="Preço"
                maxLength="10"
                value={price === 'NaN' ? 0 : price}
                onChange={(e) => setPrice(formatarMoeda(e.target.value))}
              />
              <Input
                name="quantity"
                type="text"
                maxLength={3}
                placeholder="Quantidade"
                value={quantity}
                onChange={(e) => {
                  onChange_onlyNumber(e.target.value, setQuantity);
                }}
              />

              <Description
                name="description"
                type="text"
                maxLength={349}
                placeholder="Descrição - Mínino 50 caracteres"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <Button type="submit">Próximo</Button>
            </Form>
          </ColWrapper>
        )}
      </Motion>
    </Wrapper>
  );
}

ProductData.propTypes = {
  animationOne: PropTypes.number.isRequired,
  HandleForm: PropTypes.func.isRequired,
};
