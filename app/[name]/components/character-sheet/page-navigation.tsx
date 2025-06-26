"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavigationProps {
  isNextPage: boolean;
  onPageChange: () => void;
}

export default function PageNavigation({
  isNextPage,
  onPageChange,
}: PageNavigationProps) {
  if (isNextPage) {
    return (
      <div className="space-x-8 w-full flex justify-start items-center p-6">
        <button
          className="text-primary text-3xl font-bold flex hover:text-secondary hover:cursor-pointer"
          onClick={onPageChange}
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
          Recto
        </button>
      </div>
    );
  }

  return (
    <div className="space-x-8 w-full flex justify-end items-center p-6">
      <button
        className="text-primary text-3xl font-bold flex hover:text-secondary hover:cursor-pointer"
        onClick={onPageChange}
      >
        Verso
        <ChevronRight size={32} strokeWidth={2.5} />
      </button>
    </div>
  );
}
