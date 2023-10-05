"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const location = usePathname();
  return (
    <header className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[1280px] h-full xs:h-[105px] m-auto flex flex-col xs:flex-row justify-between items-start gap-4 px-4">
      <Link
        href="/"
        className="bg-white w-full xs:max-w-[215px] h-full rounded-md shadow-md"
      >
        <img
          className="xs:w-full xs:h-full rounded-md m-auto"
          src="/images/main_logo.png"
          alt=""
        />
      </Link>
      <div className="bg-white w-full h-full lg:h-auto rounded-md xl:rounded-t-md shadow-md flex flex-col">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full xl:max-w-[300px] p-2">
            <TextField
              size="small"
              fullWidth
              variant="outlined"
              label="Search..."
            />
          </div>
          <div className="w-full flex justify-start lg:justify-end items-center gap-2 px-2 xs:mb-0 mb-2">
            <button className="bg-[#1976d2] hover:bg-[#1769aa] w-full xs:max-w-[100px] h-[40px] rounded-md text-sm text-white font-bold">
              Login
            </button>
            <button className="bg-[#1976d2] hover:bg-[#1769aa] w-full xs:max-w-[100px] h-[40px] rounded-md text-sm text-white font-bold">
              Register
            </button>
          </div>
        </div>
        <nav className="w-full h-[49px] bg-[#1976d2] rounded-b-md justify-between items-center text-white text-sm md:text-md font-bold hidden xl:flex">
          <Link
            className={`${
              location === "/" && "underline bg-[#1769aa]"
            } w-1/5 h-full flex justify-center items-center rounded-bl-md hover:bg-[#1769aa]`}
            href="/"
          >
            HOME
          </Link>

          <Link
            className={`${
              location === "/latest_manga" && "underline bg-[#1769aa]"
            } w-1/5 h-full flex justify-center items-center hover:bg-[#1769aa] transition-all ease-in-out duration-300`}
            href="/latest_manga"
          >
            LATEST MANGA
          </Link>

          <Link
            className={`${
              location === "/hot_manga" && "underline bg-[#1769aa]"
            } w-1/5 h-full flex justify-center items-center hover:bg-[#1769aa] transition-all ease-in-out duration-300`}
            href="/hot_manga"
          >
            HOT MANGA
          </Link>

          <Link
            className={`${
              location === "/new_manga" && "underline bg-[#1769aa]"
            } w-1/5 h-full flex justify-center items-center hover:bg-[#1769aa] transition-all ease-in-out duration-300`}
            href="/new_manga"
          >
            NEW MANGA
          </Link>

          <Link
            className={`${
              location === "/completed_manga" && "underline bg-[#1769aa]"
            } w-1/5 h-full flex justify-center items-center rounded-br-md hover:bg-[#1769aa] transition-all ease-in-out duration-300`}
            href="/completed_manga"
          >
            COMPLETED MANGA
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
