import React from "react";
import AppBar from "@mui/material/AppBar";
import { grey, blueGrey } from "@mui/material/colors";
import {
  NUMBER_OF_PRIMARY_MOBILE_CATEGORIES,
  NUMBER_OF_PRIMARY_TABLET_CATEGORIES,
} from "../../config";
import ToolBar from "../ToolBar";

function SecondaryAppBar({ data }) {
  let keys = [];
  if (data) {
    keys = Object.keys(data);
  }
  // const keys = Object.keys(data);

  const styles = {
    appbar: {
      backgroundColor: blueGrey[100],
      color: grey[800],
    },
  };

  return (
    <AppBar position="static" sx={styles.appbar}>
      <ToolBar
        data={data}
        sx={{ display: { xs: "none", md: "flex" } }}
        primaryCategories={keys.length}
      />
      <ToolBar
        data={data}
        sx={{ display: { xs: "none", sm: "flex", md: "none" } }}
        primaryCategories={NUMBER_OF_PRIMARY_TABLET_CATEGORIES}
      />
      <ToolBar
        data={data}
        sx={{ display: { xs: "flex", sm: "none" } }}
        primaryCategories={NUMBER_OF_PRIMARY_MOBILE_CATEGORIES}
      />
    </AppBar>
  );
}

export default SecondaryAppBar;
