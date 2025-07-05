"use client";

import { updateUserField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { User } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

interface FormFieldProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  field: keyof User;
  user: User;
}

export default function FormField({ label, field, user }: FormFieldProps) {
  const [valueState, setValueState] = useState(user[field] as string);

  const handleBlur = async () => {
    if (valueState === user![field]) return;
    if (shouldSkipBlur()) return;
    const res = await updateUserField(user.id, field, valueState);
    toast(res.message);
  };
  return (
    <div className='flex items-center gap-4 '>
      <label className='w-[200px] text-lg font-semibold'>{label}</label>
      <input
        type='text'
        value={valueState}
        onChange={(e) => setValueState(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        className='border-b border-black w-full bg-transparent outline-none text-2xl text-amber-900 font-semibold'
      />
    </div>
  );
}
