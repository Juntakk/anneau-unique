'use client';

import {
  updateWeaponField,
  updateWeaponLevel,
} from '@/lib/actions/user.actions';
import { handleEnterBlur, shouldSkipBlur } from '@/lib/utils';
import { useUser } from '@/providers/UserContext';
import { useEffect, useState } from 'react';
import { LabeledInput } from './labeled-input';
import { toast } from 'sonner';

export const WeaponRow = ({ index }: { index: number }) => {
  const user = useUser();
  const weapon = user.armes[index];
  const dbIndex = weapon.index;
  const [weaponName, setWeaponName] = useState(weapon?.nom || '');
  const [weaponLevel, setWeaponLevel] = useState(weapon?.niveau || 0);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setWeaponName(weapon?.nom || '');
  }, [weapon?.nom]);

  const handleCheck = async (index: number) => {
    if (index + 1 === weaponLevel) {
      setWeaponLevel(0);
    } else {
      setWeaponLevel(index + 1);
    }
    const newValue = index + 1 === weaponLevel ? index : index + 1;
    setWeaponLevel(newValue);
    const res = await updateWeaponLevel(user.id, 'niveau', dbIndex, newValue);
    toast(res.message);
  };
  const handleBlur = async () => {
    if (shouldSkipBlur()) return;
    if (!weapon) return;

    if (weaponName.trim() === '') {
      setWeaponName(weapon.nom);
      return;
    }

    if (weaponName !== weapon.nom) {
      setIsSaving(true);
      try {
        const res = await updateWeaponField(
          user.id,
          dbIndex,
          'nom',
          weaponName
        );
        toast(res.message);
      } catch (error) {
        console.error(error);
        setWeaponName(weapon.nom);
      } finally {
        setIsSaving(false);
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-start items-center gap-x-4 mb-4 w-full">
      <input
        type="text"
        className="min-w-[300px] outline-none border-b border-black text-xl mr-10 text-amber-900 font-semibold interactive-bg"
        onChange={(e) => setWeaponName(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        value={weaponName}
        disabled={isSaving}
      />
      <div className="flex items-center gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            checked={i < weaponLevel}
            onChange={() => handleCheck(i)}
            type="checkbox"
            className="w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-amber-900 interactive-bg"
          />
        ))}
      </div>
      <div className="ml-12 flex gap-x-4 gap-y-2">
        <LabeledInput
          label="dégâts"
          weapon={weapon}
          value={weapon?.degats || ''}
          field="degats"
        />
        <LabeledInput
          label="taille"
          weapon={weapon}
          value={weapon?.taille || ''}
          field="taille"
        />
        <LabeledInput
          label="blessure"
          weapon={weapon}
          value={weapon?.blessure || ''}
          field="blessure"
        />
        <LabeledInput
          label="enc"
          value={weapon?.enc || ''}
          weapon={weapon}
          field="enc"
        />
      </div>
    </div>
  );
};
