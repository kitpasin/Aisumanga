"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";

function BackToTop() {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const isAtEnd = documentHeight - scrollY - windowHeight <= 40;
      setIsScrollAtEnd(isAtEnd);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className={`${
        scrollYPosition >= 720 ? "w-[50px] h-[50px]" : "w-[0px] h-[0px]"
      } bg-[#1976d2] hover:bg-[#1769aa] opacity-90 overflow-hidden rounded-full fixed ${isScrollAtEnd ? "bottom-12" : "bottom-4"} right-4 flex justify-center items-center text-white font-bold shadow-xl z-50 transition-all ease-in-out duration-300`}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}

export default BackToTop;
