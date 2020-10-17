import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'products',
      whitelist: ['auth'],
      blacklist: ['products', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
