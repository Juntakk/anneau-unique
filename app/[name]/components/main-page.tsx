"use client";

import MainInput from "./main-input";

const MainPage = ({ name }: { name: string }) => {
  return (
    <div className="bg-green-900 min-h-screen text-foreground flex-col p-6">
      <MainInput name={name} label="Nom" />
      <div className="flex">
        <MainInput label="Culture" />
        <MainInput label="Niveau de Vie" />
      </div>
    </div>
  );
};

export default MainPage;
