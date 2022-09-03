import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import PopoverContent from "./PopoverContent";
import AccordionTitle from "./AccordionTitle";

export default function FilterAccordion({ content }) {
  const style = {
    summary: {
      "& .MuiAccordionSummary-root": {
        bgcolor: "red",
        my: 0,
        height: 0,
        // p: 0,
      },
      "& .Mui-expanded": {
        bgcolor: "red",
        m: 0,
      },
      ".MuiButtonBase-root": {
        bgcolor: "red",
        m: 0,
        p: 0,
      },
    },
  };

  return (
    <div>
      {Object.keys(content).map((category, idx) => {
        return (
          <Accordion
            key={idx}
            TransitionProps={{ unmountOnExit: true }}
            // sx={style.summary}
          >
            <AccordionTitle>{category}</AccordionTitle>
            {/* <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{category}</Typography>
            </AccordionSummary> */}
            <AccordionDetails>
              <PopoverContent content={content[category]} category={category} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
