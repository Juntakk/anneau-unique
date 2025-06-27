import CombatCircle from '../ui/combat-circle';

export default function CombatStatsSection() {
  return (
    <div className="flex flex-col mt-8 gap-y-20 w-1/5 items-end justify-center">
      <CombatCircle innerLabel="À distance" label="Bonus aux dégâts" />
      <CombatCircle innerLabel="Bouclier" label="Parade" />
      <CombatCircle innerLabel="Casque" label="Armure" />
    </div>
  );
}
