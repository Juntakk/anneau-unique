import { updateUserField } from "@/lib/actions/user.actions";
import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { User } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

const stats = [
  { label: "Communauté", field: "communaute" },
  { label: "Points de Progression", field: "points_progression" },
  { label: "Trésors", field: "tresors" },
  { label: "Prestige", field: "prestige" },
];

export default function CommunauteSection() {
  const user = useUser();
  return (
    <div className='flex w-full justify-around items-center mb-12'>
      {stats.map((stat, i) => (
        <CommunauteCircle
          key={i}
          field={stat.field as keyof User}
          label={stat.label}
          user={user}
        />
      ))}
    </div>
  );
}

const CommunauteCircle = ({
  label,
  field,
  user,
}: {
  label: string;
  field: keyof User;
  user: User;
}) => {
  const [value, setValue] = useState((user[field] as string) || "0");

  const handleBlur = async () => {
    if (shouldSkipBlur()) return;
    if (value === user[field]) return;
    const res = await updateUserField(user.id, field, value);
    toast(res.message);
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl text-center mb-2 font-semibold'>{label}</h2>
      <input
        type='text'
        maxLength={1}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        className='w-40 h-40 rounded-full border-2 border-foreground text-center text-amber-900 text-4xl font-bold bg-transparent outline-none'
      />
    </div>
  );
};
