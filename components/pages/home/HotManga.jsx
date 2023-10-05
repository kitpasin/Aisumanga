"use client";

import { hot_manga } from "@/data/hot_manga";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Autocomplete, Pagination, TextField } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

function LatestManga() {
  const [title, setTitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const mangaPerPage = 10;

  const filteredManga = hot_manga.filter((manga) => {
    const matchesTitle = title ? manga.title === title : true;
    return matchesTitle;
  });

  const pageCount = Math.ceil(filteredManga.length / mangaPerPage);
  const startIndex = (currentPage - 1) * mangaPerPage;
  const endIndex = startIndex + mangaPerPage;
  const mangaToDisplay = filteredManga.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentPage !== 1 && mangaToDisplay.length <= mangaPerPage) {
      setCurrentPage(1);
    }
  }, [title]);

  return (
    <section className="w-full h-full flex flex-col gap-1">
      <Link href="/hot_manga" className="flex border-t-4 border-[#1976d2]">
        <div className="bg-[#1976d2] flex gap-1 rounded-b-md text-white font-bold px-2 pb-1">
          <ThumbUpAltIcon className="text-white" />
          <p>HOT MANGA</p>
        </div>
      </Link>
      <div className="bg-white rounded-md shadow-xl w-full h-full flex flex-col gap-1">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4 pt-2 px-2">
          <Autocomplete
            size="small"
            disablePortal
            options={filteredManga.map((manga) => manga.title)}
            renderInput={(params) => <TextField {...params} label="Manga" />}
            className={`w-full xl:w-1/2`}
            onChange={(event, value) => setTitle(value || null)}
          />
          <Pagination
            showFirstButton
            showLastButton
            count={pageCount}
            page={currentPage}
            onChange={(event, newPage) => setCurrentPage(newPage)}
            variant="outlined"
            shape="rounded"
            size="small"
            className="w-1/2 xl:flex justify-end hidden"
          />
        </div>
        <div className="flex flex-col gap-4 p-2">
          <div className="w-full h-full overflow-auto grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            {mangaToDisplay.map((manga) => (
              <div
                key={manga.id}
                className="w-full h-full max-h-[112.5px] flex justify-between items-start gap-1 text-sm"
              >
                <Link
                  href={manga.url}
                  className="w-full max-w-[75px] h-full flex-none overflow-hidden"
                >
                  <img
                    className="w-full h-full hover:scale-125 transition-all ease-in-out duration-300"
                    src={manga.image}
                    alt=""
                  />
                </Link>
                <div className="w-full h-full flex flex-col overflow-hidden capitalize">
                  <Link className="hover:underline" href={manga.url}>
                    <p className="text-[#1976d2] font-bold">
                      {manga.title.length > 15
                        ? manga.title.substring(0, 15) + "..."
                        : manga.title}
                    </p>
                  </Link>
                  <div className="w-full h-full flex flex-col justify-end gap-1">
                    {manga.chapters
                      .slice(-3)
                      .reverse()
                      .map((chapter) => (
                        <div
                          key={chapter.chapter_id}
                          className="w-full flex justify-between"
                        >
                          <Link
                            className="hover:underline"
                            href={chapter.chapter_url}
                          >
                            <p>{chapter.chapter_title.replace("r", "r ")}</p>
                          </Link>
                          <p className="text-slate-500 text-[12px]">
                            {manga.updated_at}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          className="w-full h-full xl:hidden flex justify-center items-end px-2 pb-2"
        />
      </div>
    </section>
  );
}

export default LatestManga;
