export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}
export function signUpRequest({ email, password, name }) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password, name },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function FirstAccessSuccess(token, user) {
  return {
    type: '@auth/FIRST_ACCESS_ON',
    payload: { token, user },
  };
}
