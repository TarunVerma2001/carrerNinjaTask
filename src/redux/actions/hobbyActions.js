import { ActionTypes } from "../constants/actionTypes";

export const toggleHobby = (index) => {
    return {
      type: ActionTypes.TOGGLE_HOBBY,
      payload: index,
    };
  };