import { cn } from "@/lib/utils";
import { useState } from "react";

const MainInput = ({ name, label }: { name?: string; label: string }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [nameField, setNameField] = useState(
    name ? name.charAt(0).toUpperCase() + name.slice(1) : ""
  );

  return (
    <div className="space-x-4">
      <label htmlFor="name" className="text-3xl font-bold">
        {label}
      </label>
      <input
        type="text"
        value={nameField || ""}
        className={cn(
          "text-3xl outline-none max-w-[140px]",
          isSelected ? "bg-white/10" : "bg-transparent"
        )}
        onChange={(e) => {
          setNameField(e.target.value);
        }}
        onSelect={() => {
          setIsSelected(true);
        }}
        onBlur={() => {
          setIsSelected(false);
        }}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setIsSelected(false);
          }
        }}
      />
    </div>
  );
};

export default MainInput;
