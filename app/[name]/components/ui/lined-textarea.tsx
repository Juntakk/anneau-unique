'use client';

import { updateUserField } from '@/lib/actions/user.actions';
import { handleEnterBlur, shouldSkipBlur } from '@/lib/utils';
import { User } from '@/types/user';
import { useState } from 'react';
import { toast } from 'sonner';

interface LinedTextareaProps {
  rows?: number;
  className?: string;
  placeholder?: string;
  user: User;
  field: keyof User;
}

export default function LinedTextarea({
  rows = 6,
  placeholder,
  user,
  field,
}: LinedTextareaProps) {
  const [value, setValue] = useState<string>(String(user[field]));

  const handleBlur = async () => {
    if (shouldSkipBlur()) return;
    if (value === String(user[field])) return;
    const res = await updateUserField(user.id, field, value);
    toast(res.message);
  };

  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onBlur={handleBlur}
      onKeyDown={handleEnterBlur(handleBlur)}
      value={value}
      className={`w-full p-[0.3rem_1rem] text-2xl text-amber-900 font-semibold resize-none leading-[2rem] interactive-bg
        bg-[linear-gradient(to_bottom,transparent_1.9rem,#000_1.9rem,#000_2rem,transparent_2rem)]
        bg-[length:100%_2rem] bg-repeat outline-none rounded `}
    />
  );
}
