"use client";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { popular_manga } from "@/data/popular_manga";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";

function PopularManga() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[1280px] m-auto mt-4 flex flex-col gap-1 px-4">
      <div className="flex border-t-4 border-[#1976d2]">
        <div className="bg-[#1976d2] flex gap-1 rounded-b-md text-white font-bold px-2 pb-1">
          <ThumbUpAltIcon className="text-white" />
          <p>POPULAR MANGA</p>
        </div>
      </div>
      <div className="w-full h-[175px] relative">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <PulseLoader color="#1976d2" />
          </div>
        ) : (
          <Swiper
            breakpoints={{
              1280: {
                slidesPerView: 8
              },
              980: {
                slidesPerView: 6
              },
              768: {
                slidesPerView: 4
              },
              480: {
                slidesPerView: 3
              },
            }}
            slidesPerView={2}
            spaceBetween={4}
            loop={true}
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
          >
            {popular_manga.map((manga) => {
              const lastChapter = manga.chapters[manga.chapters.length - 1];
              return (
                <SwiperSlide
                  key={manga.id}
                  className="relative overflow-hidden"
                >
                  <Link
                    href={manga.url}
                  >
                    <img className="hover:scale-125 transition-all ease-in-out duration-300" src={manga.image} alt="" />
                  </Link>
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 w-full z-10 text-left text-white text-sm leading-4 p-1 capitalize">
                    <Link className="hover:underline" href={manga.url}>
                      <p>{manga.title.length > 15
                      ? manga.title.substring(0, 15) + "..."
                      : manga.title}</p>
                    </Link>
                    <Link
                      className="hover:underline"
                      href={lastChapter.chapter_url}
                    >
                      <p>{lastChapter.chapter_title.replace("r", "r ")}</p>
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="absolute top-0 left-0 z-50 bg-black bg-opacity-50 flex w-full max-w-[80px] h-full max-h-[40px] text-white">
              <div className="prev w-full h-full flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300">
                <NavigateBeforeIcon sx={{ fontSize: "36px" }} />
              </div>
              <div className="next w-full h-full flex justify-center items-center cursor-pointer hover:scale-125 transition-all ease-in-out duration-300">
                <NavigateNextIcon sx={{ fontSize: "36px" }} />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default PopularManga;
