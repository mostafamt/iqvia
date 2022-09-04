import * as actionTypes from "../actionTypes";
import { initialStore } from "../../Utils";

let initialState = initialStore();

const reducer = (state = initialState, action) => {
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
    case actionTypes.CLEAR:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
