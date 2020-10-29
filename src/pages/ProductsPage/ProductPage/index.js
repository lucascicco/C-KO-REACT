import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import api from '~/services/api';
import ProductItem from '~/components/Product';
import { RequestFavoriteItems } from '~/store/modules/user/actions';
import history from '~/services/history';

import { Content } from './styles';

export default function ProductPage({ match }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const profile = useSelector((state) => state.user.profile);
  const isFavorite = profile.myfavorites.includes(Number(match.params.id));

  const [favorite, setFavorite] = useState(isFavorite);

  const loadProduct = async () => {
    const response = await api.get('product', {
      params: {
        product_id: match.params.id,
      },
    });

    setProduct(response.data);
  };

  const handleFavoriteItem = () => {
    setFavorite(!favorite);
    dispatch(RequestFavoriteItems(Number(match.params.id), !favorite));
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <Content>
      <Container>
        {product.length !== 0 ? (
          <ProductItem
            product={product.product}
            sellsDone={product.sellsDone}
            favorite={favorite}
            onFavoritePress={handleFavoriteItem}
            history={history}
          />
        ) : null}
      </Container>
    </Content>
  );
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
