import React from "react";
import { useState } from "react";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header.jsx";
import { tokens } from "../../theme.js";

const FullCalendar = () => {
  {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin]
    selectable: true
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) = {
    const title = prompt("Please enter a new title for your event")
    const calendarApi = selected.view.Calendar
    calendarApi.unselected()

    if(title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selectedGridRowsCountSelector.startStr,
        end: selectedGridRowsCountSelector.endStr,
        allDay: selectedGridRowsCountSelector.allDay
      })
    }
  }


}

export default FullCalendar;