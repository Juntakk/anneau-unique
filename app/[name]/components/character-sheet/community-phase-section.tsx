import FormField from '../ui/form-field';

export default function CommunityPhaseSection() {
  return (
    <div className="flex flex-col text-left w-full p-12 gap-4">
      <FormField label="Sanctuaires" value="" />
      <FormField label="Garant" value="" />
    </div>
  );
}
