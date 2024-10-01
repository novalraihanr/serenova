"use client";

import Image from "next/image";

const DaySoFar = () => {
    return (
        <div>
            <h1 className="font-bold text-bgButton">Your Day So Far</h1>
            <div className="grid grid-cols-3 gap-x-3 mt-3">
                <div className="rounded-lg flex pl-3 overflow-hidden relative">

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="bg-[#FFFADECC] h-3/4 w-full"></div>
                        <div className="bg-[#FFBC6ECC] h-1/2 w-full"></div>
                    </div>

                    <div className="relative flex items-center">
                        <Image
                            src="/assets/images/dashboard/work.svg"
                            width={60}
                            height={60}
                            className="pt-2 pb-2"
                        />
                        <div className="ml-2 py-2">
                            <p className="text-base text-bgButton font-bold">
                                Working<br></br>
                                10%
                            </p>
                            <p className="text-[7px] text-bgButton">Completed Activity</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex pl-3 overflow-hidden relative">

                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: "url('/assets/images/dashboard/grid.svg'), linear-gradient(to bottom, #D3CEF2, #D3CEF2)", // Warna dasar + gambar grid
                            backgroundSize: "cover, 100% 100%",
                            backgroundPosition: "center, center",
                            backgroundRepeat: "no-repeat, no-repeat",
                        }}
                    ></div>

                    <div className="relative flex items-center">
                        <Image
                            src="/assets/images/dashboard/daily.svg"
                            width={60}
                            height={60}
                            className="pt-2 pb-2"
                        />
                        <div className="ml-2 py-2">
                            <p className="text-base text-bgButton font-bold">
                                Daily<br></br>
                                20%
                            </p>
                            <p className="text-[7px] text-bgButton">Completed Activity</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg flex pl-3 overflow-hidden relative">

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="bg-[#C6E7EC80] h-3/4 w-full"></div>
                        <div className="bg-[#C6E7EC] h-1/2 w-full"></div>
                    </div>

                    <div className="relative flex items-center">
                        <Image
                            src="/assets/images/dashboard/workout.svg"
                            width={60}
                            height={60}
                            className="pt-2 pb-2"
                        />
                        <div className="ml-2 py-2">
                            <p className="text-base text-bgButton font-bold">
                                Workout<br></br>
                                25%
                            </p>
                            <p className="text-[7px] text-bgButton">Completed Activity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaySoFar;
