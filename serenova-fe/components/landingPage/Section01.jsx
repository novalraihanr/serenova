"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Section01 = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <div
            className="relative bg-no-repeat bg-cover bg-center h-full pt-44 pb-52"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(251, 251, 255, 0) 70%, rgba(251, 251, 255, 1) 100%), url('/assets/images/landingPage/bgGrid01.png')" }}>
            <h1 className="text-bgButton font-bold text-center text-6xl">
                Balance Your Life,<br></br>
                Simplify Your Day
            </h1>
            <p className="text-[#606060] text-center text-lg mt-5">
                Effortless schedule management and stress detection for individuals.<br></br>
                Stay productive, reduce stress, and achieve a balanced life with AI-powered insights.
            </p>
            <div className="w-full flex justify-center items-center mt-11 relative z-10">
                <button 
                className="text-white bg-bgButton py-3 px-7 rounded-lg font-bold"
                onClick={handleLogin}>
                    Go to Serenova
                </button>
            </div>

            <div className="absolute top-0 left-0">
                <Image
                    src="/assets/images/landingPage/elips01.svg"
                    width={250}
                    height={250}
                    className="md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" />
            </div>

            <div className="absolute bottom-5 right-0">
                <div className="relative z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFF] to-transparent"></div>
                    <Image
                        src="/assets/images/landingPage/elips02.svg"
                        width={250}
                        height={250}
                        className="md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96" />
                </div>
            </div>
        </div>
    )
}

export default Section01;
