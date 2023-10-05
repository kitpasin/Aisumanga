"use client";

import { latest_manga } from "@/data/latest_manga";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MangaGenre from "@/components/pages/manga/MangaGenre";
import MangaStatus from "@/components/pages/manga/MangaStatus";

function Manga() {
  const location = usePathname();
  const selectedManga = latest_manga.filter((manga) => manga.url === location);

  return (
    <main className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[1280px] m-auto mt-4 flex flex-col-reverse xl:flex-row justify-between items-start px-4 gap-4">
      <div className="w-full xl:max-w-[780px] flex flex-col gap-4">
        <div className="bg-[#1976d2] text-white text-sm md:text-lg xl:text-xl font-bold p-2 rounded-md capitalize">
          <Link className="hover:underline" href="/">
            Manga Online
          </Link>
          {" > "}
          <Link className="hover:underline" href={selectedManga[0].url}>
            {selectedManga[0].title}
          </Link>
        </div>
        <div className="w-full bg-white flex flex-col gap-4 p-2 rounded-md shadow-xl">
          <div className="w-full h-full flex flex-col xs:flex-row justify-between items-start gap-4">
            <figure className="w-full xs:max-w-[223.63px] h-full">
              <img
                className="w-full h-full"
                src={selectedManga[0].image}
                alt={selectedManga[0].title}
              />
            </figure>
            <div className="w-full h-full flex flex-col gap-2 text-sm md:text-lg xl:text-xl font-bold capitalize">
              <p className="text-xl lg:text-2xl xl:text-4xl">
                {selectedManga[0].title}
              </p>
              <p className="text-slate-500">
                Author : {selectedManga[0].author}
              </p>
              <p className="text-slate-500">
                Genres : {selectedManga[0].genres}
              </p>
              <p className="text-slate-500">
                Status : {selectedManga[0].status}
              </p>
              <p className="text-slate-500 normal-case">
                Updated : {selectedManga[0].updated_at}
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-col text-sm">
            <hr className="bg-[#1976d2] h-0.5 rounded-md mb-2" />
            <p className="capitalize font-bold text-[#1976d2]">
              {selectedManga[0].title} :{" "}
            </p>
            <p>{selectedManga[0].description}</p>
          </div>
        </div>
        <div className="w-full h-full max-h-[427.44px] bg-white rounded-md shadow-xl p-2">
          <div className="w-full flex justify-between items-center text-[#1976d2] font-bold">
            <p>Chapter name</p>
            <p>Updated at</p>
          </div>
          <hr className="bg-[#1976d2] h-0.5 rounded-md my-2" />
          <div className="w-full h-full max-h-[425.44px] flex flex-col gap-1 overflow-auto pr-1 text-sm">
            {selectedManga[0].chapters.map((chapter) => (
              <div
                key={chapter.chapter_id}
                className="capitalize w-full h-full flex justify-between items-center"
              >
                <Link
                  className="hover:text-[#1976d2]"
                  href={chapter.chapter_url}
                >
                  {chapter.chapter_title.replace("r", "r ")}
                </Link>
                <p className="text-slate-500 text-[12px]">
                  {chapter.updated_at}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[460px] h-ful flex gap-4 flex-col xs:flex-row xl:flex-col">
        <MangaStatus />
        <MangaGenre />
      </div>
    </main>
  );
}

export default Manga;
