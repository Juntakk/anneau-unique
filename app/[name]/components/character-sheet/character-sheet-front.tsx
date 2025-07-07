import AttributesSection from "./attribute-section";
import CombatStatsSection from "./combat-stats-section";
import CompetencesSection from "./competences-section";
import EquipmentSection from "./equipment-section";
import IdentitySection from "./identity-section";
import MainCirclesSection from "./main-circles-section";
import PageNavigation from "./page-navigation";
import TraitsSection from "./traits-section";
import WeaponsSection from "./weapons-section";

interface CharacterSheetFrontProps {
  onPageChange: () => void;
}

export default function CharacterSheetFront({
  onPageChange,
}: CharacterSheetFrontProps) {
  return (
    <>
      <div className='flex gap-12'>
        <div className='flex-1'>
          <IdentitySection />
          <TraitsSection />
        </div>
        <MainCirclesSection />
      </div>
      <AttributesSection />
      <CompetencesSection />
      <div className='flex w-full'>
        <WeaponsSection />
        <CombatStatsSection />
      </div>
      <EquipmentSection />
      <PageNavigation isNextPage={false} onPageChange={onPageChange} />
    </>
  );
}
