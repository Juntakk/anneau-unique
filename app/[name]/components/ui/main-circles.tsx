"use client";

import { updateUserField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const MainCircle = ({
  isFirst,
  label,
  field,
  secondaryField,
}: {
  isFirst?: boolean;
  label: string;
  field: keyof User;
  secondaryField?: keyof User;
}) => {
  const user = useUser();

  const [value, setValue] = useState("");
  const [secondaryValue, setSecondaryValue] = useState("");

  useEffect(() => {
    setValue(user[field]?.toString() ?? "");
    if (secondaryField) {
      setSecondaryValue(user[secondaryField]?.toString() ?? "");
    }
  }, [user, field, secondaryField]);

  const handleBlur = async () => {
    if (shouldSkipBlur()) return;
    const parsed = Number(value) || 0;
    if (parsed !== user[field]) {
      const res = await updateUserField(user.id, field, parsed);
      toast(res.message);
    }
  };

  const handleSecondaryBlur = async () => {
    if (shouldSkipBlur()) return;
    if (!secondaryField) return;
    const parsed = Number(secondaryValue) || 0;
    if (parsed !== user[secondaryField]) {
      const res = await updateUserField(user.id, secondaryField, parsed);
      toast(res.message);
    }
  };

  return (
    <div className='relative w-[140px] h-[140px]'>
      <label className='text-2xl mb-4 flex justify-center items-center font-semibold text-foreground'>
        {label}
      </label>

      <input
        type='text'
        maxLength={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        className='w-full h-full rounded-full border-2 text-amber-900 border-foreground text-center text-4xl font-bold bg-transparent outline-none'
      />

      {isFirst && secondaryField && (
        <>
          <input
            type='text'
            maxLength={1}
            value={secondaryValue}
            onChange={(e) => setSecondaryValue(e.target.value)}
            onBlur={handleSecondaryBlur}
            onKeyDown={handleEnterBlur(handleSecondaryBlur)}
            className='absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-amber-900 text-center text-2xl font-bold bg-transparent outline-none right-[87%] top-[20%]'
          />
          <label className='absolute right-[140%] top-[20%] translate-y-[70%] text-sm font-semibold text-foreground'>
            Total
          </label>
        </>
      )}
    </div>
  );
};

export default MainCircle;
