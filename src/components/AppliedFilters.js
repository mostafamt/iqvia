import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { add_filter } from "../store/actions/index";
import { grey } from "@mui/material/colors";

function AppliedFilters() {
  const dispatch = useDispatch();
  const _remove = (category, item) => dispatch(add_filter(category, item));
  const filters = useSelector((state) => {
    return state.filter;
  });

  const clickHandler = (e, category, item) => {
    _remove(
      category,
      filters[category].filter((el) => el.id !== item.id)
    );
  };

  const styles = {
    box: { m: 1, display: "flex", alignItems: "center" },
    filters: { mr: 1 },
    content: {
      display: "flex",
      flexWrap: "wrap",
      gap: ".5rem",
      alignItems: "center",
    },
    button: {
      p: ".2rem .3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 0,
    },
    title: { fontSize: ".8rem" },
    icon: { fontSize: "1rem", ml: 1 },
  };

  return (
    <Box sx={styles.box}>
      <Box sx={styles.filters}>Filters: </Box>
      <Box sx={styles.content}>
        {Object.keys(filters).map((category) => {
          return filters[category].map((item) => {
            return (
              <Button
                key={item.id}
                // color={grey[200]}
                variant="outlined"
                sx={styles.button}
                onClick={(e) => clickHandler(e, category, item)}
              >
                <span style={styles.title}>{item.title}</span>
                <ClearIcon sx={styles.icon} />
              </Button>
            );
          });
        })}
      </Box>
    </Box>
  );
}

export default AppliedFilters;
