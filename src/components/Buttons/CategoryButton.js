import React from "react";
import Button from "@mui/material/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import styles from "../../style/popover.module.css";
import { MORE_FILTERS } from "../../config";
import AddIcon from "@mui/icons-material/Add";
import { CountOfFiltersInCategory } from "../../Utils";
import MoreContent from "../MoreContent";
import Content from "../Content";

function CategoryButton({ content, children, moreFiltersContent }) {
  const count = CountOfFiltersInCategory(children);

  const popover = (
    <Popover
      id="popover-basic"
      className={[
        styles.custom_popover,
        children === MORE_FILTERS ? styles.more_popover : null,
      ].join(" ")}
    >
      {moreFiltersContent ? (
        <Popover.Body>
          <MoreContent content={content} />
        </Popover.Body>
      ) : (
        <Popover.Body>
          <Content content={content} category={children} />
        </Popover.Body>
      )}
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button
        color="inherit"
        variant={Boolean(count) ? "contained" : ""}
        // variant={Boolean(count) ? "outlined" : "contained"}
        sx={{
          m: 0,
          // mr: 1,
          fontSize: { xs: "0.8rem", sm: ".85rem", md: "1rem" },
          ml: children === MORE_FILTERS ? "auto" : "inherit",
          // mr: children === MORE_FILTERS ? "auto" : "inherit",
          px: { xs: 1, sm: 1.6, md: 2 },
        }}
        endIcon={children === MORE_FILTERS ? <AddIcon /> : null}
      >
        {children}
        {Boolean(count) && <span>&nbsp;({count})</span>}
      </Button>
    </OverlayTrigger>
  );
}

export default CategoryButton;
