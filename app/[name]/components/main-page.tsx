'use client';

import MainInput from './main-input';
import AttributeCircle from './attribute-circles';
import MainCircle from './main-circles';
import Competence from './competence-commune';
import GroupeCompetence from './groupes-competences';
import WeaponRow from './weapon-row';
import CombatCircle from './combat-circle';
import EnduranceEspoirCircle from './endurance-espoir-circle';
import CustomCheckbox from './custom-checkbox';
import EquipementRow from './equipement-encombrement';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CommunauteSection from './communaute-circle';

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
  const [isNextPage, setIsNextPage] = useState(false);

  function handlePageChange() {
    setIsNextPage(!isNextPage);
    scrolltop();
  }
  function scrolltop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="min-h-screen px-10 text-foreground font-[MedievalSharp]">
      {!isNextPage ? (
        <>
          <div className="flex gap-12">
            <div className="flex-1 space-y-10 p-10 rounded-lg">
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
              <section>
                <h2 className="text-center text-xl mt-12 mb-6 tracking-widest">
                  – TRAITS –
                </h2>
                <div className="space-y-4">
                  <MainInput label="Spécialités" />
                  <MainInput label="Particularités" />
                </div>
              </section>
              <section>
                <h2 className="text-center text-xl mt-12 tracking-widest">
                  – ATTRIBUTS –
                </h2>
              </section>
            </div>

            <div className="flex flex-col gap-12 items-center justify-start w-64 p-6 rounded-lg">
              <MainCircle isFirst={true} attribute="Expérience" />
              <MainCircle isFirst={false} attribute="Vaillance" />
              <MainCircle isFirst={false} attribute="Sagesse" />
            </div>
          </div>
          <div className="flex w-3/4 justify-around items-center">
            <AttributeCircle outerLabel="Corps" innerLabel="Amélioré" />
            <AttributeCircle outerLabel="Coeur" innerLabel="Amélioré" />
            <AttributeCircle outerLabel="Esprit" innerLabel="Amélioré" />
          </div>
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

          <div className="flex w-full">
            <div className="flex-col w-4/5">
              <h2 className="text-center text-xl w-4/5 mt-12 mb-6 tracking-widest">
                – COMPÉTENCES D&apos;ARMES –
              </h2>
              <div className="flex flex-col items-center mb-12 min-w-4/5">
                {[...Array(4)].map((_, i) => (
                  <WeaponRow key={i} />
                ))}
              </div>
              <div className="flex w-full justify-around items-center mb-12">
                <div className="flex flex-col text-center w-full p-12">
                  <h2>- RÉCOMPENSES -</h2>
                  <textarea
                    rows={6}
                    className="w-full p-[0.3rem_1rem] text-2xl font-mono resize-none leading-[2rem]
                 bg-[linear-gradient(to_bottom,transparent_1.9rem,#000_1.9rem,#000_2rem,transparent_2rem)]
                 bg-[length:100%_2rem] bg-repeat outline-none rounded"
                  />
                </div>
                <div className="flex flex-col text-center w-full p-12">
                  <h2>- VERTUS -</h2>
                  <textarea
                    rows={6}
                    className="w-full p-[0.3rem_1rem] text-2xl font-mono resize-none leading-[2rem]
                 bg-[linear-gradient(to_bottom,transparent_1.9rem,#000_1.9rem,#000_2rem,transparent_2rem)]
                 bg-[length:100%_2rem] bg-repeat outline-none rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-8 gap-y-20 w-1/5 items-center justify-center">
              <CombatCircle innerLabel="À distance" label="Bonus aux dégâts" />
              <CombatCircle innerLabel="Bouclier" label="Parade" />
              <CombatCircle innerLabel="Casque" label="Armure" />
            </div>
          </div>
          <div className="flex mb-20 mt-12 w-full">
            <div className="flex flex-col w-1/4 mr-20">
              <h2 className="text-center text-xl w-full mt-12 mb-6 tracking-widest">
                - ÉQUIPEMENT -
              </h2>
              <div className="flex flex-col gap-y-8">
                {' '}
                <EquipementRow />
                <EquipementRow />
                <EquipementRow />
                <input type="text" />
              </div>
            </div>
            <div className="flex w-full justify-around items-center p-6">
              <div className="flex flex-col">
                <h2 className="w-full text-center text-3xl mb-2">Endurance</h2>
                <EnduranceEspoirCircle
                  upperLabel="Valeur de départ"
                  lowerLabel="Fatigue"
                />
              </div>
              <div className="flex-col">
                <h2 className="w-full text-center text-3xl mb-2">Espoir</h2>
                <EnduranceEspoirCircle
                  upperLabel="Valeur de départ"
                  lowerLabel="Ombre"
                />
              </div>
            </div>
            <div className="flex flex-col justify-end items-end w-1/2 mr-20">
              <div className="flex gap-x-4 p-6">
                <label className="text-3xl">Épuisement</label>
                <CustomCheckbox />
              </div>
              <div className="flex gap-x-4 p-6">
                <label className="text-3xl">Mélancolie</label>
                <CustomCheckbox />
              </div>
              <div className="flex gap-x-4 p-6">
                <label className="text-3xl">Blessé</label>
                <CustomCheckbox />
              </div>
            </div>
          </div>
          <div className="space-x-8 w-full flex justify-end items-center p-6">
            <button
              className="text-primary text-2xl font-bold flex hover:text-secondary hover:cursor-pointer"
              onClick={handlePageChange}
            >
              Verso
              <ChevronRight size={32} strokeWidth={2.5} />
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col">
          <div className="space-x-8 w-full flex justify-start items-center p-6">
            <button
              className="text-primary text-2xl font-bold flex hover:text-secondary hover:cursor-pointer"
              onClick={handlePageChange}
            >
              <ChevronLeft size={32} strokeWidth={2.5} />
              Recto
            </button>
          </div>
          <div className="flex w-full justify-around items-center mb-2">
            <CommunauteSection />
          </div>
          {/* ORIGINE */}
          <div className="flex flex-col text-center w-full p-12">
            <h2>- ORIGINE -</h2>
            <textarea
              rows={5}
              className="w-full p-[0.3rem_1rem] text-2xl font-mono resize-none leading-[2rem]
                 bg-[linear-gradient(to_bottom,transparent_1.9rem,#000_1.9rem,#000_2rem,transparent_2rem)]
                 bg-[length:100%_2rem] bg-repeat outline-none rounded"
            />
          </div>
          {/* Compagnie */}
          <div className="flex flex-col text-left w-full p-12 gap-4">
            <h2 className="text-center">- COMPAGNIE -</h2>

            {[
              'Guide',
              'Éclaireur',
              'Chasseur',
              'Guetteur',
              'Lien de Communauté',
            ].map((label) => (
              <div key={label} className="flex items-center gap-4">
                <label className="min-w-[12rem] text-base font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  className="border-b border-black w-full bg-transparent outline-none"
                />
              </div>
            ))}
          </div>
          {/* Phase de communauté */}
          <div className="flex flex-col text-left w-full p-12 gap-4">
            <div className="flex items-center gap-4">
              <label className="min-w-[12rem] text-base font-medium">
                Sanctuaires
              </label>
              <input
                type="text"
                className="border-b border-black w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="min-w-[12rem] text-base font-medium">
                Garant
              </label>
              <input
                type="text"
                className="border-b border-black w-full bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
