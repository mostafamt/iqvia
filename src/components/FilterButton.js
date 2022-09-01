import React from "react";
import Button from "@mui/material/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import BPopover from "./BPopover";
import { useSelector } from "react-redux";

function FilterButton({ content, children, moreFiltersContent }) {
  const count = useSelector((state) => {
    return state.filter[children];
  });

  const popover = (
    <Popover id="popover-basic" style={{ minWidth: "95%" }}>
      <BPopover
        content={content}
        moreFiltersContent={moreFiltersContent}
        parent={children}
      />
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button
        color="inherit"
        variant={count && count.length > 0 ? "outlined" : "contained"}
        sx={{
          mr: 1,
          fontSize: { xs: "0.8rem", sm: ".8rem" },
          ml: !count ? "auto" : "inherit",
        }}
      >
        {children}
        {count && count.length > 0 && <span>&nbsp;({count.length})</span>}
      </Button>
    </OverlayTrigger>
  );
}

export default FilterButton;
