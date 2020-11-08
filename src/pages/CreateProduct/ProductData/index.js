import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Wrapper, ColWrapper, Title } from './styles';
import { Input, Button, Description } from '../styles';
import ReactSelect from '~/components/ReactSelect';
import Categories from '~/utils/Categorias';
import { ObjectProduct } from '~/utils/EmptyObjectVerifier';
import {
  onChange_onlyNumber,
  onChange_onlyTextandNumber,
} from '~/utils/RestrictInputs';
import { formatarMoeda, currencyDecimalST } from '~/utils/masks';

export default function ProductData({ style, HandleForm }) {
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
    data.price = currencyDecimalST(price);

    if (ObjectProduct(data)) {
      toast.error('Preencha todos os campos');
    } else {
      HandleForm(data);
    }
  };

  return (
    <Wrapper style={style}>
      <ColWrapper xl="5" md="8" lg="6">
        <Title>Formulário do produto</Title>
        <Form onSubmit={HandleSubmit}>
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
            placeholder="Descrição"
            value={description}
            onChange={(e) => {
              onChange_onlyTextandNumber(e.target.value, setDescription);
            }}
          />
          <Button type="submit">Próximo</Button>
        </Form>
      </ColWrapper>
    </Wrapper>
  );
}

ProductData.propTypes = {
  style: PropTypes.string.isRequired,
  HandleForm: PropTypes.func.isRequired,
};
