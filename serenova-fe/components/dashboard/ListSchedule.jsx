"use client";

import { Calendar } from "react-multi-date-picker";
import Image from "next/image";
import CardSchedule from "./CardSchedule";

const ListSchedule = () => {
    return (
        <div className="grid justify-center">
            <h1 className="font-bold text-bgButton">List Of Schedules</h1>
            {/* CALENDAR */}
            <div className="flex justify-center mt-3">
                <Calendar
                    fontColor="#333"
                    shadow={false}
                    arrow="custom"
                    arrowStyle={{ color: "#FF0000" }}
                    style={{
                        borderRadius: "12px",
                        border: "none",
                    }}
                />
            </div>
            {/* ALL SCHEDULE */}
            <div className="mt-5">
                <div className="flex justify-end items-center">
                    <p className="text-[2B3030] text-xs">All Schedule</p>
                    <Image
                        src="/assets/images/dashboard/arrow.svg"
                        width={20}
                        height={20}
                        className=""
                    />
                </div>
                {/* CARD */}
                <div>
                    <CardSchedule />
                    <CardSchedule />
                </div>
            </div>
        </div>
    )
}

export default ListSchedule;
