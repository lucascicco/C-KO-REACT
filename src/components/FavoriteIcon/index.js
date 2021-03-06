import React from 'react';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { ButtonFavorite } from './styles';

export default function FavoriteIcon({ favorite, onPress, disabled }) {
  return (
    <ButtonFavorite type="button" onClick={onPress} disabled={disabled}>
      {favorite ? (
        <BsFillHeartFill size={30} color="#ef5350" />
      ) : (
        <BsHeart size={30} color="#ef5350" />
      )}
    </ButtonFavorite>
  );
}

FavoriteIcon.propTypes = {
  favorite: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

FavoriteIcon.defaultProps = {
  disabled: false,
};
