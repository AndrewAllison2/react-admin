import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import GeographyChart from "../../components/GeographyChart.jsx";
import { tokens } from "../../theme.js";
import { useTheme } from "@mui/material";

const Geography = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;