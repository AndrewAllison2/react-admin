import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import GeographyChart from "../../components/GeographyChart.jsx";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="GeographyChart CHART" subtitle="Simple GeographyChart Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography;