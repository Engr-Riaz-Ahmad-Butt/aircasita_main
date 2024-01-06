import { LOGIN, LOGOUT } from "../types";

export const loginAction = (creds) => {
  return (dispatch) => {};
};

export const reRegisterSnapshot = (id) => async (dispatch) => {};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
