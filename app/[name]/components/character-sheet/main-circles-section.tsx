import MainCircle from "../ui/main-circles";

export default function MainCirclesSection() {
  return (
    <div className="flex flex-col gap-12 items-center justify-start w-64 p-6 rounded-lg">
      <MainCircle isFirst attribute="Expérience" />
      <MainCircle attribute="Vaillance" />
      <MainCircle attribute="Sagesse" />
    </div>
  );
}
