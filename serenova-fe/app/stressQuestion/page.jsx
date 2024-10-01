"use client";

import NavbarKiri from "@components/NavbarKiri";
import Likert5 from "@components/stressQuestion/Likert5";
import Image from "next/image";

const page = () => {
    return (
        <div className="flex h-screen">
            {/* NAV KIRI */}
            <div className="w-64 h-full sticky top-0 py-7">
                <NavbarKiri />
            </div>
            {/* MAIN */}
            <div
                className="flex-1 h-full p-4 overflow-y-auto"
                style={{
                    background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
                }}>
                <h1 className="text-bgButton font-semibold text-2xl mt-3">
                    Stress Checker - Questionnaire
                </h1>

                <div className="grid mt-5 bg-white p-7 rounded-lg">
                    {/* INDICATOR */}
                    <div className="">
                        <p className="font-bold text-bgButton text-lg"><span>1 </span>of <span>22</span></p>
                        <div className="flex gap-x-1 justify-center items-center mt-1">
                            {Array.from({ length: 22 }).map((_, index) => (
                                <div key={index} className="bg-[#D9D9D9] py-0.5 flex-1 rounded-lg min-w-0">
                                    {/* BIARKAN KOSONG */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* PERTANYAAN */}
                    <div className="mt-10 px-10">
                        <p className="text-[#747474] text-lg">Question <span className="text-indicator">1</span></p>
                        <p className="question text-2xl font-medium">Feeling upset because something happened unexpectedly?</p>
                        {/* JAWABAN */}
                        <Likert5 />
                    </div>
                    {/* TOMBOL PREV NEXT */}
                    <div className="flex justify-between mt-16">
                        <button className="shadow-lg rounded-lg px-4 py-2 text-[#2B3030] text-sm font-bold">
                            Previous
                        </button>
                        <button className="bg-bgButton text-sm font-bold text-white rounded-lg px-4 py-2">
                            Continue
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page;
