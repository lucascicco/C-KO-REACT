import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  updateAccountSuccess,
  updateLocationSuccess,
  updatePersonalDataSuccess,
  addFavoriteItem,
  removeFavoriteItem,
} from './actions';

import api from '~/services/api';

export function* UpdateAccountSaga({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    const { user } = response.data;

    yield put(updateAccountSuccess(user));
  } catch (e) {
    toast.error('Houve um erro ao atualizar seus dados, verifique seus dados.');
  }
}

export function* CreateLocationSaga({ payload }) {
  try {
    const {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    } = payload.data;

    const response = yield call(api.post, 'location', {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    });

    yield put(updateLocationSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro ao atualizar seus dados, verifique seus dados.');
  }
}

export function* UpdateLocationSaga({ payload }) {
  try {
    const {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    } = payload.data;

    const response = yield call(api.put, 'location', {
      street,
      city,
      country,
      neighborhood,
      postcode,
      state,
      street_number,
    });

    yield put(updateLocationSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro ao atualizar seus dados, verifique seus dados.');
  }
}

export function* CreatePersonalSaga({ payload }) {
  try {
    const {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    } = payload.data;

    const response = yield call(api.post, 'personal_data', {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    });

    yield put(updatePersonalDataSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro ao atualizar seus dados, verifique seus dados.');
  }
}

export function* UpdatePersonalSaga({ payload }) {
  try {
    const {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    } = payload.data;

    const response = yield call(api.put, 'personal_data', {
      birthday,
      gender,
      cellphone,
      profession,
      identification,
    });

    yield put(updatePersonalDataSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro ao atualizar seus dados, verifique seus dados.');
  }
}

export function* FavoriteSaga({ payload }) {
  const { itemNumber, favorite } = payload;

  if (favorite) {
    yield call(api.put, 'Add_favoriteitem', {
      item: itemNumber,
    });

    yield put(addFavoriteItem(itemNumber));
  } else {
    yield call(api.put, 'Remove_favoriteitem', {
      item: itemNumber,
    });

    yield put(removeFavoriteItem(itemNumber));
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', UpdateAccountSaga),
  takeLatest('@user/CREATE_LOCATION_REQUEST', CreateLocationSaga),
  takeLatest('@user/CREATE_PERSONAL_REQUEST', CreatePersonalSaga),
  takeLatest('@user/UPDATE_LOCATION_REQUEST', UpdateLocationSaga),
  takeLatest('@user/UPDATE_PERSONAL_REQUEST', UpdatePersonalSaga),
  takeLatest('@user/REQUEST_FAVORITE_ITEM', FavoriteSaga),
]);
