"use client";
import Image from "next/image";

const TaskList = ({ selectedDate }) => {
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };

    // Function to check if the selected date is today
    const isToday = (date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className="m-4 relative overflow-y-auto">
            <div className="bg-[#A8A8A81A] flex px-3 py-2 rounded-lg">
                <Image src="/assets/images/task/search.svg" width={20} height={20} />
                <input
                    type="text"
                    placeholder="Search Task"
                    className="bg-transparent text-[#747474] text-sm font-medium ml-2 focus:outline-none w-full"
                />
            </div>
            <div className="flex my-5">
                {/* Conditionally render "Today" text */}
                {isToday(selectedDate) && (
                    <p className="text-bgButton font-bold mr-2">Today</p>
                )}
                <p className="text-[#747474] font-bold">{formatDate(selectedDate)}</p>
            </div>
            {/* TASK CARD */}
            <div>
                <div className="flex border-t border-b py-3">
                    <div className="border-2 rounded border-[#00B4BE]"></div>
                    <div className="overflow-hidden rounded-full w-10 h-10 2xl:w-14 2xl:h-14 mx-3">
                        <Image
                            src="/assets/images/landingPage/haikal.jpg"
                            width={80}
                            height={80}
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="text-start">
                        <p className="font-semibold text-[#2B3030] text-sm">Ngantemi Ketua</p>
                        <p className="font-semibold text-[#747474] text-xs">01.00 pm - 03.00 pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskList;
