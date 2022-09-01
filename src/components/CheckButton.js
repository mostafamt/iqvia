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
        fontSize: ".8rem",
        margin: ".5rem",
        // fontSize: "2rem",
      }}
    >
      {content.title}
    </Button>
  );
}

export default CheckButton;
