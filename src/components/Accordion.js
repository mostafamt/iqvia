import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CountOfFiltersInCategory } from "../Utils";
import AccordionDetails from "@mui/material/AccordionDetails";
import Content from "./Content";
import Accordion from "@mui/material/Accordion";

function _Accordion({ category, content }) {
  const count = CountOfFiltersInCategory(category);

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", sm: ".85rem", md: "1rem" },
          }}
        >
          {category}
          {Boolean(count) && <span>&nbsp;({count})</span>}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Content category={category} content={content} />
      </AccordionDetails>
    </Accordion>
  );
}

export default _Accordion;
