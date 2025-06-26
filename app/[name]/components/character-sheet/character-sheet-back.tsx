import CommunauteSection from "../ui/communaute-circle";
import CommunityPhaseSection from "./community-phase-section";
import CompanySection from "./company-section";
import OriginSection from "./origin-section";
import PageNavigation from "./page-navigation";

interface CharacterSheetBackProps {
  onPageChange: () => void;
}

export default function CharacterSheetBack({
  onPageChange,
}: CharacterSheetBackProps) {
  return (
    <div className="flex flex-col">
      <PageNavigation isNextPage={true} onPageChange={onPageChange} />

      {/* Community Circles */}
      <div className="flex w-full justify-around items-center mb-2">
        <CommunauteSection />
      </div>

      <OriginSection />
      <CompanySection />
      <CommunityPhaseSection />
    </div>
  );
}
