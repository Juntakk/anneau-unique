"use client";
import { useState } from "react";
import CharacterSheetBack from "./character-sheet/character-sheet-back";
import CharacterSheetFront from "./character-sheet/character-sheet-front";

type MainPageProps = {
  name: string;
};

const MainPage = ({ name }: MainPageProps) => {
  const [isNextPage, setIsNextPage] = useState(false);

  function handlePageChange() {
    setIsNextPage(!isNextPage);
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen px-10 text-foreground font-[MedievalSharp]">
      {isNextPage ? (
        <CharacterSheetBack onPageChange={handlePageChange} />
      ) : (
        <CharacterSheetFront name={name} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default MainPage;
