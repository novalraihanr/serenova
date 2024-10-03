"use client";

import NavbarAtas from "@components/NavbarAtas";
import Footer from "@components/Footer";
import Section01 from "@components/landingPage/Section01";
import Section02 from "@components/landingPage/Section02";
import Section03 from "@components/landingPage/Section03";
import Section04 from "@components/landingPage/Section04";

const landingPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="sticky top-0">
        <NavbarAtas />
      </div>

      <div className="flex-grow bg-[#FBFBFF] h-full">
        <Section01 /> 
        <Section02 />
        <Section03 />
        <Section04 />
      </div>
      <Footer />
    </div>
  );
}

export default landingPage;
