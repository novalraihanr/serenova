"use client";

import AtasRelax from "@components/relax/AtasRelax";
import BawahRelax from "@components/relax/BawahRelax";
import Image from "next/image";

const page = () => {
  return (
    <div
      className="w-full h-screen relative p-7"
      style={{
        backgroundImage: "url('/assets/images/relax/gam4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* CONTENT RELAX */}
      <div className="w-full h-full">
        <AtasRelax />
        <BawahRelax/>
      </div>

    </div>
  );
};

export default page;
