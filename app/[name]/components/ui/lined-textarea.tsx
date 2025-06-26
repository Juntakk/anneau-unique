interface LinedTextareaProps {
  rows?: number;
  className?: string;
  placeholder?: string;
}

export default function LinedTextarea({
  rows = 6,
  className = "",
  placeholder,
}: LinedTextareaProps) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className={`w-full p-[0.3rem_1rem] text-2xl font-mono resize-none leading-[2rem]
        bg-[linear-gradient(to_bottom,transparent_1.9rem,#000_1.9rem,#000_2rem,transparent_2rem)]
        bg-[length:100%_2rem] bg-repeat outline-none rounded ${className}`}
    />
  );
}
