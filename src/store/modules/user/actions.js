// ACCOUNT ACTIONS
export function updateAccountRequest(data) {
  // SAGA
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}
export function updateAccountSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

// LOCATION ACTIONS
export function createLocationRequest(data) {
  // SAGA
  return {
    type: '@user/CREATE_LOCATION_REQUEST',
    payload: { data },
  };
}

export function updateLocationRequest(data) {
  // SAGA
  return {
    type: '@user/UPDATE_LOCATION_REQUEST',
    payload: { data },
  };
}

export function updateLocationSuccess(location) {
  return {
    type: '@user/UPDATE_LOCATION_SUCCESS',
    payload: { location },
  };
}

// PERSONAL DATA ACTIONS
export function createPersonalDataRequest(data) {
  // SAGA
  return {
    type: '@user/CREATE_PERSONAL_REQUEST',
    payload: { data },
  };
}

export function updatePersonalDataRequest(data) {
  // SAGA
  return {
    type: '@user/UPDATE_PERSONAL_REQUEST',
    payload: { data },
  };
}

export function updatePersonalDataSuccess(personalInfo) {
  return {
    type: '@user/UPDATE_PERSONAL_SUCCESS',
    payload: { personalInfo },
  };
}

// ADD FAVORITE ACTIONS
export function RequestFavoriteItems(itemNumber, favorite) {
  // SAGA
  return {
    type: '@user/REQUEST_FAVORITE_ITEM',
    payload: { itemNumber, favorite },
  };
}

export function addFavoriteItem(itemNumber) {
  // SAGA
  return {
    type: '@user/ADD_FAVORITE_ITEM',
    payload: { itemNumber },
  };
}

export function removeFavoriteItem(itemNumber) {
  // SAGA
  return {
    type: '@user/REMOVE_FAVORITE_ITEM',
    payload: { itemNumber },
  };
}

export function addAvatarPicture(avatar) {
  // SAGA
  return {
    type: '@user/ADD_AVATAR_IMAGE',
    payload: { avatar },
  };
}
