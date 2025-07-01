"use client";
import { updateUserField } from "@/lib/actions/user.actions";
import { useUser } from "@/providers/UserContext";
import { User } from "@/types/user";
import { useState } from "react";

const Competence = ({
  label,
  field,
}: {
  label?: string;
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
    const newValue = index + 1 === value ? 0 : index + 1;
    setValue(newValue);
    await updateUserField(user.id, field, newValue);
  };

  return (
    <div className='flex items-center gap-2'>
      {label && (
        <label className='min-w-[120px] text-md font-semibold text-foreground'>
          {label}
        </label>
      )}
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          checked={i < value}
          onChange={() => handleCheck(i)}
          type='checkbox'
          className='w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-amber-900 hover:cursor-pointer'
        />
      ))}
    </div>
  );
};
export default Competence;
