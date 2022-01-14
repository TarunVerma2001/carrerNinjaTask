import { ActionTypes } from "../constants/actionTypes";

export const setName = (name) => {
  return {
    type: ActionTypes.SET_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: ActionTypes.SET_EMAIL,
    payload: email,
  };
};

export const setNumber = (number) => {
  return {
    type: ActionTypes.SET_NUMBER,
    payload: number,
  };
};
