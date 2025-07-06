import MainInput from "../ui/main-input";
import SectionHeader from "../ui/section-header";

export default function TraitsSection() {
  return (
    <div>
      <SectionHeader>– TRAITS –</SectionHeader>
      <div className='space-y-12 p-10 '>
        <MainInput label='Spécialités' field='specialites' />
        <MainInput label='Particularités' field='particularite' />
      </div>
    </div>
  );
}
