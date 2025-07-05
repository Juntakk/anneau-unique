"use client";
import { updateWeaponField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { Weapon } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

export const LabeledInput = ({
  label,
  value,
  weapon,
  field,
}: {
  label: string;
  value: string | number;
  weapon: Weapon;
  field: keyof Weapon;
}) => {
  const user = useUser();
  const [valueState, setValueState] = useState(value.toString());

  const handleBlur = async () => {
    if (shouldSkipBlur()) return;
    if (valueState === String(value)) return;
    const res = await updateWeaponField(
      user.id,
      weapon.index,
      field,
      valueState.toString()
    );
    toast(res.message);
  };

  return (
    <div className='flex items-center gap-2'>
      <label className='font-bold'>{label}</label>
      <input
        type='text'
        className='max-w-[65px] outline-none text-2xl text-amber-900 font-semibold'
        value={valueState}
        onBlur={handleBlur}
        onChange={(e) => {
          setValueState(e.target.value);
        }}
        onKeyDown={handleEnterBlur(handleBlur)}
      />
    </div>
  );
};
