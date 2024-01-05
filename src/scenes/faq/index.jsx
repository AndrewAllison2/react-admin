import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header.jsx";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme.js";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Parallel universes may exist, where you're a ruler of galaxies, dancing with alternate selves in surreal cosmic realms."
          </Typography>
        </AccordionDetails>
      </Accordion>

            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Parallel universes may exist, where you're a ruler of galaxies, dancing with alternate selves in surreal cosmic realms."
          </Typography>
        </AccordionDetails>
      </Accordion>

            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Parallel universes may exist, where you're a ruler of galaxies, dancing with alternate selves in surreal cosmic realms."
          </Typography>
        </AccordionDetails>
      </Accordion>

            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Parallel universes may exist, where you're a ruler of galaxies, dancing with alternate selves in surreal cosmic realms."
          </Typography>
        </AccordionDetails>
      </Accordion>

            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            "Parallel universes may exist, where you're a ruler of galaxies, dancing with alternate selves in surreal cosmic realms."
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}


export default FAQ;
