"use client";
import {
  updateWeaponField,
  updateWeaponLevel,
} from "@/lib/actions/user.actions";
import { useUser } from "@/providers/UserContext";
import { useEffect, useState } from "react";

export const WeaponRow = ({ index }: { index: number }) => {
  const user = useUser();
  const weapon = user.armes[index];
  const dbIndex = weapon.index;
  const [weaponName, setWeaponName] = useState(weapon?.nom || "");
  const [isSaving, setIsSaving] = useState(false);
  const [value, setValue] = useState(weapon?.niveau || 0);

  useEffect(() => {
    setWeaponName(weapon?.nom || "");
  }, [weapon?.nom]);

  const handleCheck = async (index: number) => {
    if (index + 1 === value) {
      setValue(0);
    } else {
      setValue(index + 1);
    }
    const newValue = index + 1 === value ? index : index + 1;
    setValue(newValue);
    await updateWeaponLevel(user.id, "niveau", dbIndex, newValue);
  };
  const handleBlur = async () => {
    if (!weapon) return;

    if (weaponName.trim() === "") {
      setWeaponName(weapon.nom);
      return;
    }

    if (weaponName !== weapon.nom) {
      setIsSaving(true);
      try {
        await updateWeaponField(user.id, dbIndex, "nom", weaponName);
      } catch (error) {
        console.error(error);
        setWeaponName(weapon.nom);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className='flex flex-wrap justify-start items-center gap-x-4 mb-4 w-full'>
      <input
        type='text'
        className='min-w-[300px] outline-none border-b border-black text-xl mr-10'
        onChange={(e) => setWeaponName(e.target.value)}
        onBlur={handleBlur}
        value={weaponName}
        disabled={isSaving}
      />
      <div className='flex items-center gap-2'>
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
      <div className='ml-12 flex gap-x-4 gap-y-2'>
        <LabeledInput label='dégâts' value={weapon?.degats || ""} />
        <LabeledInput label='taille' value={weapon?.taille || ""} />
        <LabeledInput label='blessure' value={weapon?.blessure || ""} />
        <LabeledInput label='enc' value={weapon?.enc || ""} />
      </div>
    </div>
  );
};

const LabeledInput = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className='flex items-center gap-2'>
    <label className='font-bold'>{label}</label>
    <input
      type='text'
      className='max-w-[65px] outline-none text-2xl'
      defaultValue={value}
      readOnly
    />
  </div>
);
