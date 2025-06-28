'use client';

interface FormFieldProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function FormField({
  label,
  value,
  onChange,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <label className="w-[200px] text-lg font-medium">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="border-b border-black w-full bg-transparent outline-none text-xl"
      />
    </div>
  );
}
