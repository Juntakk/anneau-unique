"use client";

import MainInput from "./main-input";
import AttributeCircles from "./attribute-circles";
import MainCircle from "./main-circles";

type MainPageProps = {
  name: string;
};

const MainPage = ({ name }: MainPageProps) => {
  return (
    <div className="min-h-screen px-20 text-foreground font-[MedievalSharp]">
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

      {/* Skills Section Header */}
      <h2 className="text-center text-xl w-4/5 mt-12 mb-6 tracking-widest">
        – COMPÉTENCES COMMUNES –
      </h2>
    </div>
  );
};

export default MainPage;
