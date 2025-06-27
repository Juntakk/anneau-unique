import Competence from './competence-commune';

const WeaponRow = () => (
  <div className="flex flex-wrap justify-start items-center gap-x-4 mb-4 w-full">
    <input
      type="text"
      className="min-w-[250px] outline-none text-2xl mr-24"
      placeholder="Nom"
    />
    <Competence />
    <div className="ml-12 flex gap-x-4 gap-y-2">
      <LabeledInput label="dégâts" />
      <LabeledInput label="taille" />
      <LabeledInput label="blessure" />
      <LabeledInput label="enc" />
    </div>
  </div>
);

const LabeledInput = ({ label }: { label: string }) => (
  <>
    <label className="font-bold">{label}</label>
    <input type="text" className="max-w-[65px] outline-none text-2xl" />
  </>
);

export default WeaponRow;
