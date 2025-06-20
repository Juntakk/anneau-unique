"use client";

import Image from "next/image";
import MainInput from "./main-input";
import AttributeCircles from "./attribute-circles";

type MainPageProps = {
  name: string;
};

const MainPage = ({ name }: MainPageProps) => {
  const attributes = ["Expérience", "Vaillance", "Sagesse"];

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
          {attributes.map((title, index) => (
            <div
              key={title}
              className="flex flex-col items-center gap-4 w-full"
            >
              <h2 className="text-center text-2xl font-bold tracking-widest">
                {title}
              </h2>

              {/* Total input only for the first attribute */}
              {index === 0 && (
                <div className="flex justify-start items-center space-x-2 w-full">
                  <label className="font-semibold text-foreground">Total</label>
                  <input
                    type="text"
                    maxLength={2}
                    className="w-10 h-10 text-lg text-center font-bold bg-transparent outline-3 outline-black/80 rounded-full text-foreground/80 placeholder:text-foreground/50 focus:border-foreground/80 transition-colors duration-200"
                  />
                </div>
              )}

              {/* Rotated square with input */}
              <div className="relative w-[115px] h-[115px] rotate-45">
                <Image
                  src="/images/medieval-square.png"
                  alt={title}
                  fill
                  className="object-contain"
                  priority={true}
                />
                <input
                  type="text"
                  maxLength={2}
                  className="absolute inset-0 m-auto w-12 h-12 text-center text-3xl outline-none font-bold text-foreground/80 placeholder:text-foreground/50 bg-transparent focus:border-foreground/80 transition-colors duration-200 rotate-[-45deg]"
                />
              </div>
            </div>
          ))}
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
