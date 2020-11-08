import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';
import { Wrapper, ColWrapper, Title } from './styles';
import { Input } from '../styles';
import ReactSelect from '~/components/ReactSelect';
import Categories from '~/utils/Categorias';

export default function ProductData({ style, HandleForm }) {
  const [category, setCategory] = useState('');
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

  return (
    <Wrapper style={style}>
      <ColWrapper xl="5" md="8" lg="6">
        <Title>Formulário do produto</Title>
        <Form>
          <ReactSelect
            name="state"
            placeholder="Selecione a categoria"
            options={categories}
            onChange={(e) => setCategory(e.id)}
          />
          <Input
            name="name"
            type="text"
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="price"
            type="text"
            placeholder="Preço"
            maxLength="9"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            name="street"
            type="text"
            placeholder="Quantidade"
            value={quantity}
            onChange={(e) => setQuantity(e.target.event)}
          />
          <Input
            name="street_number"
            type="text"
            placeholder="Número"
            maxLength={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>
      </ColWrapper>
    </Wrapper>
  );
}

ProductData.propTypes = {
  style: PropTypes.string.isRequired,
  HandleForm: PropTypes.func.isRequired,
};
