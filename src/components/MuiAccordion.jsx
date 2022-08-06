import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded,panel) => {
    setExpanded(isExpanded ? panel : false)
  } 
  return (
    <>
      <Accordion expanded={expanded === "panel1"} onChange={(e,isExpanded) => handleChange(isExpanded, 'panel1')}>
        <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            culpa asperiores corporis quod quidem tempora distinctio ad aliquid
            est commodi obcaecati, molestias laboriosam numquam suscipit labore
            impedit. Harum, asperiores quos?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={(e,isExpanded) => handleChange(isExpanded, 'panel2')}>
        <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            culpa asperiores corporis quod quidem tempora distinctio ad aliquid
            est commodi obcaecati, molestias laboriosam numquam suscipit labore
            impedit. Harum, asperiores quos?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={(e,isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            culpa asperiores corporis quod quidem tempora distinctio ad aliquid
            est commodi obcaecati, molestias laboriosam numquam suscipit labore
            impedit. Harum, asperiores quos?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
