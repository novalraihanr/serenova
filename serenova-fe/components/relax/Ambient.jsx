"use client";

import Image from "next/image";
import { useState } from "react";

const Ambient = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const ambientImages = [
        { src: "/assets/images/relax/rain.svg", alt: "Rain" },
        { src: "/assets/images/relax/wind.svg", alt: "Wind" },
        { src: "/assets/images/relax/nature.svg", alt: "Nature" },
        { src: "/assets/images/relax/bonfire.svg", alt: "Bonfire" },
        { src: "/assets/images/relax/seaside.svg", alt: "Seaside" },
    ];

    return (
        <div>
            <div className="places">
                <h1 className="text-white font-bold text-2xl mb-3">Ambient</h1>
                <div className="grid grid-cols-2 gap-3">
                    {ambientImages.map((image, index) => (
                        <div key={index} className="rounded-lg">
                            <p className="text-white font-semibold text-xs mb-2">{image.alt}</p>
                            <button onClick={() => setSelectedImage(image.src)} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={image.src}
                                    width={175}
                                    height={113}
                                    className={`w-36 h-auto rounded-lg ${selectedImage === image.src ? 'border-4 border-yellow-400' : ''}`} // Add border if selected
                                    alt={image.alt}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ambient;
