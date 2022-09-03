import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import { add_filter, clearAll } from "../store/actions/index";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";

function AppliedFilters() {
  const dispatch = useDispatch();
  const _remove = (category, item) => dispatch(add_filter(category, item));
  const _clearAll = (category, item) => dispatch(clearAll());
  const filters = useSelector((state) => {
    return state.filter;
  });

  const clickHandler = (e, category, item) => {
    _remove(
      category,
      filters[category].filter((el) => el.id !== item.id)
    );
  };

  const clearAllHandler = () => {
    _clearAll();
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
      // color: "#acacac",
      // borderColor: "#f50057",
    },
    title: { fontSize: ".8rem" },
    icon: { fontSize: "1rem", ml: 1 },
  };

  let isFilters = false;
  return (
    <>
      <Box sx={styles.box}>
        <Box sx={styles.filters}>Filters: {isFilters && "-none-"}</Box>
        <Box sx={styles.content}>
          {Object.keys(filters).map((category) => {
            return filters[category].map((item) => {
              isFilters = true;
              return (
                <Button
                  key={item.id}
                  variant="outlined"
                  // color="secondary"
                  sx={styles.button}
                  onClick={(e) => clickHandler(e, category, item)}
                >
                  <span style={styles.title}>{item.title}</span>
                  <ClearIcon sx={styles.icon} />
                </Button>
              );
            });
          })}
          {isFilters && (
            <Button
              variant="outlined"
              color="error"
              sx={styles.button}
              onClick={clearAllHandler}
            >
              <span style={styles.title}>Clear All</span>
              <ClearIcon sx={styles.icon} />
            </Button>
          )}
        </Box>
      </Box>
      {/* <Divider variant="inset" /> */}
      <hr />
    </>
  );
}

export default AppliedFilters;
