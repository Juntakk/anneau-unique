import { useUser } from "@/providers/UserContext";
import LinedTextarea from "../ui/lined-textarea";
import SectionHeader from "../ui/section-header";
import { WeaponRow } from "../ui/weapon-row";

export default function WeaponsSection() {
  const user = useUser();
  return (
    <div className='flex flex-col w-4/5'>
      <SectionHeader>– COMPÉTENCES D&apos;ARMES –</SectionHeader>
      <div className='flex flex-col items-center mb-12'>
        {user.armes.map((weapon) => (
          <WeaponRow key={weapon.index} index={weapon.index} />
        ))}
      </div>
      <div className='flex justify-around items-start mb-12 gap-8'>
        <div className='flex flex-col text-center w-full p-6'>
          <h2 className='mb-4 text-lg font-semibold'>- RÉCOMPENSES -</h2>
          <LinedTextarea rows={6} field='recompenses' user={user} />
        </div>
        <div className='flex flex-col text-center w-full p-6'>
          <h2 className='mb-4 text-lg font-semibold'>- VERTUS -</h2>
          <LinedTextarea rows={6} field='vertus' user={user} />
        </div>
      </div>
    </div>
  );
}
