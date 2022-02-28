import { combineReducers } from "redux";

import taskReducer from "./taskReducer";
import languageReducer from "./languageReducer";

export default combineReducers({
  taskReducer,
  languageReducer,
});
