'use client';

interface FormFieldProps {
  label: string;
  className?: string;
}

export default function FormField({ label, className = '' }: FormFieldProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <label className="w-[200px] text-lg font-medium">{label}</label>
      <input
        type="text"
        className="border-b border-black w-full bg-transparent outline-none text-xl"
      />
    </div>
  );
}
