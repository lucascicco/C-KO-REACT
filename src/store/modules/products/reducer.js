import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  category_modal: false,
  filters: {
    categorySelectedId: 0,
    filter: '',
    searchText: '',
  },
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/ADD_PRODUCTS': {
        draft.products = action.payload.products;
        break;
      }
      case '@auth/SIGN_OUT': {
        return INITIAL_STATE;
      }
      default:
        return state;
    }
  });
}
