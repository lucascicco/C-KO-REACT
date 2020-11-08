import produce from 'immer';

const INITIAL_STATE = {
  category_modal: false,
  filters: {
    categorySelectedId: 0,
    filter: '',
    searchText: '',
  },
};

export default function filters(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@product/ADD_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId = action.payload.categorySelected;
        break;
      }
      case '@product/REMOVE_CATEGORY_SELECTED': {
        draft.filters.categorySelectedId =
          INITIAL_STATE.filters.categorySelectedId;
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
      case '@product/MODAL_ON': {
        draft.category_modal = true;
        break;
      }
      case '@product/MODAL_OFF': {
        draft.category_modal = false;
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
