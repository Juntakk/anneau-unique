import { cn } from "@/lib/utils";
import { useState } from "react";

const MainInput = ({
  name,
  label,
  width,
}: {
  name?: string;
  label: string;
  width: string;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [nameField, setNameField] = useState(
    name ? name.charAt(0).toUpperCase() + name.slice(1) : ""
  );

  return (
    <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
      <label htmlFor="name" className="text-4xl font-bold text-foreground">
        {label}
      </label>
      <input
        type="text"
        value={nameField || ""}
        style={{ maxWidth: `${width}px` }}
        className={cn(
          `text-4xl outline-none border-b border-foreground font-bold text-foreground/80`,
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
