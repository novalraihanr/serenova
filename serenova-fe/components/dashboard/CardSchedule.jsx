"use client";

import Image from "next/image";

const CardSchedule = () => {
    return (
        <div className="flex bg-white py-4 mt-3 rounded-lg">
            <div className="border border-[#00B4BE] px-0.5 mr-2 bg-[#00B4BE] rounded-r-lg">

            </div>
            <div className="flex items-center gap-x-2 justify-between w-full px-2">
                <div className="flex gap-x-2">
                    <div className="bg-white overflow-hidden rounded-full w-9 h-9">
                        <Image
                            src="/assets/images/dashboard/imgList.svg"
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <p className="actHead text-[#2B3030] font-semibold text-xs">Meeting With Partner</p>
                        <p className="jam text-[#747474] text-xxs"><span className="start">01.00 pm</span>-<span>03.00 pm</span></p>
                    </div>
                </div>

                <div className="rounded w-8 h-8">
                    <Image
                        src="/assets/images/dashboard/arrowRight.svg"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default CardSchedule
