import produce from 'immer';

const INITIAL_STATE = {
  products: [],
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
      case '@product/ADD_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId = action.payload.categorySelected;
        break;
      }
      case '@product/REMOVE_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId =
          INITIAL_STATE.filters.categorySelected;
        break;
      }
      case '@product/ADD_FILTER': {
        draft.filters.filter = action.payload.filter;
        break;
      }
      case '@product/REMOVE_FILTER': {
        draft.filters.filter = INITIAL_STATE.filters.filter;
        break;
      }
      case '@product/ADD_SEARCHTEXT': {
        draft.filters.searchText = action.payload.text;
        break;
      }
      case '@product/REMOVE_SEARCHTEXT': {
        draft.filters.searchText = INITIAL_STATE.filters.searchText;
        break;
      }
      default:
        return state;
    }
  });
}
