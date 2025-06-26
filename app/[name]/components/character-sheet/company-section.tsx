import { COMPANY_ROLES } from "@/lib/constants";
import FormField from "../ui/form-field";

export default function CompanySection() {
  return (
    <div className="flex flex-col text-left w-full p-12 gap-4">
      <h2 className="text-center">- COMPAGNIE -</h2>
      {COMPANY_ROLES.map((label) => (
        <FormField key={label} label={label} />
      ))}
    </div>
  );
}
