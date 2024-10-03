"use client";

import Image from "next/image";

const TaskDesc = ({ isOpen, onClose, selectedTask }) => { 
    if (!isOpen || !selectedTask) return null;

    const { task, type, date, startTime, endTime, description } = selectedTask;

    const borderColorMap = {
        Working: '#00B4BE',
        Daily: '#EB6A4B',
        Workout: '#00BA34',
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-5 max-w-sm mx-auto relative flex gap-x-2">
                <div className="border-4 mt-3" style={{ borderColor: borderColorMap[type] || '#000', height: '2px', width: '2%' }}></div>
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold mb-2 mr-5" id="task">{task}</h2> {/* Task Head */}
                        <button onClick={onClose}>
                            <Image src="/assets/images/task/close.svg" width={20} height={20} />
                        </button>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/images/task/mincal.svg" width={20} height={20} />
                        <p className="ml-2 text-[#747474] text-xs" id="tanggal">{date?.toLocaleDateString()}</p> {/* Date */}
                    </div>
                    <div className="flex items-center mt-2">
                        <Image src="/assets/images/task/clock.svg" width={20} height={20} />
                        <p className="ml-2 text-[#747474] text-xs" id="jam">{startTime?.format("hh:mm a")} - {endTime?.format("hh:mm a")}</p> {/* Time */}
                    </div>
                    <p className="font-semibold mt-3">Description</p>
                    <p className="text-[#747474] text-xs break-words overflow-wrap break-all">{description}</p> {/* Description */}
                </div>
            </div>
        </div>
    );
};

export default TaskDesc;
