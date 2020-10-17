import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'products',
      storage,
      whitelist: ['auth'],
      blacklist: ['products', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
