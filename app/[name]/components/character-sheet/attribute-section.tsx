import AttributeCircle from "../ui/attribute-circle";
import SectionHeader from "../ui/section-header";

export default function AttributesSection() {
  return (
    <div>
      <SectionHeader>– ATTRIBUTS –</SectionHeader>
      <div className="flex w-full justify-evenly items-center mb-12">
        <AttributeCircle outerLabel="Corps" innerLabel="Amélioré" />
        <AttributeCircle outerLabel="Coeur" innerLabel="Amélioré" />
        <AttributeCircle outerLabel="Esprit" innerLabel="Amélioré" />
      </div>
    </div>
  );
}
