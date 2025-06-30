import MainInput from '../ui/main-input';
import SectionHeader from '../ui/section-header';

export default function TraitsSection() {
  return (
    <div className="space-y-4">
      <SectionHeader>– TRAITS –</SectionHeader>
      <MainInput label="Spécialités" field="specialites" />
      <MainInput label="Particularités" field="particularite" />
    </div>
  );
}
