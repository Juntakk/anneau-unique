"use client";
import { updateUserField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { User } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

const CombatCircle = ({
  innerLabel,
  label,
  innerField,
  outerField,
}: {
  innerLabel: string;
  label: string;
  innerField: keyof User;
  outerField: keyof User;
}) => {
  const user = useUser();
  const [innerValue, setInnerValue] = useState(
    innerField ? String(user[innerField]) : ""
  );
  const [outerValue, setOuterValue] = useState(
    outerField ? String(user[outerField]) : ""
  );

  const onInnerBlur = async () => {
    if (shouldSkipBlur()) return;
    if (innerValue === String(user[innerField])) return;
    const res = await updateUserField(user.id, innerField, innerValue);
    toast(res.message);
  };

  const onOuterBlur = async () => {
    if (shouldSkipBlur()) return;
    if (outerValue === String(user[outerField])) return;
    const res = await updateUserField(user.id, outerField, outerValue);
    toast(res.message);
  };

  return (
    <div className='relative w-[150px] h-[150px]'>
      <h1 className='text-center text-lg font-bold w-full'>{label}</h1>
      {/* BIG Circle Input */}
      <input
        type='text'
        maxLength={1}
        value={outerValue}
        onChange={(e) => {
          setOuterValue(e.target.value);
        }}
        onBlur={onOuterBlur}
        onKeyDown={handleEnterBlur(onOuterBlur)}
        className='absolute w-full h-full rounded-full text-amber-900 border-2 border-foreground text-center text-4xl font-bold bg-transparent outline-none'
      />

      {/* SMALL Circle Input */}
      <input
        type='text'
        maxLength={1}
        value={innerValue}
        onChange={(e) => {
          setInnerValue(e.target.value);
        }}
        onBlur={onInnerBlur}
        onKeyDown={handleEnterBlur(onInnerBlur)}
        className='absolute w-[70px] top-[80%] left-[-36%] h-[70px] text-amber-900 rounded-full border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none'
      />

      {/* Label for SMALL input - bottom left side */}
      <label className='absolute top-[50%] right-[55%] w-full text-sm font-semibold text-foreground'>
        {innerLabel}
      </label>
    </div>
  );
};

export default CombatCircle;
