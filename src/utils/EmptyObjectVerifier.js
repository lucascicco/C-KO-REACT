/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
import { toast } from 'react-toastify';
import api from '~/services/api';

export const EmptyObjectLocation = async (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  let postcodeValidation;

  if (obj.postcode) {
    const response_cep = await api.get('checkingCep', {
      params: {
        postcode: obj.postcode,
      },
    });

    postcodeValidation = !response_cep.data;

    if (postcodeValidation) {
      toast.error('CEP inválido, preencha corretamente.');
    }
  }

  return nullValue || emptyValue || postcodeValidation;
};

export const EmptyObject = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  return nullValue || emptyValue;
};

export const CompareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const array = [];

  for (const key of keys2) {
    if (!keys1.includes(key)) {
      array.push(key);
    }
  }

  const newObj2 = Object.fromEntries(
    Object.entries(obj2).filter((properties) => {
      if (!array.includes(properties[0])) {
        return properties[0];
      }
    })
  );

  let result;

  for (const key of keys1) {
    if (obj1[key] !== newObj2[key]) {
      return (result = true);
    }
    return (result = false);
  }

  return result;
};
