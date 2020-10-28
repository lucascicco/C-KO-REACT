import { toast } from 'react-toastify';
import api from '~/services/api';

export const EmptyObjectLocation = async (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  const response_cep = await api.get('checkingCep', {
    params: {
      postcode: obj.postcode,
    },
  });

  const postcodeValidation = !response_cep.data;

  if (postcodeValidation) {
    toast.error('CEP inválido, preencha corretamente.');
  }

  return nullValue || emptyValue || postcodeValidation;
};

export const EmptyObject = (obj) => {
  const emptyValue = Object.values(obj).some((element) => element === '');
  const nullValue = Object.values(obj).some((element) => element === null);

  return nullValue || emptyValue;
};
