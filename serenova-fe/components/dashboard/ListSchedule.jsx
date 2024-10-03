"use client";

import Image from "next/image";
import CardSchedule from "./CardSchedule";
import MiniCalender from "./MiniCalender";
import NoSchedule from "./NoSchedule";

const ListSchedule = () => {
    return (
        <div className="grid justify-center">
            <h1 className="font-bold text-bgButton">List Of Schedules</h1>
            {/* CALENDAR */}
            <div className="relative z-0">
                <MiniCalender />
            </div>
            {/* ALL SCHEDULE */}
            <div className="mt-2">
                <div className="flex justify-end items-center">
                    <p className="text-[2B3030] text-xs">Today's Schedule</p>
                    <Image
                        src="/assets/images/dashboard/arrow.svg"
                        width={20}
                        height={20}
                        className=""
                    />
                </div>
                {/* CARD */}
                <div>
                    <NoSchedule />
                </div>
            </div>
        </div>
    )
}

export default ListSchedule;
