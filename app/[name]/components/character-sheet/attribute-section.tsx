import AttributeCircle from "../ui/attribute-circle";
import SectionHeader from "../ui/section-header";

export default function AttributesSection() {
  return (
    <div>
      <SectionHeader>– ATTRIBUTS –</SectionHeader>
      <div className='flex w-full justify-evenly items-center mb-12'>
        <AttributeCircle
          outerLabel='Corps'
          innerLabel='Amélioré'
          field='corps'
          secondaryField='corps_ameliore'
        />
        <AttributeCircle
          outerLabel='Coeur'
          innerLabel='Amélioré'
          field='coeur'
          secondaryField='coeur_ameliore'
        />
        <AttributeCircle
          outerLabel='Esprit'
          innerLabel='Amélioré'
          field='esprit'
          secondaryField='esprit_ameliore'
        />
      </div>
    </div>
  );
}
