import React from "react";
import Popover from "react-bootstrap/Popover";
import PopoverContent from "./PopoverContent";
import FilterAccordion from "./FilterAccordion";

function BPopover({ content, parent, moreFiltersContent }) {
  let display = <PopoverContent content={content} category={parent} />;
  if (moreFiltersContent) {
    display = <FilterAccordion content={content} />;
  }
  return <Popover.Body>{display}</Popover.Body>;
}

export default BPopover;
