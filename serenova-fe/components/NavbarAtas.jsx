"use client";
import { useRouter } from "next/navigation";

const NavbarAtas = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignin = () => {
    router.push('/signin')
  };
  return (
    <div className="grid grid-cols-12 py-5 items-center shadow-lg">
      {/* LOGO */}
      <div className="logo col-span-3 flex justify-center items-center">
        <p className="text-[#02055A] text-4xl 2xl:text-5xl font-bold tracking-tighter pb-2">serenova</p>
      </div>

      {/* MENU */}
      <div className="menu col-span-5 flex items-center">
        <ul className="nav-list flex space-x-4">
          <li className="flex justify-center items-center">
            <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
              Home
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
              Features
            </a>
          </li>
          <li className="flex justify-center items-center">
            <a href="#" className="nav-menu text-[#02055A] font-medium text-base 2xl:text-lg">
              About Us
            </a>
          </li>
        </ul>
      </div>

      {/* BUTTON */}
      <div className="button col-span-4 flex justify-center items-center gap-x-2">
        <button
          className="text-[#02055A] font-bold shadow-lg rounded py-2 px-4 text-xs 2xl:text-sm"
          onClick={handleLogin}>
          Login
        </button>
        <button
          className="text-white font-bold shadow-lg bg-bgButton rounded py-2 px-4 text-xs 2xl:text-sm"
          onClick={handleSignin}>
          Get Started
        </button>
      </div>
    </div>

  )
}

export default NavbarAtas
