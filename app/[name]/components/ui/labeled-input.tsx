"use client";
import { updateWeaponField } from "@/lib/actions/user.actions";
import { useUser } from "@/providers/UserContext";
import { Weapon } from "@/types/user";
import { useState } from "react";

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
    updateWeaponField(user.id, weapon.index, field, valueState.toString());
  };

  return (
    <div className='flex items-center gap-2'>
      <label className='font-bold'>{label}</label>
      <input
        type='text'
        className='max-w-[65px] outline-none text-2xl'
        value={valueState}
        onBlur={handleBlur}
        onChange={(e) => {
          setValueState(e.target.value);
        }}
      />
    </div>
  );
};
