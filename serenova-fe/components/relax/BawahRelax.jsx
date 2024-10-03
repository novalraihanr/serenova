import React from 'react'

import Image from 'next/image';

const BawahRelax = () => {
    return (
        <div className="absolute bottom-10 inset-x-10">
            <div className="flex justify-between items-center">
                <p className="text-white font-semibold">“Success is the sum of small efforts,<br></br>
                    repeated day in and day out”
                </p>
                <div className="rounded-lg bg-white grid grid-cols-3 p-2 gap-x-3">
                    <div className="border bg-[#A8A8A826] rounded-md grid place-items-center p-1">
                        <Image src="/assets/images/relax/windy.svg" width={20} height={20} />
                    </div>
                    <div className="border bg-[#A8A8A826] rounded-md grid place-items-center">
                        <Image src="/assets/images/relax/music.svg" width={20} height={20} />
                    </div>
                    <div className="border bg-[#A8A8A826] rounded-md grid place-items-center">
                        <Image src="/assets/images/relax/gallery.svg" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BawahRelax;
