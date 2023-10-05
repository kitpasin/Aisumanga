"use client";

import MangaGenre from "@/components/pages/manga/MangaGenre";
import MangaStatus from "@/components/pages/manga/MangaStatus";
import { latest_manga } from "@/data/latest_manga";
import { Autocomplete, Pagination, TextField } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function LatestManga() {
  const [title, setTitle] = useState(null);
  const [status, setStatus] = useState("all");
  const [genre, setGenre] = useState("all");
  const location = usePathname();

  const filteredManga = latest_manga.filter((manga) => {
    const matchesTitle = title ? manga.title === title : true;
    const matchesStatus = status ? manga.status === status : true;
    const matchesGenre = genre ? manga.genres.includes(genre) : true;

    if (status === "all" && genre === "all") {
      return matchesTitle;
    } else if (status !== "all" && genre === "all") {
      return matchesTitle && matchesStatus;
    } else if (status === "all" && genre !== "all") {
      return matchesTitle && matchesGenre;
    }
  });

  // Get genre and status from url
  const searchParams = useSearchParams();
  const urlKey = searchParams.toString().split("=")[0];
  const urlValue = searchParams.toString().split("=")[1];

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const mangaPerPage = 10;
  const pageCount = Math.ceil(filteredManga.length / mangaPerPage);
  const startIndex = (currentPage - 1) * mangaPerPage;
  const endIndex = startIndex + mangaPerPage;
  const mangaToDisplay = filteredManga.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage !== 1 && mangaToDisplay.length <= mangaPerPage) {
      setCurrentPage(1);
    }
  }, [title]);

  useEffect(() => {
    if (urlKey === "status") {
      setGenre("all");
      if (urlValue !== "all") {
        setStatus(urlValue);
      } else {
        setStatus("all");
      }
    } else if (urlKey === "genre") {
      setStatus("all");
      if (urlValue !== "all") {
        setGenre(urlValue);
      } else {
        setGenre("all");
      }
    }
  }, [searchParams]);

  return (
    <main className="w-full min-h-[calc(100vh-452px)] max-w-[1280px] m-auto mt-4 flex flex-col-reverse xl:flex-row justify-between items-center xl:items-start xl:px-4 gap-4">
      <div className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[780px] flex flex-col gap-4 px-4 xl:px-0">
        <div className="bg-[#1976d2] text-white font-bold p-2 rounded-md capitalize">
          <Link className="hover:underline" href="/">
            Manga Online
          </Link>
          {" > "}
          <Link className="hover:underline" href={location}>
            Latest manga
          </Link>
        </div>
        <div className="w-full bg-white rounded-md shadow-xl p-2 flex flex-col gap-4">
          <Autocomplete
            size="small"
            disablePortal
            options={filteredManga.map((manga) => manga.title)}
            renderInput={(params) => <TextField {...params} label="Manga" />}
            className="w-full"
            onChange={(event, value) => setTitle(value || null)}
          />
          <div className="w-full grid md:grid-cols-2 gap-4">
            {mangaToDisplay.map((manga) => (
              <div
                key={manga.id}
                className="w-full h-full flex justify-between items-start gap-2 text-sm"
              >
                <Link
                  href={manga.url}
                  className="xs:w-[100px] h-[150px] flex-none overflow-hidden"
                >
                  <img
                    className="w-full h-full hover:scale-125 transition-all ease-in-out duration-300"
                    src={manga.image}
                    alt=""
                  />
                </Link>
                <div className="w-full h-full flex flex-col capitalize">
                  <div className="w-full h-full flex flex-col gap-1">
                    <Link className="hover:underline" href={manga.url}>
                      <p className="text-[#1976d2] font-bold">
                        {manga.title.length > 50
                          ? manga.title.substring(0, 50) + "..."
                          : manga.title}
                      </p>
                    </Link>
                    <div className="flex justify-between items-start gap-1 leading-4">
                      <p className="font-bold w-auto flex-none">Genres : </p>
                      <p className="w-auto">
                        {manga.genres.length > 40
                          ? manga.genres.substring(0, 40) + "..."
                          : manga.genres}
                      </p>
                    </div>
                    <div className="flex justify-between items-start gap-1 leading-4">
                      <p className="font-bold w-auto">Status : </p>
                      <p className="w-auto">{manga.status}</p>
                    </div>
                  </div>

                  <div className="w-full h-full flex flex-col justify-end gap-1 overflow-auto">
                    <hr className="h-0.5 bg-[#1976d2]" />
                    {manga.chapters
                      .slice(-3)
                      .reverse()
                      .map((chapter) => (
                        <div
                          key={chapter.chapter_id}
                          className="flex justify-between items-center"
                        >
                          <Link
                            className="hover:underline hover:text-[#1976d2]"
                            key={chapter.chapter_id}
                            href={chapter.chapter_url}
                          >
                            <p>{chapter.chapter_title.replace("r", "r ")}</p>
                          </Link>
                          <p className="text-slate-500 normal-case text-[12px] hidden xs:block">
                            {chapter.updated_at}
                          </p>
                          <p className="text-slate-500 normal-case text-[12px] block xs:hidden">
                            {chapter.updated_at.split(" ")[0]}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            showFirstButton
            showLastButton
            count={pageCount}
            page={currentPage}
            onChange={(event, newPage) => setCurrentPage(newPage)}
            variant="outlined"
            shape="rounded"
            size="small"
            className="w-full flex justify-end"
          />
        </div>
      </div>
      <div className="w-full max-w-[768px] lg:max-w-[980px] px-4 xl:px-0 xl:max-w-[460px] h-ful flex gap-4 flex-col xs:flex-row xl:flex-col">
        <MangaStatus />
        <MangaGenre />
      </div>
    </main>
  );
}

export default LatestManga;
