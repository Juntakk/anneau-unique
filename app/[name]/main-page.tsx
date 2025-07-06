"use client";
import { useState } from "react";
import CharacterSheetBack from "./components/character-sheet/character-sheet-back";
import CharacterSheetFront from "./components/character-sheet/character-sheet-front";

const MainPage = () => {
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
    <div className='min-h-screen px-8 font-[MedievalSharp] '>
      {isNextPage ? (
        <CharacterSheetBack onPageChange={handlePageChange} />
      ) : (
        <CharacterSheetFront onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default MainPage;
