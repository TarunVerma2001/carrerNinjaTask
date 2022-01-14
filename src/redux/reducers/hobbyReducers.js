import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  hobby: [
    { name: "Singing", checked: false, index: 0 },
    { name: "Dancing", checked: false, index: 1 },
    { name: "Painting", checked: false, index: 2 },
    { name: "Cooking", checked: false, index: 3 },
    { name: "Coding", checked: false, index: 4 },
  ],
};

export const hobbyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.TOGGLE_HOBBY: {
      let newHobbies = [...state.hobby];
      newHobbies[payload].checked = !newHobbies[payload].checked;
      return {
        ...state,
        hobby: newHobbies,
      };
    }

    default:
      return state;
  }
};
