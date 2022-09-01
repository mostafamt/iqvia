import { combineReducers } from "redux";
import reducer from "./reducer";
import filter from "./filter";

export default combineReducers({
  reducer,
  filter,
});
