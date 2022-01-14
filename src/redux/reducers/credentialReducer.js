import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  name: "",
  email: "",
  number: "",
};

export const credentialReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case ActionTypes.SET_NUMBER:
      return {
        ...state,
        number: payload,
      };

    default:
      return state;
  }
};
