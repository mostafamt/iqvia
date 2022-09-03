import React from "react";
import Button from "@mui/material/Button";

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
      sx={{
        mr: 1,
        fontSize: { sm: ".8rem", md: "1rem" },
        // fontSize: ".8rem",
        margin: ".2rem",
        px: 0.5,
        py: 0.2,
        textTransform: "capitalize",
        // fontSize: "2rem",
      }}
    >
      {content.title}
    </Button>
  );
}

export default CheckButton;
