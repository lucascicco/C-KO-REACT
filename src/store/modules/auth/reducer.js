import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  first_access: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.first_access = false;
        draft.loading = false;
        break;
      }
      case '@auth/FIRST_ACCESS_ON': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.first_access = true;
        break;
      }
      case '@auth/TURN_OFF_FIRST_ACCESS': {
        draft.first_access = false;
        break;
      }
      default:
        return state;
    }
  });
}
