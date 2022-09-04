import React from "react";
import AppliedFilters from "../components/AppliedFilters";
import Box from "@mui/material/Box";
import SecondaryAppBar from "../components/AppBars/SecondaryAppBar";

function SmartPicker({ data }) {
  return (
    <Box sx={{ flexGrow: 1, mx: 2, mt: 2 }}>
      <SecondaryAppBar data={data} />
      <AppliedFilters />
    </Box>
  );
}

export default SmartPicker;
