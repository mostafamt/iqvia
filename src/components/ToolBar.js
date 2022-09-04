import React from "react";
import Toolbar from "@mui/material/Toolbar";
import CategoryButton from "./Buttons/CategoryButton";
import { sliceCategories } from "../Utils";
import { MORE_FILTERS } from "../config";

function ToolBar({ data, sx, primaryCategories }) {
  let keys = [];
  if (data) {
    keys = Object.keys(data);
  }
  return (
    <Toolbar sx={{ ...sx }}>
      {keys.slice(0, primaryCategories).map((key, idx) => {
        return (
          <CategoryButton key={idx} content={data[key]}>
            {key}
          </CategoryButton>
        );
      })}
      {keys.length > 0 && primaryCategories !== keys.length && (
        <CategoryButton
          content={sliceCategories(data, primaryCategories)}
          moreFiltersContent={true}
        >
          {MORE_FILTERS}
        </CategoryButton>
      )}
    </Toolbar>
  );
}

export default ToolBar;
