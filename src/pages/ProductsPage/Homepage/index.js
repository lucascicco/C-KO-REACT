import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Content } from './styles';
import ProductList from '~/components/ProductsList';
import history from '~/services/history';
import PurchaseModal from '~/components/PurchaseModal';
import FilterFunction from '~/utils/searchingLogic';

import api from '~/services/api';

import { addProducts } from '~/store/modules/products/actions';

export default function HomePage() {
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [allow, setAllow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [purchase, setPurchase] = useState([]);

  const products = useSelector((state) => state.products.products);
  const myfavorites = useSelector((state) => state.user.profile.myfavorites);
  const categoryId = useSelector(
    (state) => state.filters.filters.categorySelectedId
  );
  const searchText = useSelector((state) => state.filters.filters.searchText);

  const loadProducts = async () => {
    const response = await api.get('productsExceptMine');
    dispatch(addProducts(response.data));

    setVisibleProducts(FilterFunction(response.data, categoryId, searchText));
  };

  useEffect(() => {
    loadProducts();

    if (history.location.state !== null) {
      if (history.location.state.error) {
        return toast.error(history.location.state.error);
      }
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

  useEffect(() => {
    setVisibleProducts(FilterFunction(products, categoryId, searchText));
  }, [categoryId, searchText]);

  return (
    <Content>
      <ProductList data={visibleProducts} myfavorites={myfavorites} />
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
    </Content>
  );
}
