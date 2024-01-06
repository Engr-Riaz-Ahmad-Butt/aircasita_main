import { AUTH_NOTIFICATION, AUTH_SET_LOADING } from "../types";

const initialState = {
  notification: {
    message: "",
    type: "",
  },
  loading: false,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case AUTH_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state; // No need to create a new object in the default case
  }
}
