import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure, FirstAccessSuccess } from './actions';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'login', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (e) {
    toast.error('Houve um erro ao realizar o login, confira seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password, name } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(FirstAccessSuccess(token, user));
  } catch (err) {
    toast.error('Houve um erro ao cadastrar a conta');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
