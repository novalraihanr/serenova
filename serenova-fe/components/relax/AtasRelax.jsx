import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AtasRelax = () => {
    const router = useRouter();

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <p className="text-white tracking-tight font-bold text-3xl sm:text-3xl mb-1" style={{ textShadow: '1px 1px 0 rgba(0, 0, 0, 0.3), 2px 2px 0 rgba(0, 0, 0, 0.3)' }}>
                    serenova
                </p>

                <button onClick={() => router.back()} className="flex items-center p-0 bg-transparent border-0">
                    <Image
                        src="/assets/images/relax/close.svg"
                        width={25}
                        height={25}
                        alt="Close"
                        className="rounded-full"
                    />
                </button>


            </div>
            <div className="flex justify-center mt-7 sm:mt-0">
                <p
                    className="font-extrabold text-6xl sm:text-7xl text-white tracking-tighter"
                    style={{
                        textShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    22.30
                </p>
            </div>
        </div>
    );
};

export default AtasRelax;
