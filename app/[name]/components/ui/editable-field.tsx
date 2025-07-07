"use client";

import { useState } from "react";

type EditableFieldProps = {
  value: string | number;
  className?: string;
};

export default function EditableField({
  value,
  className,
}: EditableFieldProps) {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value.toString());

  return editing ? (
    <input
      className={`bg-white/10 rounded-full outline-none w-[10px] ${className}`}
      value={tempValue}
      autoFocus
      onChange={(e) => setTempValue(e.target.value)}
      onBlur={() => {
        setEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setEditing(false);
        }
      }}
    />
  ) : (
    <span
      className={`cursor-pointer ${className}`}
      onClick={() => setEditing(true)}
    >
      {value}
    </span>
  );
}
