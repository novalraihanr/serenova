"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TestResult = () => {
    const router = useRouter();

    const handleCheck = () => {
        router.push('/stressCheck');
    }

    return (
        <div className="">

            <div className="grid justify-center p-7">
                <div className="flex justify-center">
                    <div className="grid justify-center text-center">
                        <h1 className="text-[#969696] font-semibold">Your Stress Level is</h1>
                        <h1 className="text-[#C62828] font-extrabold text-4xl">HIGH</h1>
                        <p><span className="point text-[#C62828] font-extrabold text-5xl">75</span>
                            <span className="font-extrabold text-[#969696]">/100</span>
                        </p>
                    </div>
                </div>
                <p className="text-xs mt-2 text-justify">
                    Your stress score of 75 indicates high stress. Consider taking short breaks,
                    practicing deep breathing, and doing light physical activity to relieve tension.
                    Prioritize tasks to avoid overwhelm.
                </p>

                <button
                    className="text-white font-bold text-xs bg-bgButton py-2 mt-3 rounded-lg"
                    onClick={handleCheck}>
                    Check Stress Level
                </button>
            </div>

        </div>
    )
}

export default TestResult;
