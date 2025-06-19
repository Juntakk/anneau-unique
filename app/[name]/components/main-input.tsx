import { cn } from "@/lib/utils";
import { useState } from "react";

const MainInput = ({
  name,
  label,
  width,
}: {
  name?: string;
  label: string;
  width?: boolean | string;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [nameField, setNameField] = useState(
    name ? name.charAt(0).toUpperCase() + name.slice(1) : ""
  );

  return (
    <div className="flex flex-wrap items-start gap-x-4 gap-y-1 w-full">
      <label
        htmlFor="name"
        className="text-2xl font-bold text-foreground whitespace-nowrap underline"
      >
        {label}
      </label>
      <input
        type="text"
        value={nameField || ""}
        style={!width ? { width: "100%" } : { width: "200px" }}
        className={cn(
          "text-2xl outline-none font-bold text-foreground/80 placeholder:text-foreground/50 bg-transparent border-b border-foreground/20 focus:border-foreground/80 transition-colors duration-200",
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
