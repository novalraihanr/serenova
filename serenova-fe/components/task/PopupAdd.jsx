"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePicker from "react-multi-date-picker";

const PopupAdd = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const textareaRef = useRef(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [tempDate, setTempDate] = useState(null);

    const handleInput = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const handleDateClick = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDayClick = (day) => {
        setTempDate(day);
    };

    const confirmDate = () => {
        if (tempDate) {
            setSelectedDate(tempDate);
        }
        setShowCalendar(false);
    };

    const cancelDate = () => {
        if (!tempDate) {
            setShowCalendar(false);
        } else {
            setTempDate(null);
            setShowCalendar(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const calendarElement = document.getElementById("calendar");
            const dateDiv = document.getElementById("date-div");
            if (calendarElement && !calendarElement.contains(event.target) && !dateDiv.contains(event.target)) {
                setShowCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleStartChange = (newTime) => {
        setStartTime(newTime);

        if (endTime && newTime && newTime >= endTime) {
            setEndTime(null);
        }
    };

    const handleEndChange = (newTime) => {
        // Only allow endTime to be greater than startTime
        if (startTime && newTime && newTime > startTime) {
            setEndTime(newTime);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="bg-white rounded-lg pt-10 px-5 max-w-1/3 relative z-60 border shadow-lg">
                <div>
                    <Image
                        src="/assets/images/task/close.svg"
                        width={30}
                        height={30}
                        className="absolute top-4 right-5 cursor-pointer"
                        onClick={onClose}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Add Task"
                    className="border-b border-[#00B4BE] text-[#2B3030] text-xl p-2 w-4/6 font-bold focus:outline-none mb-2"
                />
                <div className="grid grid-cols-12 gap-x-1">
                    <div className="col-span-2 rounded bg-[#00B4BE1A] px-2 py-1">
                        <p className="text-sm text-[#00B4BE] font-bold text-center">Working</p>
                    </div>
                    <div className="col-span-2 rounded bg-[#EB6A4B1A] px-2 py-1">
                        <p className="text-sm text-[#EB6A4B] font-bold text-center">Daily</p>
                    </div>
                    <div className="col-span-2 rounded bg-[#00BA341A] px-2 py-1">
                        <p className="text-sm text-[#00BA34] font-bold text-center">Workout</p>
                    </div>
                </div>
                {/* DATE */}
                <div
                    id="date-div"
                    className="flex items-center w-7/12 gap-x-2 mt-3 border rounded-lg border-[#A8A8A880] px-2 py-3 cursor-pointer"
                    onClick={handleDateClick}
                >
                    <Image src="/assets/images/task/mincal.svg" width={20} height={20} />
                    <p className="text-sm font-medium flex items-center">
                        {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                    </p>
                </div>
                {showCalendar && (
                    <div
                        id="calendar"
                        className="absolute z-50 flex flex-col items-center"
                        style={{ top: "80px", backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                    >
                        <DayPicker
                            onDayClick={handleDayClick}
                            modifiers={{
                                selected: (day) => selectedDate && day.getTime() === selectedDate.getTime(),
                                temp: (day) => tempDate && day.getTime() === tempDate.getTime(),
                            }}
                            modifiersClassNames={{
                                selected: 'bg-[#00B4BE] text-white',
                                temp: 'bg-[#EB6A4B] text-white',
                            }}
                        />
                        <div className="flex w-full mt-2">
                            <button onClick={confirmDate} className="bg-[#00B4BE] text-white py-2 px-6 rounded text-sm">OK</button>
                            <button onClick={cancelDate} className="bg-red-500 text-white py-2 px-3 rounded text-sm ml-2">Cancel</button>
                        </div>
                    </div>
                )}
                {/* JAM */}
                <div className="flex items-center w-7/12 gap-x-1 mt-3">
                    {/* START */}
                    <div className="border flex rounded-lg px-3 py-3 gap-x-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <DatePicker
                            style={{
                                backgroundColor: "white",
                                height: "24px",
                                width: "100%",
                                border: "none",
                                fontSize: "14px",
                                color: "black",
                                fontWeight: "500"
                            }}
                            value={startTime}
                            onChange={handleStartChange}
                            disableDayPicker
                            format="hh:mm a"
                            placeholder="Start"
                            plugins={[<TimePicker hideSeconds />]}
                        />
                    </div>
                    <div className="">
                        <Image src="/assets/images/task/arrow.svg" width={20} height={20} />
                    </div>
                    {/* END */}
                    <div className="border flex rounded-lg px-3 py-3 gap-x-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <DatePicker
                            style={{
                                backgroundColor: "white",
                                height: "24px",
                                width: "100%",
                                border: "none",
                                fontSize: "14px",
                                color: "black",
                                fontWeight: "500"
                            }}
                            value={endTime}
                            onChange={handleEndChange}
                            disableDayPicker
                            format="hh:mm a"
                            placeholder="End"
                            plugins={[
                                <TimePicker hideSeconds maxTime="11.59" /> // Set maximum time to 11:59 PM
                            ]}
                        />
                    </div>
                </div>
                {/* DESC */}
                <div className="pb-2 pt-3">
                    <p className="mb-1 font-semibold">Description</p>
                    <textarea
                        ref={textareaRef}
                        className="border w-full rounded-lg focus:outline-none p-3 resize-none"
                        onInput={handleInput}
                        placeholder="Type your description here..."
                        style={{ minHeight: "50px" }}
                    />
                </div>
                <div className="flex justify-end p-2">
                    <button className="bg-[#00B4BE] text-white font-bold py-2 px-7 rounded-lg text-sm">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAdd;
