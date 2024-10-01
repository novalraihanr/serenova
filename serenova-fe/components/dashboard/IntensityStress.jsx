"use client";

import DashStressCheck from "./DashStressCheck";
import IntensityBar from "./IntensityBar";
import Image from "next/image";

const IntensityStress = () => {
    return (
        <div className="flex mt-5 gap-x-3 ">
            {/* KIRI */}
            <div className="flex flex-col w-1/2 h-auto"> 
                <div className="">
                    <h1 className="text-bgButton font-semibold">Daily Activity Intensity</h1>
                </div>
                <div className="mt-4 bg-white rounded-lg p-7 flex-1"> 
                    <IntensityBar />
                    <p className="font-bold text-center text-[#505050] text-2xl mt-3">8 hours</p>
                    <p className="text-[#505050] text-xs mt-3 text-justify"> Today's intensity is 20% higher than yesterday.
                        Keep up your productivity, but don't forget to
                        allow yourself enough rest, especially as the weekend
                        approaches, to maintain your energy balance!
                    </p>
                </div>
            </div>
            {/* KANAN */}
            <div className="flex flex-col w-1/2 h-auto"> 
                <div className="">
                    <h1 className="text-bgButton font-semibold">Stress Checker</h1> 
                </div>
                <div className="mt-4 bg-white rounded-lg flex-1"> 
                    <DashStressCheck />
                </div>
            </div>
        </div>
    )
}

export default IntensityStress;
