import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from './styles';
import ProductList from '~/components/ProductsList';
import history from '~/services/history';
import PurchaseModal from '~/components/PurchaseModal';

import api from '~/services/api';

import { addProducts } from '~/store/modules/products/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const [allow, setAllow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState([]);

  const products = useSelector((state) => state.products.products);
  const myfavorites = useSelector((state) => state.user.profile.myfavorites);

  const loadProducts = async () => {
    const response = await api.get('productsExceptMine');
    dispatch(addProducts(response.data));
  };

  useEffect(() => {
    loadProducts();

    if (history.location.state !== null) {
      setAllow(history.location.state.previousPage === 'purchasePage');
      setVisible(
        history.location.state.previousPage === 'purchasePage' &&
          history.location.state.purchase !== null
      );
      setPurchase(history.location.state.purchase);
      window.history.replaceState(null, '');
    } else {
      setAllow(false);
      setVisible(false);
    }
  }, []);

  return (
    <Content>
      <Container className="mt-5 col-lg-12  pb-2">
        <ProductList data={products} myfavorites={myfavorites} />
        {allow && (
          <PurchaseModal
            item={purchase}
            visible={visible}
            setOff={() => {
              setVisible(false);
              setAllow(false);
            }}
          />
        )}
      </Container>
    </Content>
  );
}
