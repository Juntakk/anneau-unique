"use client";

import { handleEnterBlur, shouldSkipBlur } from "@/lib/utils";
import { useUser } from "@/providers/UserContext";
import { useEffect, useState } from "react";
import { updateUserField } from "@/lib/actions/user.actions";

import type { User } from "@/types/user";
import { useName } from "@/providers/NameContext";
import { toast } from "sonner";

const MainInput = ({
  field,
  width,
  label,
  name,
}: {
  name?: boolean;
  field: keyof User;
  width?: boolean | string;
  label: string;
}) => {
  const user = useUser();
  const fetchedName = useName();
  const uppercaseName = fetchedName[0].toUpperCase() + fetchedName.slice(1);

  const [value, setValue] = useState(name ? uppercaseName : "");

  useEffect(() => {
    if (name) {
      setValue(uppercaseName);
    } else if (user !== undefined) {
      setValue(String(user[field] ?? ""));
    }
  }, [user, field, name, uppercaseName]);

  const handleBlur = async () => {
    if (name) return;
    if (shouldSkipBlur()) return;
    if (value !== String(user[field])) {
      try {
        const res = await updateUserField(user.id, field, value);
        toast(res.message);
      } catch (err) {
        console.error(`Failed to update ${field}:`, err);
      }
    }
  };

  return (
    <div className='flex items-end gap-x-4 w-full '>
      <label htmlFor={field} className='text-2xl font-bold whitespace-nowrap'>
        {label}
      </label>
      <input
        id={field}
        type='text'
        value={value}
        style={!width ? { width: "100%" } : { width: "200px" }}
        className={
          "text-2xl outline-none font-bold text-amber-900 border-b border-black focus:bg-white/10 hover:bg-white/10 hover:cursor-pointer"
        }
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleEnterBlur(handleBlur)}
        readOnly={name}
      />
    </div>
  );
};

export default MainInput;
