import React from "react";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function CheckButton({ content, onAddButton, onRemoveButton, checked }) {
  const clickHandler = () => {
    if (!checked) {
      onAddButton(content);
    } else {
      onRemoveButton(content);
    }
  };

  return (
    <Button
      variant={checked ? "contained" : "outlined"}
      onClick={clickHandler}
      color="teal"
      sx={{
        mr: 1,
        fontSize: { sm: ".8rem", md: "1rem" },
        margin: ".2rem",
        px: 0.5,
        py: 0.2,
        textTransform: "capitalize",
        "&.MuiButton-contained": {
          color: grey[50],
        },
      }}
    >
      {content.title}
    </Button>
  );
}

export default CheckButton;
