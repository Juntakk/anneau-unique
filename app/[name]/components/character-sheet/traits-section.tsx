import MainInput from "../ui/main-input";
import SectionHeader from "../ui/section-header";

export default function TraitsSection() {
  return (
    <div className="space-y-4">
      <SectionHeader>– TRAITS –</SectionHeader>
      <MainInput label="Spécialités" />
      <MainInput label="Particularités" />
    </div>
  );
}
