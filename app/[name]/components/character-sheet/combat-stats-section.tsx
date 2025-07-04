import CombatCircle from "../ui/combat-circle";

export default function CombatStatsSection() {
  return (
    <div className='flex flex-col mt-8 gap-y-20 w-1/5 items-end justify-center'>
      <CombatCircle
        innerLabel='À distance'
        label='Bonus aux dégâts'
        innerField='bonus_degats_distance'
        outerField='bonus_degats'
      />
      <CombatCircle
        innerLabel='Bouclier'
        label='Parade'
        innerField='bouclier'
        outerField='parade'
      />
      <CombatCircle
        innerLabel='Casque'
        label='Armure'
        innerField='casque'
        outerField='armure'
      />
    </div>
  );
}
