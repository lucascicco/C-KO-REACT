import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
  RowGeral,
  ColWrapper,
  FormInput,
  Description,
  PauseButton,
} from './styles';
import {
  onChange_onlyNumber,
  onChange_onlyTextandNumber,
} from '~/utils/RestrictInputs';
import { ObjectProduct } from '~/utils/EmptyObjectVerifier';
import { formatarMoeda, currencyDecimalST } from '~/utils/masks';

export default function EditProduct({ handleSubmit, latestInfo, openModal }) {
  const [price, setPrice] = useState(latestInfo.price.toString());
  const [description, setDescription] = useState(latestInfo.description);
  const [quantity, setQuantity] = useState(latestInfo.quantity);

  const PressedSubmit = (data) => {
    if (ObjectProduct(data)) {
      return toast.error('Verifique se algum campo foi preenchido errado.');
    }

    data.id = latestInfo.id;
    data.price = currencyDecimalST(price);
    data.quantity = Number(data.quantity);

    return handleSubmit(data);
  };

  return (
    <RowGeral>
      <ColWrapper xl="5" md="8" lg="6">
        <FormInput autoComplete="off" onSubmit={PressedSubmit}>
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

          <PauseButton type="button" onClick={openModal}>
            Pausar anúncio
          </PauseButton>
        </FormInput>
      </ColWrapper>
    </RowGeral>
  );
}

EditProduct.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  latestInfo: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.func,
    quantity: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
