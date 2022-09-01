import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";

function AccordionTitle({ children }) {
  const count = useSelector((state) => {
    return state.filter[children].length;
  });

  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>
        {children}
        {count > 0 && <span>&nbsp;({count})</span>}
      </Typography>
    </AccordionSummary>
  );
}

export default AccordionTitle;
