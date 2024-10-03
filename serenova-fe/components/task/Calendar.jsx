import { useEffect, useState } from "react";
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

  const events = (tasks || []).map(task => ({
    title: task.jenis,
    description: task.note,
    start: task.tanggal,
  }));

  // Fungsi untuk menampilkan konten acara tanpa waktu
  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <strong>{eventInfo.event.title}</strong>
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
        eventTimeFormat={false}
        eventContent={renderEventContent} // Menerapkan fungsi render
      />
    </div>
  );
};

export default Calendar;

