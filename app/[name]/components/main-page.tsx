"use client";

import MainInput from "./main-input";

const MainPage = ({ name }: { name: string }) => {
  return (
    <div className="min-h-screen px-20 text-foreground font-[MedievalSharp]">
      <div className="flex gap-12">
        <div className="flex-1 space-y-2 p-10 rounded-lg  ">
          <section className="space-y-4">
            <MainInput name={name} width={true} label="Nom" />
            <div className="flex gap-x-6">
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
            <h2 className="text-center text-xl  mt-12 mb-6 tracking-widest">
              – TRAITS –
            </h2>
            <div className="space-y-4">
              <MainInput label="Spécialités" />
              <MainInput label="Particularités" />
            </div>
          </section>

          <section>
            <h2 className="text-center text-xl  mt-12 mb-6 tracking-widest">
              – ATTRIBUTS –
            </h2>
          </section>
        </div>

        <div className="flex flex-col gap-6 items-center justify-start w-64 p-6 rounded-lg ">
          <div className="w-full aspect-square bg-green-900 rounded-md" />
          <div className="w-full aspect-square bg-green-900 rounded-md" />
          <div className="w-full aspect-square bg-green-900 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
