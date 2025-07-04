import { useUser } from "@/providers/UserContext";
import LinedTextarea from "../ui/lined-textarea";

export default function OriginSection() {
  const user = useUser();
  return (
    <div className='flex flex-col text-center w-full p-12'>
      <h2>- ORIGINE -</h2>
      <LinedTextarea rows={5} user={user} field='origine' />
    </div>
  );
}
