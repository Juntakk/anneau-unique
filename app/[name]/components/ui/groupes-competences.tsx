'use client';

import { updateUserField } from '@/lib/actions/user.actions';
import { useUser } from '@/providers/UserContext';
import { User } from '@/types/user';
import { useState } from 'react';
import { toast } from 'sonner';

const GroupeCompetence = ({
  label,
  field,
}: {
  label: string;
  field: keyof User;
}) => {
  const user = useUser();
  const [value, setValue] = useState(Number(user[field]));

  const handleCheck = async (index: number) => {
    if (index + 1 === value) {
      setValue(0);
    } else {
      setValue(index + 1);
    }
    const newValue = index + 1 === value ? index : index + 1;
    setValue(newValue);
    const res = await updateUserField(user.id, field, newValue);
    toast(res.message);
  };

  return (
    <div className="flex items- justify-end w-full gap-2">
      <label className="min-w-[120px] text-md font-semibold text-foreground">
        {label}
      </label>
      {Array.from({ length: 3 }).map((_, i) => (
        <input
          key={i}
          checked={i < value}
          onChange={() => handleCheck(i)}
          type="checkbox"
          className="w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-amber-900 interactive-bg"
        />
      ))}
    </div>
  );
};

export default GroupeCompetence;
