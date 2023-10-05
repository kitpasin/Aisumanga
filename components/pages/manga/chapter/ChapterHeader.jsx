"use client";

import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Link from "next/link";
function ChapterHeader({ location, selectedManga, selectedChapter }) {
  const [currentChapter, setCurrentChapter] = useState("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div className="bg-[#1976d2] w-full rounded-md text-white text-sm md:text-lg xl:text-xl font-bold">
      <div className="w-full h-full p-2">
        <Link className="hover:underline" href="/">
          Manga Online
        </Link>
        {" > "}
        <Link
          className="hover:underline capitalize"
          href={selectedManga[0].url}
        >
          {selectedManga[0].title}
        </Link>
        {" > "}
        <Link
          className="hover:underline capitalize"
          href={`${selectedManga[0].url}/${location.split("/")[2]}`}
        >
          {location.split("/")[2].replace("r", "r ")}
        </Link>
      </div>
      <div className="bg-white w-full h-full flex justify-start items-center rounded-b-md p-2 gap-4">
        <FormControl size="small" fullWidth>
          <InputLabel className="capitalize">
            {selectedChapter[0].chapter_title.replace("r", "r ")}
          </InputLabel>
          <Select
            label="Chapter"
            value={currentChapter}
            onChange={(event) => setCurrentChapter(event.target.value)}
            open={isSelectOpen}
            onOpen={() => setIsSelectOpen(true)}
            onClose={() => setIsSelectOpen(false)}
            MenuProps={{ onClose: () => setIsSelectOpen(false) }}
          >
            {selectedManga[0].chapters.map((chapter) => (
              <Link href={chapter.chapter_url} key={chapter.chapter_id}>
                <MenuItem
                  value={chapter.chapter_title}
                  onClick={() => setIsSelectOpen(false)}
                  className="capitalize"
                >
                  {chapter.chapter_title.replace("r", "r ")}
                </MenuItem>
              </Link>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ChapterHeader;
