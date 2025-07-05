"use client";
import { useUser } from "@/providers/UserContext";
import MainInput from "../ui/main-input";

export default function IdentitySection() {
  const user = useUser();
  const name = user.nom[0].toUpperCase() + user.nom.slice(1);
  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap items-start gap-x-4 gap-y-1 w-full'>
        <label className='text-2xl font-bold text-foreground whitespace-nowrap underline'>
          Nom
        </label>
        <input
          type='text'
          value={name}
          style={{ width: "200px" }}
          className={
            "text-2xl outline-none font-bold text-amber-900 placeholder:text-foreground/50 bg-transparent border-b border-foreground/20 hover:cursor-default"
          }
          readOnly
        />
      </div>

      <div className='flex gap-6'>
        <MainInput field='culture' label='Culture' />
        <MainInput field='niveau_de_vie' label='Niveau de Vie' />
      </div>

      <MainInput field='avantage_culturel' label='Avantage Culturel' />

      <div className='flex gap-6'>
        <MainInput field='vocation' label='Vocation' />
        <MainInput field='part_ombre' label="Part d'Ombre" />
      </div>
    </div>
  );
}
