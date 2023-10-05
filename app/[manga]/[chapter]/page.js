"use client"

import ChapterHeader from "@/components/pages/manga/chapter/ChapterHeader"
import { usePathname } from "next/navigation";
import { latest_manga } from "@/data/latest_manga";

function Chapter() {
  const location = usePathname();
  const selectedManga = latest_manga.filter(
    (manga) => manga.title === location.split("/")[1]
  );
  const selectedChapter = selectedManga[0].chapters.filter(
    (chapter) => chapter.chapter_title === location.split("/")[2]
  );

  return (
    <main className="w-full max-w-[768px] lg:max-w-[980px] xl:max-w-[1280px] m-auto mt-4 px-4">
      <ChapterHeader location={location} selectedManga={selectedManga} selectedChapter={selectedChapter}/>
      <div className="bg-[#e9eaed] w-full h-full rounded-b-md mb-4">
        {selectedChapter[0].chapter_pages.map((page) => (
          <figure key={page.chapter_pages_id} className="rounded-md w-full flex justify-center items-center pt-4">
            <img className="w-full h-full" src={page.chapter_pages_image} />
          </figure>
        ))}
      </div>
      <ChapterHeader location={location} selectedManga={selectedManga} selectedChapter={selectedChapter}/>
    </main>
  )
}

export default Chapter
