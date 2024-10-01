"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ setSelectedDate }) => {
  const [selectedDate, setSelectedDateState] = useState(null); 
  const [previousEl, setPreviousEl] = useState(null); 

  const handleDateClick = (arg) => {
    if (previousEl) {
      previousEl.style.backgroundColor = "";
    }

    arg.dayEl.style.backgroundColor = "#00B4BE26";

    setPreviousEl(arg.dayEl);

    setSelectedDate(arg.date);
    setSelectedDateState(arg.dateStr); 
  };

  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "prev,next,today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Calendar;
