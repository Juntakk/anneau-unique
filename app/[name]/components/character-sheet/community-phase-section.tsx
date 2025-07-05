import { useUser } from "@/providers/UserContext";
import FormField from "../ui/form-field";

export default function CommunityPhaseSection() {
  const user = useUser();
  console.log("CommunityPhaseSection user:", user);
  return (
    <div className='flex flex-col text-left w-full p-12 gap-4'>
      <FormField label='Sanctuaires' field='sanctuaires' user={user} />
      <FormField label='Garant' field='garant' user={user} />
    </div>
  );
}
