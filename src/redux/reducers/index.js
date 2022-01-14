import { combineReducers } from "redux";
import { credentialReducer } from "./credentialReducer";
import { hobbyReducer } from "./hobbyReducers";

const reducers = combineReducers({
  allCredentials: credentialReducer,
  allHobbies: hobbyReducer,
});

export default reducers;
