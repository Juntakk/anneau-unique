import { COMPETENCE_LABELS, GROUPE_COMPETENCES } from "@/lib/constants";
import Competence from "../ui/competence-commune";
import GroupeCompetence from "../ui/groupes-competences";
import { User } from "@/types/user";

export default function CompetencesSection() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-xl w-4/5 mt-12 mb-6 tracking-widest text-center'>
          – COMPÉTENCES COMMUNES –
        </h2>
        <h2 className='text-xl w-1/5 mt-12 mb-6 tracking-widest text-end'>
          GROUPES DE COMPÉTENCES
        </h2>
      </div>

      <div className='flex mb-12 gap-8'>
        {/* Compétences communes */}
        <div className='w-9/12 grid grid-cols-3 gap-x-8 gap-y-4'>
          {COMPETENCE_LABELS.map((item) => {
            const field = Object.values(item)[0];
            const label = Object.keys(item)[0];
            return (
              <Competence
                key={field}
                label={label}
                field={field as keyof User}
              />
            );
          })}
        </div>

        {/* Groupes de compétences */}
        <div className='w-3/12 flex flex-col items-end justify-end gap-y-4'>
          {GROUPE_COMPETENCES.map((item) => {
            const field = Object.values(item)[0];
            const label = Object.keys(item)[0];
            return (
              <GroupeCompetence
                key={field}
                label={label}
                field={field as keyof User}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
