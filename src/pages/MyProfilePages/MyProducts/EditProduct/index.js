import React,  { useState } from 'react';
import {
  Input,
  Button,
  RowWrapper,
  ColWrapper,
  FormInput,
  Title,
  Description
} from './styles';

import {
  onChange_onlyNumber,
  onChange_onlyTextandNumber,
} from '~/utils/RestrictInputs';

import { formatarMoeda, currencyDecimalST } from '~/utils/masks';


export default EditProduct({ }){
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  return(
    <RowGeral>
      <ColWrapper>
        <FormInput>
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
              onChange_onlyTextandNumber(e.target.value, setDescription);
            }}
          />

          <Button type="submit">Editar</Button>
        </FormInput>
      </ColWrapper>
    </RowGeral>
  )
}
