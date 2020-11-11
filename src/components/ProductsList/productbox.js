import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSpring } from 'react-spring';
import { RequestFavoriteItems } from '~/store/modules/user/actions';
import history from '~/services/history';

import {
  DivPerProduct,
  DivProduct,
  ProductImage,
  ProductTitle,
  ProductPrice,
  DivHolder,
  DivTitle,
  DivSecond,
} from './styles';

import FavoriteIcon from '../FavoriteIcon';

const calc = () => [window.innerHeight, window.innerWidth, 1.1];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${0}deg) rotateY(${0}deg) scale(${s})`;

export default function ProductBox({ item, myFavorites }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 1,
      tension: 500,
      friction: 150,
      clamp: true,
    },
  }));

  const dispatch = useDispatch();
  const favoriteItem = myFavorites.includes(item.id);
  const [favorite, setFavorite] = useState(favoriteItem);

  const MoveToProductPage = () => {
    history.push(`/product/${item.id}`);
    history.go();
  };

  const changeFavorite = () => {
    setFavorite(!favorite);
    dispatch(RequestFavoriteItems(item.id, !favorite));
  };

  return (
    <DivPerProduct lg="2">
      <DivProduct
        onMouseMove={() => set({ xys: calc() })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <DivHolder>
          <DivTitle>
            <ProductTitle onClick={MoveToProductPage}>
              {item.product_name}
            </ProductTitle>
            <FavoriteIcon favorite={favorite} onPress={changeFavorite} />
          </DivTitle>
          <DivSecond onClick={MoveToProductPage} className="2p_item">
            <ProductImage src={item.url} />
            <ProductPrice>
              {item.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ProductPrice>
          </DivSecond>
        </DivHolder>
      </DivProduct>
    </DivPerProduct>
  );
}

ProductBox.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  myFavorites: PropTypes.arrayOf(PropTypes.number).isRequired,
};
