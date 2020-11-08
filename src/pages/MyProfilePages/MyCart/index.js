import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { RequestFavoriteItems } from '~/store/modules/user/actions';
import api from '~/services/api';
import CartList from '~/components/MyCartItem';
import history from '~/services/history';
import { InputFilter, DivWrapper, ColWrapper, WarningText } from './styles';

export default function MyCart() {
  const dispatch = useDispatch();

  const [allow, setAllow] = useState(null);
  const [visible, setVisible] = useState([]);
  const [products, setProducts] = useState([]);

  const loadMyFavoriteProducts = async () => {
    const response = await api.get('myCart');

    setProducts(response.data);
    setVisible(response.data);

    setAllow(true);
  };

  const onDeleteProduct = (id) => {
    const removedItem = products.filter((item) => {
      return item.id !== id;
    });

    setVisible(removedItem);
    setProducts(removedItem);

    dispatch(RequestFavoriteItems(id, false));
  };

  const Navigate = (id) => {
    history.push(`/product/${id}`);
    history.go();
  };

  const filterCart = (text) => {
    const FiltredByText = products.filter((product) => {
      const productWord = product.product_name
        .toLowerCase()
        .includes(text.toLowerCase());

      return productWord;
    });

    setVisible(FiltredByText);
  };

  useEffect(() => {
    loadMyFavoriteProducts();
  }, []);

  return (
    <Container>
      {products.length !== 0 ? (
        <>
          <DivWrapper>
            <ColWrapper xl="8">
              <InputFilter
                type="text"
                placeholder="Digite o nome do seu item favorito"
                onChange={(e) => filterCart(e.target.value)}
                autoFocus={false}
              />
            </ColWrapper>
          </DivWrapper>

          <CartList
            products={visible}
            onDeleteProduct={onDeleteProduct}
            navigate={Navigate}
          />
        </>
      ) : (
        <>
          {allow !== null && (
            <WarningText>Seu carrinho está vazio.</WarningText>
          )}
        </>
      )}
    </Container>
  );
}
