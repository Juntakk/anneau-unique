"use client";

import { useState } from "react";
import { Check } from "lucide-react"; // or any icon lib
import { User } from "@/types/user";
import { updateUserField } from "@/lib/actions/user.actions";
import { toast } from "sonner";

export default function CustomCheckbox({
  user,
  field,
}: {
  user: User;
  field: keyof User;
}) {
  const [checked, setChecked] = useState(user[field] as boolean);

  const handleCheck = async () => {
    setChecked(!checked);
    const res = await updateUserField(user.id, field, !checked);
    toast(res.message);
  };

  return (
    <label className='inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleCheck}
        className='sr-only'
      />
      <div
        className={`w-12 h-10 border-2 border-black rounded-full interactive-bg flex items-center justify-center transition-colors ${
          checked ? "text-amber-900" : "text-transparent"
        }`}
      >
        <Check className='w-full h-full' />
      </div>
    </label>
  );
}
