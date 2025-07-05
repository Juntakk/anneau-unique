"use client";
import { updateEquipmentField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { Equipment } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

interface EquipementRowProps {
  label: string;
  userId: string;
  equipment: Equipment;
}

const EquipementRow = ({ userId, label, equipment }: EquipementRowProps) => {
  const [name, setName] = useState(equipment?.nom || "");
  const [enc, setEnc] = useState(equipment?.enc || "");

  const handleNameBlur = async () => {
    if (shouldSkipBlur()) return;
    if (name.trim() === "") return;
    if (name === equipment.nom && enc === equipment.enc) return;
    const res = await updateEquipmentField(
      userId,
      equipment.index,
      "nom",
      name
    );
    toast(res.message);
  };
  const handleEncBlur = async () => {
    if (shouldSkipBlur()) return;
    if (name.trim() === "") return;
    if (enc === equipment.enc && name === equipment.nom) return;
    const res = await updateEquipmentField(userId, equipment.index, "enc", enc);
    toast(res.message);
  };
  return (
    <div className='flex justify-center items-center gap-x-4'>
      <label className='font-semibold w-[80px]'>{label}</label>
      <input
        type='text'
        className='w-[280px] h-8 text-2xl border-black border-b text-amber-900 font-semibold outline-none'
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        onBlur={handleNameBlur}
        onKeyDown={handleEnterBlur(handleNameBlur)}
      />
      <label className='font-semibold w-[50px] text-right'>enc.</label>
      <input
        type='text'
        className='w-[30px] outline-none h-8 text-2xl text-amber-900 font-semibold border-black border-b text-center'
        value={enc}
        onChange={(e) => setEnc(e.currentTarget.value)}
        onBlur={handleEncBlur}
        onKeyDown={handleEnterBlur(handleEncBlur)}
      />
    </div>
  );
};

export default EquipementRow;
