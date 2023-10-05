"use client";

import { manga_status } from "@/data/manga_status";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MangaStatus() {
  const location = usePathname();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex border-t-4 border-[#1976d2]">
        <div className="bg-[#1976d2] flex gap-1 rounded-b-md text-white font-bold px-2 pt-1 pb-2">
          <ThumbUpAltIcon className="text-white" />
          <p>Status</p>
        </div>
      </div>
      <div>
        <div className="bg-white w-full h-full p-2 rounded-md shadow-xl grid grid-cols-2 md:grid-cols-3 gap-4 font-bold underline">
          {manga_status.map((status) => (
            <Link
              href={{
                pathname: location,
                query: {
                  status: status.title,
                },
              }}
              key={status.id}
              className="capitalize hover:text-[#1976d2] w-full h-full text-sm"
            >
              {status.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MangaStatus;
