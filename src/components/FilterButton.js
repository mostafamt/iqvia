import React from "react";
import Button from "@mui/material/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import BPopover from "./BPopover";
import { useSelector } from "react-redux";
import styles from "../style/popover.module.css";
import { MORE_FILTERS } from "../config";

function FilterButton({ content, children, moreFiltersContent }) {
  const count = useSelector((state) => {
    return state.filter[children];
  });

  const popover = (
    <Popover
      id="popover-basic"
      // className={styles.custom_popover}
      className={[
        styles.custom_popover,
        children === MORE_FILTERS ? styles.more_popover : null,
      ].join(" ")}
    >
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
          fontSize: { xs: "0.8rem", sm: ".85rem", md: "1rem" },
          ml: !count ? "auto" : "inherit",
          px: { xs: 1, sm: 1.6, md: 2 },
        }}
      >
        {children}
        {count && count.length > 0 && <span>&nbsp;({count.length})</span>}
      </Button>
    </OverlayTrigger>
  );
}

export default FilterButton;
