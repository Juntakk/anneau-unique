"use client";

import MainInput from "./main-input";

const MainPage = ({ name }: { name: string }) => {
  return (
    <div className=" min-h-screen space-y-6 text-foreground flex-col px-32 py-12 border-10 border-foreground">
      <MainInput name={name} label="Nom" width="140" />
      <div className="flex gap-12">
        <MainInput label="Culture" width="250" />
        <MainInput label="Niveau de Vie" width="250" />
      </div>
      <div className="max-w-[2000px] flex">
        <MainInput label="Avantage Culturel" width="2000" />
      </div>
    </div>
  );
};

export default MainPage;
