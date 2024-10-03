import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ setSelectedDate, tasks }) => {
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

  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}`);
  };

  const events = (tasks || []).map(task => ({
    title: task.type,
    start: task.date.toISOString(),
    end: task.endDate ? task.endDate.toISOString() : null,
    description: task.description,
  }));

  // Fungsi untuk menampilkan konten acara tanpa waktu
  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <strong>{eventInfo.event.title}</strong>
        {/* Hanya menampilkan title, tanpa waktu */}
      </div>
    );
  };

  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "title",
          center: "",
          end: "prev,next,today",
        }}
        dateClick={handleDateClick}
        events={events}
        eventClick={handleEventClick}
        eventTimeFormat={false}
        eventContent={renderEventContent} // Menerapkan fungsi render
      />
    </div>
  );
};

export default Calendar;
