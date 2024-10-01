"use client";

import Image from "next/image";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const SignPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const router = useRouter();

    const handleSignin = () => {
        router.push('/signin');
    }

    const handleDashboard = () => {
        router.push('/dashboard');
    }

    return (
        <div>
            <section className="login w-full h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* KIRI */}
                    <div className="flex justify-center items-center bg-gradient-to-br from-gradient1 to-gradient2 h-full p-6">
                        <h1 className="font-bold tracking-tighter text-white text-7xl text-center md:text-7xl lg:text-7xl 2xl:text-8xl">
                            serenova
                        </h1>
                    </div>
                    {/* KANAN */}
                    <div className="flex justify-center items-center bg-bgWhite h-full p-6">
                        <div className="grid w-full max-w-lg">
                            <div className="mb-5">
                                <h1 className="font-bold text-3xl 2xl:text-5xl text-[#1D2222] mb-1">Welcome Back!</h1>
                                <p className="text-[#969696] text-sm 2xl:text-xl">Start balancing your life and simplifying your day</p>
                            </div>
                            <div className="form">
                                {/* FORM EMAIL */}
                                <label className="font-semibold text-sm 2xl:text-base">Email</label>
                                <div className="border rounded-lg overflow-hidden border-greyBorder mt-1 mb-3 w-full">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="text-sm 2xl:text-base  px-3 py-2 w-full font-semibold rounded-none bg-white focus:outline-none"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                {/* FORM PASSWORD */}
                                <label className="font-semibold text-sm 2xl:text-base">Kata Sandi</label>
                                <div className="flex border rounded-lg overflow-hidden border-greyBorder mt-1 mb-3 w-full relative">
                                    <input
                                        type={showPassword ? "text" : "password"} 
                                        name="password"
                                        id="password"
                                        className="text-sm 2xl:text-base px-3 py-2 w-full font-semibold rounded-none bg-white focus:outline-none"
                                        placeholder="********"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-3"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-gray-600" />
                                    </button>
                                </div>
                                <div className="flex justify-end text-sm text-[#969696] font-semibold">
                                    <p className="text-xxs 2xl:text-sm"><a href="#">Forgot Password?</a></p>
                                </div>
                                {/* BUTTON */}
                                <button
                                    className="text-sm 2xl:text-base text-center border w-full py-3 rounded-lg bg-bgButton text-white font-bold mt-6"
                                    onClick={handleDashboard}
                                >
                                    Login
                                </button>
                                {/* DIVIDER */}
                                <div className="flex flex-row justify-center items-center col-span-12 py-3">
                                    <div className="col-span-3 border mt-1 w-full border-lineColor"></div>
                                    <div className="text-sm 2xl:text-base text-[#969696] font-semibold px-4">or</div>
                                    <div className="col-span-3 border mt-1 w-full border-lineColor"></div>
                                </div>
                                {/* LOGIN ALTER */}
                                <div className="grid grid-cols-12 gap-x-4 justify-center">
                                    <div className="border border-borderButton flex justify-center items-center col-span-6 py-3 bg-white rounded-xl">
                                        <Image src="/assets/images/login-signin/google.svg" alt="Google" width={24} height={24} />
                                        <p className="pl-2 font-bold text-sm 2xl:text-base">Google</p>
                                    </div>
                                    <div className="border border-borderButton flex justify-center items-center col-span-6 py-3 bg-white rounded-xl">
                                        <Image src="/assets/images/login-signin/facebook.svg" alt="Facebook" width={24} height={24} />
                                        <p className="pl-2 font-bold text-sm 2xl:text-base">Facebook</p>
                                    </div>
                                </div>
                                <div className="text-center mt-6">
                                    <p className="text-[#969696] font-medium text-sm 2xl:text-base">Don't have an account?
                                        <span className="text-[#02055A] font-extrabold ml-2 2xl:text-base"><a href="" onClick={handleSignin}>Sign Up</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignPage;
