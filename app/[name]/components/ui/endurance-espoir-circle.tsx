import { updateUserField } from "@/lib/actions/user.actions";
import { shouldSkipBlur } from "@/lib/utils";
import { User } from "@/types/user";
import { useState } from "react";
import { toast } from "sonner";

const EnduranceEspoirCircle = ({
  upperLabel,
  lowerLabel,
  upperField,
  lowerField,
  bigField,
  user,
}: {
  upperLabel: string;
  lowerLabel: string;
  upperField: keyof User;
  lowerField: keyof User;
  bigField: keyof User;
  user: User;
}) => {
  const [upperValue, setUpperValue] = useState(
    (user[upperField] as string) || "0"
  );
  const [lowerValue, setLowerValue] = useState(
    (user[lowerField] as string) || "0"
  );
  const [bigCircleValue, setBigCircleValue] = useState(
    (user[bigField] as string) || "0"
  );

  const handleUpperBlur = async () => {
    if (shouldSkipBlur()) return;
    if (upperValue === (user[upperField] as string)) return;
    const res = await updateUserField(user.id, upperField, upperValue);
    toast(res.message);
  };
  const handleLowerBlur = async () => {
    if (shouldSkipBlur()) return;
    if (lowerValue === (user[lowerField] as string)) return;

    const res = await updateUserField(user.id, lowerField, lowerValue);
    toast(res.message);
  };
  const handleBigBlur = async () => {
    if (shouldSkipBlur()) return;
    if (bigCircleValue === (user[bigField] as string)) return;

    const res = await updateUserField(user.id, bigField, bigCircleValue);
    toast(res.message);
  };

  return (
    <div className='relative w-[180px] h-[180px]'>
      <label className='absolute text-sm right-[105%] min-w-[100px] font-semibold text-foreground'>
        {upperLabel}
      </label>
      <input
        type='text'
        maxLength={1}
        value={upperValue}
        onBlur={handleUpperBlur}
        onChange={(e) => {
          setUpperValue(e.target.value);
        }}
        className='absolute w-[70px] h-[70px] rounded-full text-amber-900 border-2 border-foreground text-center text-2xl font-bold bg-transparent outline-none right-[85%] top-[-10%]'
      />
      <input
        type='text'
        maxLength={1}
        value={bigCircleValue}
        onBlur={handleBigBlur}
        onChange={(e) => {
          setBigCircleValue(e.target.value);
        }}
        className='w-full h-full rounded-full border-2 border-foreground text-amber-900 text-center text-4xl font-bold bg-transparent outline-none'
      />
      <input
        type='text'
        maxLength={1}
        value={lowerValue}
        onBlur={handleLowerBlur}
        onChange={(e) => {
          setLowerValue(e.target.value);
        }}
        className='absolute w-[70px] h-[70px] rounded-full border-2 text-amber-900 border-foreground text-center text-2xl font-bold outline-none right-[85%] top-[73%]'
      />
      <label className='absolute right-[125%] bottom-[0%] text-sm font-semibold text-foreground'>
        {lowerLabel}
      </label>
    </div>
  );
};

export default EnduranceEspoirCircle;
