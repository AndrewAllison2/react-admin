import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme.js";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined.js";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined.js";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined.js";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined.js";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined.js";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined.js";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined.js";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined.js";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined.js";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined.js";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined.js";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined.js";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        }
      }}
    >

    </Box>
  )
}

export default Sidebar;