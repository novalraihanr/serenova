"use client";

import Image from "next/image";

const Section02 = () => {
    return (
        <div className="mt-5 mb-32">
            <div className="text-center">
                <h1 className="text-bgButton font-semibold text-4xl">
                    Designed to Help You<br />
                    Achieve More Balance
                </h1>
                <p className="text-md text-[#606060] mt-5">
                    We are here to revolutionize how you manage your schedule<br />
                    and well-being, ensuring a balanced life without stress.
                </p>
            </div>

            {/* CARD SECTION */}
            <div className="grid grid-cols-3 gap-5 text-center max-w-[900px] mx-auto my-11 px-11">
                {/* CARD 1 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/actmonitor.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        Daily Activity<br />
                        Monitor
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Keep track of your daily tasks and activities effortlessly to stay organized and productive.
                    </p>
                </div>
                {/* CARD 2 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/stress.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        AI-Based<br />
                        Stress Detection
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Monitor your stress levels in real-time using AI technology, helping you stay aware of your mental.
                    </p>
                </div>
                {/* CARD 3 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/balance-scale.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        Work-Life<br />
                        Balance Insights
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Get insights into how well you balance work and personal life, ensuring a healthier, more sustainable routine.
                    </p>
                </div>
                {/* CARD 4 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/harmony.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        Task<br />
                        Reminders
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Never miss an important task with timely reminders to help you stay on top of your to-do list.
                    </p>
                </div>
                {/* CARD 5 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/notif.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        Relaxation<br />
                        Advisor
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Receive tailored suggestions for relaxation activities based on your stress levels and schedule.
                    </p>
                </div>
                {/* CARD 6 */}
                <div
                    className="border rounded-xl grid place-items-center py-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0, 180, 190, 0.15) 0%, rgba(37, 61, 161, 0.15) 100%)"
                    }}
                >
                    <Image
                        src="/assets/images/landingPage/sleep.svg"
                        width={90}
                        height={90}
                        className="md:w-20" />
                    <p className="text-bgButton font-bold text-xl mt-5">
                        Rest<br />
                        Notifications
                    </p>
                    <p className="text-[#606060] text-xs px-5 mt-2">
                        Get gentle reminders to take breaks, helping you avoid burnout and maintain peak productivity.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section02;
