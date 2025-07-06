"use client";
import { updateUserField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type AttributeCirclesProps = {
  outerLabel: string;
  innerLabel: string;
  field: keyof User;
  secondaryField?: keyof User;
};

const AttributeCircle = ({
  outerLabel,
  innerLabel,
  field,
  secondaryField,
}: AttributeCirclesProps) => {
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
    <div className='relative w-[150px] h-[150px]'>
      <label className='absolute left-[-3.5rem] top-1/2 -translate-y-1/2 text-lg font-semibold text-foreground'>
        {outerLabel}
      </label>

      {/* Outer Circle Input */}
      <input
        type='text'
        value={value}
        maxLength={1}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        className='w-full h-full rounded-full border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none text-amber-900 focus:bg-white/10 hover:bg-white/10 hover:cursor-pointer'
      />

      {/* Inner Circle Input */}
      <input
        type='text'
        value={secondaryValue}
        onChange={(e) => setSecondaryValue(e.target.value)}
        onBlur={handleSecondaryBlur}
        onKeyDown={handleEnterBlur(handleSecondaryBlur)}
        maxLength={1}
        className='absolute w-[70px] h-[70px] rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none text-amber-900 left-[85%] top-[-16%] focus:bg-white/10 hover:bg-white/10 hover:cursor-pointer'
      />

      {/* Label for inner input - right side */}
      <label className='absolute left-[95%] top-[-10%] translate-x-[105%] translate-y-[40%] text-sm font-semibold text-foreground'>
        {innerLabel}
      </label>
    </div>
  );
};

export default AttributeCircle;
