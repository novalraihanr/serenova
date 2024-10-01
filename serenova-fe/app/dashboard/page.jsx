"use client";

import DaySoFar from "@components/dashboard/DaySoFar";
import HeadDashboard from "@components/dashboard/HeadDashboard";
import IntensityStress from "@components/dashboard/IntensityStress";
import ListSchedule from "@components/dashboard/ListSchedule";
import NavbarKiri from "@components/NavbarKiri";

const Page = () => {
  return (
    <div className="flex h-screen">
      {/* NAV KIRI */}
      <div className="w-64 h-full sticky top-0 py-7">
        <NavbarKiri />
      </div>

      {/* TASK */}
      <div
        className="flex-1 h-full p-4 overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, rgba(0, 180, 190, 0.08) 0%, rgba(37, 61, 161, 0.08) 100%)",
        }}>
        <div className="w-full h-full p-4">
          {/* HEADER */}
          <HeadDashboard />
          {/* DASHBOARD */}
          <div className="grid grid-cols-12 mt-5 gap-x-2">
            {/* DASH KIRI */}
            <div className="col-span-8">
                <DaySoFar />
                <IntensityStress />
            </div>
            {/* DASH KANAN */}
            <div className="col-span-4">
                <ListSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
