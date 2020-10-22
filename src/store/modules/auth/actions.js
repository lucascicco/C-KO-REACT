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
export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: data,
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

export function TurnFirstAccessOff() {
  return {
    type: '@auth/TURN_OFF_FIRST_ACCESS',
  };
}
