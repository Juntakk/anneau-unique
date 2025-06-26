"use client";

import { useState } from "react";
import { Check } from "lucide-react"; // or any icon lib

export default function CustomCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />
      <div
        className={`w-12 h-10 border border-black rounded-full flex items-center justify-center transition-colors ${
          checked ? "text-black" : "text-transparent"
        }`}
      >
        <Check className="w-8 h-8" />
      </div>
    </label>
  );
}
