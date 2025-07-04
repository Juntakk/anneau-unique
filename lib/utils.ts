import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let skipNextBlur = false;

export const handleEnterBlur = (callback: () => void) => {
  return (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      skipNextBlur = true;
      callback();
      e.currentTarget.blur();
    }
  };
};

export const shouldSkipBlur = () => {
  if (skipNextBlur) {
    skipNextBlur = false;
    return true;
  }
  return false;
};
