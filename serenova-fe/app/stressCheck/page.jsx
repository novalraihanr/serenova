"use client";

import NavbarKiri from '@components/NavbarKiri';
import IntensityBar from '@components/dashboard/IntensityBar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();

    const handleQuestion = () => {
        router.push('/stressQuestion');
    }
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
                    Stress Checker
                </h1>
                <div className="grid grid-cols-2 mt-5 bg-white p-7 rounded-lg">
                    <div className="grid justify-center px-16 border-r">
                        <h1 className="text-bgButton font-semibold text-2xl text-center mb-7">Your Stress Level History</h1>
                        <IntensityBar />
                        <p className="text-[#505050] text-xs mt-3 text-justify">
                            Your stress levels rise throughout the week, peaking on Monday.
                            Over the weekend, they drop, showing your ability to relax. The
                            spike on Monday reflects the challenge of returning to routine.
                            By Tuesday, stress levels ease, suggesting that relaxation techniques
                            early in the week could help manage stress better.
                        </p>
                    </div>
                    <div className="grid justify-center px-16 border-l">
                        <h1 className="text-bgButton font-semibold text-2xl text-center">Check Your Stress Level</h1>
                        <div className="grid justify-center p-7">
                            <div className="flex justify-center">
                                <Image
                                    src="/assets/images/stress/symbol.svg"
                                    width={100}
                                    height={50}
                                    className="w-28 h-auto min-w-28"
                                />
                            </div>
                            <p className="text-xs mt-3 text-justify">
                                The Stress Checker feature is designed to help you regularly
                                monitor your stress levels and provide recommendations to maintain
                                your mental balance. By answering a few short questions, you will
                                receive an analysis of your stress levels along with suggestions on
                                how to manage them effectively.
                            </p>

                            <button 
                            className="text-white font-bold text-xs bg-[#02055A] py-2 mt-3 rounded-lg"
                            onClick={handleQuestion}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
