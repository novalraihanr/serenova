"use client";

import NavbarKiri from "@components/NavbarKiri";
import Calendar from "@components/task/Calendar";
import TaskList from "@components/task/TaskList";
import { useState } from "react";
import PopupAdd from "@components/task/PopupAdd"; // Adjust the import path as necessary

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control the modal visibility

  const handleNewTaskClick = () => {
    setIsPopupOpen(true); // Open the modal when button is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the modal
  };

  return (
    <div className="flex h-screen">
      {/* NAV KIRI */}
      <div className="w-64 h-full sticky top-0 py-7">
        <NavbarKiri />
      </div>

      {/* TASK */}
      <div
        className="flex-1 h-full p-4 overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
        }}
      >
        <div className="w-full h-full p-4">
          {/* HEADER */}
          <h1 className="text-3xl font-semibold text-[#02055A] mb-4">Task</h1>
          {/* TABLE AND CALENDAR */}
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-4 bg-white rounded-xl border relative">
              <TaskList selectedDate={selectedDate} />
              <button
                className="absolute bottom-4 inset-x-0 text-sm bg-[#00B4BE] mx-4 p-2 text-white rounded-lg font-bold"
                onClick={handleNewTaskClick} // Open modal on click
              >
                + New Task
              </button>
            </div>
            <div className="col-span-8 rounded-lg">
              <Calendar setSelectedDate={setSelectedDate} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for new task */}
      <PopupAdd isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Page;
