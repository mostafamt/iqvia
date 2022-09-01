import * as actionTypes from "../actionTypes";

export const add_filter = (parent, content) => {
  return {
    type: actionTypes.ADD_FILTER,
    parent,
    content,
  };
};

export const trie = () => {
  return {
    type: actionTypes.TRY,
  };
};

export const remove_filter = (parent) => {
  return {
    type: actionTypes.REMOVE_FILTER,
    parent,
  };
};
