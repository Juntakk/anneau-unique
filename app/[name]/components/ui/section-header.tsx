import type React from "react";
interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <h2
      className={`text-center text-xl mt-12 mb-12 tracking-widest ${className}`}
    >
      {children}
    </h2>
  );
}
