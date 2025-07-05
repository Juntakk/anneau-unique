"use client";

import { COMPANY_ROLES } from "@/lib/constants";
import FormField from "../ui/form-field";
import { useUser } from "@/providers/UserContext";

export default function CompanySection() {
  const user = useUser();
  return (
    <div className='flex flex-col text-left w-full p-12 gap-4'>
      <h2 className='text-center text-lg font-semibold'>- COMPAGNIE -</h2>
      {COMPANY_ROLES.map(({ label, field }) => (
        <FormField key={field} user={user} field={field} label={label} />
      ))}
    </div>
  );
}
