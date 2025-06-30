import MainCircle from '../ui/main-circles';

export default function MainCirclesSection() {
  return (
    <div className="flex flex-col gap-12 items-center justify-start w-64 p-6 rounded-lg">
      <MainCircle
        isFirst
        label="Expérience"
        field="experience"
        secondaryField="experience_totale"
      />
      <MainCircle label="Vaillance" field="vaillance" />
      <MainCircle label="Sagesse" field="sagesse" />
    </div>
  );
}
