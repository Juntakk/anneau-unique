"use client";
import { useUser } from "@/providers/UserContext";

export const WeaponRow = () => {
  const user = useUser();
  const weapon_1 = user.armes[0];
  return (
    <div className='flex flex-wrap justify-start items-center gap-x-4 mb-4 w-full'>
      <input
        type='text'
        className='min-w-[450px] outline-none border-b border-black text-xl mr-10'
        value={weapon_1?.nom || ""}
      />
      <div className='flex items-center gap-2'>
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            checked={false}
            onChange={() => {}}
            type='checkbox'
            className='w-5 h-5 border-2 border-foreground rounded-sm transition duration-150 appearance-none checked:bg-amber-900 hover:cursor-pointer'
          />
        ))}
      </div>
      <div className='ml-12 flex gap-x-4 gap-y-2'>
        <LabeledInput label='dégâts' />
        <LabeledInput label='taille' />
        <LabeledInput label='blessure' />
        <LabeledInput label='enc' />
      </div>
    </div>
  );
};

const LabeledInput = ({ label }: { label: string }) => (
  <>
    <label className='font-bold'>{label}</label>
    <input type='text' className='max-w-[65px] outline-none text-2xl' />
  </>
);
