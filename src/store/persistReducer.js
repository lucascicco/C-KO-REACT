import { persistReducer } from 'redux-persist';
import localforage from 'localforage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'products',
      storage: localforage,
      whitelist: ['auth', 'user'],
      blacklist: ['products'],
    },
    reducers
  );
  return persistedReducer;
};
