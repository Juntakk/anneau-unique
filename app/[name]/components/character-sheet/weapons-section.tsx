import LinedTextarea from "../ui/lined-textarea";
import SectionHeader from "../ui/section-header";
import { WeaponRow } from "../ui/weapon-row";

export default function WeaponsSection() {
  return (
    <div className='flex flex-col w-4/5'>
      <SectionHeader>– COMPÉTENCES D&apos;ARMES –</SectionHeader>

      {/* Armes */}
      <div className='flex flex-col items-center mb-12'>
        {[...Array(4)].map((_, i) => (
          <WeaponRow key={i} />
        ))}
      </div>

      {/* Récompenses & Vertus */}
      <div className='flex justify-around items-start mb-12 gap-8'>
        <div className='flex flex-col text-center w-full p-6'>
          <h2 className='mb-4 text-lg font-semibold'>- RÉCOMPENSES -</h2>
          <LinedTextarea rows={6} />
        </div>

        <div className='flex flex-col text-center w-full p-6'>
          <h2 className='mb-4 text-lg font-semibold'>- VERTUS -</h2>
          <LinedTextarea rows={6} />
        </div>
      </div>
    </div>
  );
}
