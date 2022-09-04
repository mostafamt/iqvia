import { data } from "../data";
import { useSelector } from "react-redux";

export const initialStore = () => {
  let res = {};
  Object.keys(data).forEach((key, idx) => {
    res = { ...res, [key]: [] };
  });
  return res;
};

export const CountOfFiltersInCategory = (category) => {
  const count = useSelector((state) => {
    return state.filter[category];
  });
  return count ? count.length : 0;
};

export const sliceCategories = (data, removedCategories) => {
  let content = {};
  if (data) {
    Object.keys(data)
      .slice(removedCategories)
      .forEach((category) => {
        content = { ...content, [category]: data[category] };
      });
  }
  return content;
};
