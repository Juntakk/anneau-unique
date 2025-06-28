"use client";
import MainInput from "../ui/main-input";

interface IdentitySectionProps {
  name: string;
}

export default function IdentitySection({ name }: IdentitySectionProps) {
  return (
    <div className="space-y-6">
      <MainInput name={name} width label="Nom" />

      <div className="flex gap-6">
        {/* <MainInput label="Culture" /> */}
        <MainInput label="Niveau de Vie" />
      </div>

      <MainInput label="Avantage Culturel" />

      <div className="flex gap-6">
        <MainInput label="Vocation" />
        <MainInput label="Part d'Ombre" />
      </div>
    </div>
  );
}
