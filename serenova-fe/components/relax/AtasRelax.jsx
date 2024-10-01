import React from 'react';

import Image from 'next/image';

const AtasRelax = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-white tracking-tight font-bold text-3xl mb-1">
                    serenova
                </p>
                <Image
                    src="/assets/images/relax/close.svg"
                    width={25}
                    height={25}
                />
            </div>
            <div className="flex justify-center">
                <p
                    className="font-extrabold text-7xl text-[#578348] tracking-tighter"
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
