"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Section04 = () => {
    const router = useRouter();

    const handleSignin = () => {
        router.push('/signin');
    };
    return (
        <div className="grid place-items-center my-36 relative">
            <div className="relative flex justify-center items-center">
                <Image
                    src="/assets/images/landingPage/blur.png"
                    width={500}
                    height={500}
                    className="absolute z-0"
                />

                <div className="relative z-10 text-center w-full">
                    <h1 className="text-bgButton font-bold text-4xl">Take Control of Your Day</h1>
                    <p className="text-[#606060] text-center mt-2">
                        Unlock a balanced and productive lifestyle<br />
                        with<span className="font-bold"> Serenova</span>
                    </p>
                    <div className="flex justify-center mt-5">
                        <button 
                        className="border bg-bgButton rounded-lg text-white text-lg font-bold py-3 px-5"
                        onClick={handleSignin}
                        >
                            Get Started with Serenova
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section04;
