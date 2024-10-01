"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeadDashboard = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold text-bgButton">
                    <span className="time">Good Evening, </span>
                    <span className="name"> Haikal</span>
                </h1>
            </div>
            <div className="flex items-center flex-row gap-x-3"> 
                <div className="border bg-white rounded-full p-2">
                    <Image
                        src="/assets/images/dashboard/notif.svg"
                        width={20}
                        height={20}
                        className=""
                    />
                </div>
                <div className="bg-white overflow-hidden rounded-full w-9 h-9">
                    <Image
                        src="/assets/images/landingPage/haikal.jpg"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeadDashboard;
