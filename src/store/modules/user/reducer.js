import produce from 'immer';

const INITIAL_STATE = {
  profile: {
    user: {},
    location: null,
    personal_data: null,
    myfavorites: [],
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile.user.id = action.payload.user.id;
        draft.profile.user.name = action.payload.user.name;
        draft.profile.user.email = action.payload.user.email;
        draft.profile.user.avatar = action.payload.user.avatar;
        draft.profile.location = action.payload.user.user_location;
        draft.profile.personal_data = action.payload.user.user_personal_info;
        draft.profile.myfavorites =
          action.payload.user.favorite_items === null
            ? []
            : action.payload.user.favorite_items;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile.user.name = action.payload.profile.name;
        draft.profile.user.email = action.payload.profile.email;
        break;
      }
      case '@user/UPDATE_LOCATION_SUCCESS': {
        draft.profile.location = action.payload.location;
        break;
      }
      case '@user/UPDATE_PERSONAL_SUCCESS': {
        draft.profile.personal_data = action.payload.personalInfo;
        break;
      }
      case '@user/ADD_FAVORITE_ITEM': {
        draft.profile.myfavorites.push(action.payload.itemNumber);
        break;
      }
      case '@user/REMOVE_FAVORITE_ITEM': {
        const itemIndex = draft.profile.myfavorites.findIndex(
          (number) => action.payload.itemNumber === number
        );
        draft.profile.myfavorites.splice(itemIndex, 1);
        break;
      }
      case '@user/ADD_AVATAR_IMAGE': {
        draft.profile.user.avatar = action.payload.avatar;
        break;
      }
      case '@auth/FIRST_ACCESS_ON': {
        draft.profile.user.id = action.payload.user.id;
        draft.profile.user.name = action.payload.user.name;
        draft.profile.user.email = action.payload.user.email;
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
