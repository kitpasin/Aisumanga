"use client";

import Link from "next/link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { usePathname } from "next/navigation";
function ResponsiveHeader() {
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mt-4 max-w-[768px] lg:max-w-[980px] m-auto px-4 xl:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-full rounded-md h-[40px] bg-[#1976d2] hover:bg-[#1769aa] md:hidden flex justify-between items-center px-4 text-white text-sm md:text-md font-bold shadow-xl"
      >
        <p className="uppercase">
          Page :{" "}
          {location === "/" ? "home" : location.split("/")[1].replace("_", " ")}
        </p>
        {isMenuOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>

      {/* < 768 Nav */}
      <nav
        className={`md:hidden w-full flex flex-col ${
          isMenuOpen ? "h-[200px]" : "h-[0px] overflow-hidden"
        } bg-white rounded-b-md text-sm font-bold shadow-xl transition-all ease-in-out duration-300`}
      >
        <Link
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out duration-100 px-4 w-full h-[40px] flex justify-start items-center hover:bg-[#1769aa] hover:text-white shadow-sm`}
          href="/"
        >
          HOME
        </Link>

        <Link
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out duration-100 px-4 w-full h-[40px] flex justify-start items-center hover:bg-[#1769aa] hover:text-white shadow-sm`}
          href="/latest_manga"
        >
          LATEST MANGA
        </Link>

        <Link
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out duration-100 px-4 w-full h-[40px] flex justify-start items-center hover:bg-[#1769aa] hover:text-white shadow-sm`}
          href="/hot_manga"
        >
          HOT MANGA
        </Link>

        <Link
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out duration-100 px-4 w-full h-[40px] flex justify-start items-center hover:bg-[#1769aa] hover:text-white shadow-sm`}
          href="/new_manga"
        >
          NEW MANGA
        </Link>

        <Link
          onClick={() => setIsMenuOpen(false)}
          className={`${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-all ease-in-out duration-100 px-4 w-full h-[40px] flex justify-start items-center rounded-b-md hover:bg-[#1769aa] hover:text-white shadow-sm`}
          href="/completed_manga"
        >
          COMPLETED MANGA
        </Link>
      </nav>

      {/* >= 768 Nav */}
      <nav className="w-full h-[49px] bg-[#1976d2] rounded-md xl:rounded-b-md hidden md:flex justify-between items-center text-white text-sm md:text-md font-bold px-4">
        <Link
          className="w-auto h-full flex justify-center items-center rounded-bl-md hover:bg-[#1769aa]"
          href="/"
        >
          HOME
        </Link>

        <Link
          className="w-auto h-full flex justify-center items-center hover:bg-[#1769aa]"
          href="/latest_manga"
        >
          LATEST MANGA
        </Link>

        <Link
          className="w-auto h-full flex justify-center items-center hover:bg-[#1769aa]"
          href="/hot_manga"
        >
          HOT MANGA
        </Link>

        <Link
          className="w-auto h-full flex justify-center items-center hover:bg-[#1769aa]"
          href="/new_manga"
        >
          NEW MANGA
        </Link>

        <Link
          className="w-auto h-full flex justify-center items-center rounded-br-md hover:bg-[#1769aa]"
          href="/completed_manga"
        >
          COMPLETED MANGA
        </Link>
      </nav>
    </div>
  );
}

export default ResponsiveHeader;
