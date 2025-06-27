'use client';
import { useEffect, useState } from 'react';
import MainInput from '../ui/main-input';
import { getCulture } from '@/lib/actions/culture.action';

interface IdentitySectionProps {
  name: string;
}

export default function IdentitySection({ name }: IdentitySectionProps) {
  const [culture, setCulture] = useState<string | null>('');
  console.log(name);
  useEffect(() => {
    getCulture(name)
      .then((result) => {
        setCulture(result);
      })
      .catch((err) => {
        console.error('Failed to fetch culture:', err);
      });
  }, [name]);

  return (
    <div className="space-y-6">
      <MainInput name={name} width label="Nom" />

      <div className="flex gap-6">
        <div>
          {culture ? (
            <span>Culture: {culture}</span>
          ) : (
            <span className="text-gray-500">No culture found</span>
          )}
        </div>
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
