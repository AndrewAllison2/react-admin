import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header.jsx";
import PieChart from "../../components/PieChart.jsx";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default Pie;