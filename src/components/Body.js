import React from "react";
import Filter from "./Filter";
import AppliedFilters from "./AppliedFilters";
import Box from "@mui/material/Box";

function Body() {
  return (
    <Box sx={{ flexGrow: 1, mx: 2, mt: 4 }}>
      <Filter />
      <AppliedFilters />
    </Box>
  );
}

export default Body;
