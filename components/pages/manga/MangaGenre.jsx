"use client";

import { manga_genres } from "@/data/manga_genres";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MangaGenre() {
  const location = usePathname();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex border-t-4 border-[#1976d2]">
        <div className="bg-[#1976d2] flex gap-1 rounded-b-md text-white font-bold px-2 pt-1 pb-2">
          <ThumbUpAltIcon className="text-white" />
          <p>Genres</p>
        </div>
      </div>
      <div>
        <div className="bg-white w-full h-full p-2 rounded-md shadow-xl grid grid-cols-2 md:grid-cols-3 gap-4 font-bold underline">
          {manga_genres.map((genre) => (
            <Link
              href={{
                pathname:
                  location === "/latest_manga"
                    ? "/latest_manga"
                    : location === "/hot_manga"
                    ? "/hot_manga"
                    : location === "/new_manga"
                    ? "/new_manga"
                    : location === "/completed_manga"
                    ? "/completed_manga"
                    : "/latest_manga",
                query: {
                  genre: genre.title,
                },
              }}
              key={genre.id}
              className="hover:text-[#1976d2] capitalize text-sm"
            >
              <p>{genre.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MangaGenre;
