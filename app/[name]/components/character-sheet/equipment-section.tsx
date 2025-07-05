import { STATUS_CONDITIONS } from "@/lib/constants";
import CustomCheckbox from "../ui/custom-checkbox";
import EnduranceEspoirCircle from "../ui/endurance-espoir-circle";
import EquipementRow from "../ui/equipement-encombrement";
import { useUser } from "@/providers/UserContext";

export default function EquipmentSection() {
  const user = useUser();

  return (
    <div className='flex mb-20 mt-20 w-full'>
      {/* Équipement */}
      <div className='flex flex-col w-1/4 mr-20'>
        <h2 className='text-center font-semibold text-lg w-full mt-12 mb-6 tracking-widest'>
          - ÉQUIPEMENT -
        </h2>
        <div className='flex flex-col gap-y-8'>
          <EquipementRow
            label='Armure'
            userId={user.id}
            equipment={user.equipements.find((e) => e.index === 0)!}
          />
          <EquipementRow
            label='Casque'
            userId={user.id}
            equipment={user.equipements.find((e) => e.index === 1)!}
          />
          <EquipementRow
            label='Bouclier'
            userId={user.id}
            equipment={user.equipements.find((e) => e.index === 2)!}
          />
        </div>
      </div>

      {/* Endurance et Espoir */}
      <div className='flex w-full justify-evenly gap-x-24 items-center p-6'>
        <div className='flex flex-col'>
          <h4 className='w-full text-center text-3xl mb-4'>Endurance</h4>
          <EnduranceEspoirCircle
            upperLabel='Valeur de départ'
            lowerLabel='Fatigue'
            upperField='endurance_depart'
            lowerField='fatigue'
            bigField='endurance'
            user={user}
          />
        </div>
        <div className='flex-col'>
          <h2 className='w-full text-center text-3xl mb-4'>Espoir</h2>
          <EnduranceEspoirCircle
            upperLabel='Valeur de départ'
            lowerLabel='Ombre'
            upperField='espoir_depart'
            lowerField='ombre'
            bigField='espoir'
            user={user}
          />
        </div>
      </div>

      {/* États */}
      <div className='flex flex-col justify-end items-end w-1/2 mr-20'>
        {STATUS_CONDITIONS.map(({ label, key }) => (
          <div key={label} className='flex gap-x-4 p-6'>
            <label className='text-3xl'>{label}</label>
            <CustomCheckbox user={user} field={key} />
          </div>
        ))}
      </div>
    </div>
  );
}
