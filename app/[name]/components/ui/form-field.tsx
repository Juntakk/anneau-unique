interface FormFieldProps {
  label: string;
  className?: string;
  minWidth?: string;
}

export default function FormField({
  label,
  className = "",
  minWidth = "12rem",
}: FormFieldProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <label className={`min-w-[${minWidth}] text-base font-medium`}>
        {label}
      </label>
      <input
        type="text"
        className="border-b border-black w-full bg-transparent outline-none"
      />
    </div>
  );
}
