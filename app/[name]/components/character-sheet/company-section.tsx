'use client';

import { useEffect, useState } from 'react';
import { getCompanyRolesByName } from '@/lib/actions/user.actions';
import { COMPANY_ROLES } from '@/lib/constants';
import FormField from '../ui/form-field';
import { useName } from '@/providers/NameContext';

export default function CompanySection() {
  const [values, setValues] = useState<Record<string, string>>({});
  const name = useName();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanyRolesByName(name);
      if (data) {
        setValues({
          Guide: data.guide,
          Éclaireur: data.eclaireur,
          Chasseur: data.chasseur,
          Guetteur: data.guetteur,
          'Lien de Communauté': data.lien_communaute,
        });
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className="flex flex-col text-left w-full p-12 gap-4">
      <h2 className="text-center">- COMPAGNIE -</h2>
      {COMPANY_ROLES.map((label) => (
        <FormField
          key={label}
          label={label}
          value={values[label] ?? ''}
          onChange={(val) => setValues((prev) => ({ ...prev, [label]: val }))}
        />
      ))}
    </div>
  );
}
