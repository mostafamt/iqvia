import React from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
import { add_filter } from "../../store/actions/index";

function FilterButton({ category, item }) {
  const dispatch = useDispatch();
  const remove = (category, item) => dispatch(add_filter(category, item));
  const filters = useSelector((state) => {
    return state.filter;
  });

  const clickHandler = (e, category, item) => {
    remove(
      category,
      filters[category].filter((el) => el.id !== item.id)
    );
  };

  const styles = {
    button: {
      p: ".2rem .3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 0,
    },
    icon: { fontSize: "1rem", ml: 1 },
  };

  return (
    <Button
      variant="outlined"
      // color="secondary"
      sx={styles.button}
      onClick={(e) => clickHandler(e, category, item)}
    >
      <span style={styles.title}>{item.title}</span>
      <ClearIcon sx={styles.icon} />
    </Button>
  );
}

export default FilterButton;
