import AttributeCircle from "../ui/attribute-circle";
import SectionHeader from "../ui/section-header";

export default function AttributesSection() {
  return (
    <div>
      <SectionHeader>– ATTRIBUTS –</SectionHeader>
      <div className="flex w-3/4 justify-around items-center">
        <AttributeCircle outerLabel="Corps" innerLabel="Amélioré" />
        <AttributeCircle outerLabel="Coeur" innerLabel="Amélioré" />
        <AttributeCircle outerLabel="Esprit" innerLabel="Amélioré" />
      </div>
    </div>
  );
}
