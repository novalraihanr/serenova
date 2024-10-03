"use client";

import axiosFetch from "@lib/axiosFetch";

import NavbarKiri from "@components/NavbarKiri";
import Calendar from "@components/task/Calendar";
import TaskList from "@components/task/TaskList";
import { useEffect, useState } from "react";
import PopupAdd from "@components/task/PopupAdd";
import MiniCalender from "@components/dashboard/MiniCalender";

const Page = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleNewTaskClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const getTask = async () => {
    try {
        const response = await axiosFetch.get('/api/jadwal');
        const result = response.data;
        setTasks(result);
    } catch (error) {
        console.log(error);
        setTasks([]);
    }
  }

  useEffect(() => {
    getTask();
    console.log(tasks);
  }, []);

  const addTask = (taskData) => {
    setTasks((prevTasks) => [...prevTasks, taskData]);
  };

  return (
    <div className="flex h-screen">
      {/* NAV KIRI */}
      <div className="hidden md:block md:w-64 h-full sticky top-0 py-7">
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
              <TaskList selectedDate={selectedDate} tasks={tasks} />
              <button
                className="absolute bottom-4 inset-x-0 text-sm bg-bgButton mx-4 p-2 text-white rounded-lg font-bold"
                onClick={handleNewTaskClick}
              >
                + New Task
              </button>
            </div>
            <div className="col-span-8 rounded-lg">
              <Calendar setSelectedDate={setSelectedDate} tasks={tasks} />
            </div>
          </div>
        </div>
      </div>

      {/* NEW TASK */}
      <PopupAdd isOpen={isPopupOpen} onClose={handleClosePopup} addTask={addTask} />
    </div>
  );
};

export default Page;
