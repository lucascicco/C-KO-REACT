import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  category_modal: false,
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
      case '@product/MODAL_ON': {
        draft.category_modal = true;
        break;
      }
      case '@product/MODAL_OFF': {
        draft.category_modal = false;
        break;
      }
      default:
        return state;
    }
  });
}
