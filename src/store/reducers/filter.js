import * as actionTypes from "../actionTypes";
import { data } from "../../data";

let initialFilters = {};

Object.keys(data).forEach((key, idx) => {
  initialFilters = { ...initialFilters, [key]: [] };
});

const reducer = (state = initialFilters, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILTER:
      let parent = action.parent;
      const content = action.content;
      return { ...state, [parent]: [...content] };
    case actionTypes.REMOVE_FILTER:
      const _parent = action.parent;
      return {
        ...state,
        [_parent]: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
