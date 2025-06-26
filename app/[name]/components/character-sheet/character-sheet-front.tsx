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
  name: string;
  onPageChange: () => void;
}

export default function CharacterSheetFront({
  name,
  onPageChange,
}: CharacterSheetFrontProps) {
  return (
    <>
      {/* Identity and Main Stats */}
      <div className="flex gap-12">
        <div className="flex-1 space-y-10 p-10 rounded-lg">
          <IdentitySection name={name} />
          <TraitsSection />
        </div>
        <MainCirclesSection />
      </div>

      {/* Attributes */}
      <AttributesSection />

      {/* Competences */}
      <CompetencesSection />

      {/* Weapons and Combat */}
      <div className="flex w-full">
        <WeaponsSection />
        <CombatStatsSection />
      </div>

      {/* Equipment and Status */}
      <EquipmentSection />

      {/* Navigation */}
      <PageNavigation isNextPage={false} onPageChange={onPageChange} />
    </>
  );
}
