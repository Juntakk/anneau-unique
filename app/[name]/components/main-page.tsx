'use client';

import MainInput from './main-input';
import AttributeCircles from './attribute-circles';
import MainCircle from './main-circles';
import Competence from './competence-commune';
import GroupeCompetence from './groupes-competences';
import WeaponRow from './weapon-row';

type MainPageProps = {
  name: string;
};
const competenceLabels = [
  'Présence',
  'Inspiration',
  'Persuasion',
  'Athlétisme',
  'Voyage',
  'Discrétion',
  'Vigilance',
  'Intuition',
  'Fouille',
  'Exploration',
  'Guérison',
  'Chasse',
  'Chant',
  'Courtoisie',
  'Énigmes',
  'Artisanat',
  'Art de la Guerre',
  'Connaissances',
];
const groupeCompetences = [
  'personnalité',
  'déplacement',
  'percéption',
  'survie',
  'coutume',
  'métier',
];

const MainPage = ({ name }: MainPageProps) => {
  return (
    <div className="min-h-screen px-10 text-foreground font-[MedievalSharp]">
      {/* Nom et tout + Expérience et tout */}
      <div className="flex gap-12">
        {/* Left Column */}
        <div className="flex-1 space-y-10 p-10 rounded-lg">
          {/* Basic Info Section */}
          <section className="space-y-6">
            <MainInput name={name} width label="Nom" />
            <div className="flex gap-6">
              <MainInput label="Culture" />
              <MainInput label="Niveau de Vie" />
            </div>
            <MainInput label="Avantage Culturel" />
            <div className="flex gap-6">
              <MainInput label="Vocation" />
              <MainInput label="Part d'Ombre" />
            </div>
          </section>

          {/* Traits Section */}
          <section>
            <h2 className="text-center text-xl mt-12 mb-6 tracking-widest">
              – TRAITS –
            </h2>
            <div className="space-y-4">
              <MainInput label="Spécialités" />
              <MainInput label="Particularités" />
            </div>
          </section>

          {/* Attributes Header */}
          <section>
            <h2 className="text-center text-xl mt-12 tracking-widest">
              – ATTRIBUTS –
            </h2>
          </section>
        </div>

        {/* Right Column - Attributes */}
        <div className="flex flex-col gap-12 items-center justify-start w-64 p-6 rounded-lg">
          <MainCircle isFirst={true} attribute="Expérience" />
          <MainCircle isFirst={false} attribute="Vaillance" />
          <MainCircle isFirst={false} attribute="Sagesse" />
        </div>
      </div>
      {/* Attribute Circles */}
      <div className="flex w-3/4 justify-around items-center">
        <AttributeCircles outerLabel="Corps" innerLabel="Amélioré" />
        <AttributeCircles outerLabel="Coeur" innerLabel="Amélioré" />
        <AttributeCircles outerLabel="Esprit" innerLabel="Amélioré" />
      </div>
      {/* Compétences et tout */}
      <div className="flex justify-between">
        <h2 className="text-center text-xl w-4/5 mt-12 mb-6 tracking-widest">
          – COMPÉTENCES COMMUNES –
        </h2>
        <h2 className="text-end text-xl h-full mt-12 w-1/5 mb-6 tracking-widest">
          GROUPES DE COMPÉTENCES
        </h2>
      </div>
      <div className="flex mb-12">
        <div className="w-9/12 grid grid-cols-3 gap-x-8 gap-y-4">
          {competenceLabels.map((label) => (
            <Competence key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-col justify-end items-end w-3/12 gap-y-4">
          {groupeCompetences.map((label) => (
            <GroupeCompetence key={label} label={label} />
          ))}
        </div>
      </div>

      {/* Compétences d'armes et dégâts et tout */}
      <h2 className="text-center text-xl w-4/5 mt-12 mb-6 tracking-widest">
        – COMPÉTENCES D&apos;ARMES –
      </h2>

      <div className="flex flex-col items-center mb-12 w-4/5">
        {[...Array(4)].map((_, i) => (
          <WeaponRow key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
