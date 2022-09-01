import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { grey } from "@mui/material/colors";
import FilterButton from "./FilterButton";
import { data } from "../data.js";

export default function Filter() {
  const NUMBER_OF_TABLET_FILTERS = 4;
  const NUMBER_OF_MOBILE_FILTERS = 2;
  const keys = Object.keys(data);
  // console.log(data.size);
  const styles = {
    appbar: {
      backgroundColor: "white",
      color: grey[900],
    },
  };

  const trimData = (removedCategories) => {
    let content = {};
    Object.keys(data)
      .slice(removedCategories)
      .forEach((category) => {
        content = { ...content, [category]: data[category] };
      });
    return content;
  };

  const renderMobileFilter = () => {
    return (
      <>
        {/* Tablet  */}
        <Toolbar sx={{ display: { xs: "none", sm: "flex", md: "none" } }}>
          {keys.slice(0, NUMBER_OF_TABLET_FILTERS).map((key, idx) => {
            return (
              <FilterButton key={idx} content={data[key]}>
                {key}
              </FilterButton>
            );
          })}
          {/* More Filters Button */}
          <FilterButton
            content={trimData(NUMBER_OF_TABLET_FILTERS)}
            moreFiltersContent={true}
          >
            More Filters
          </FilterButton>
        </Toolbar>
        {/* Mobile */}
        <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
          {keys.slice(0, NUMBER_OF_MOBILE_FILTERS).map((key, idx) => {
            return (
              <FilterButton key={idx} content={data[key]}>
                {key}
              </FilterButton>
            );
          })}
          {/* More Filters Button */}
          <FilterButton
            content={trimData(NUMBER_OF_MOBILE_FILTERS)}
            moreFiltersContent={true}
          >
            More Filters
          </FilterButton>
        </Toolbar>
      </>
    );
  };

  return (
    <AppBar position="static" sx={styles.appbar}>
      <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
        {keys.map((key, idx) => {
          return (
            <FilterButton key={idx} text={key} content={data[key]}>
              {key}
            </FilterButton>
          );
        })}
      </Toolbar>
      {renderMobileFilter()}
    </AppBar>
  );
}
