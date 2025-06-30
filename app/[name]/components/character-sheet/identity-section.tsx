'use client';
import MainInput from '../ui/main-input';

export default function IdentitySection() {
  return (
    <div className="space-y-6">
      <MainInput width field="nom" label="Nom" name={true} />

      <div className="flex gap-6">
        <MainInput field="culture" label="Culture" />
        <MainInput field="niveau_de_vie" label="Niveau de Vie" />
      </div>

      <MainInput field="avantage_culturel" label="Avantage Culturel" />

      <div className="flex gap-6">
        <MainInput field="vocation" label="Vocation" />
        <MainInput field="part_ombre" label="Part d'Ombre" />
      </div>
    </div>
  );
}
