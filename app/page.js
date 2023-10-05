"use client"

import CompletedManga from "@/components/pages/home/CompletedManga";
import HotManga from "@/components/pages/home/HotManga";
import LatestManga from "@/components/pages/home/LatestManga";
import NewManga from "@/components/pages/home/NewManga";

function Home() {
  return (
    <main className="w-full h-full max-w-[768px] lg:max-w-[980px] xl:max-w-[1280px] m-auto mt-4 flex flex-col gap-4 px-4">
      <div className="w-full h-full grid md:grid-cols-2 gap-4">
        <LatestManga />
        <HotManga />
        <NewManga />
        <CompletedManga />
      </div>
    </main>
  );
}

export default Home;
