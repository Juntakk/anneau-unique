import { COMPETENCE_LABELS, GROUPE_COMPETENCES } from "@/lib/constants";
import Competence from "../ui/competence-commune";
import GroupeCompetence from "../ui/groupes-competences";
import { User } from "@/types/user";
import SectionHeader from "../ui/section-header";

export default function CompetencesSection() {
  return (
    <div className='flex mb-12 gap-8'>
      {/* Compétences communes */}
      <div className='flex flex-col w-9/12'>
        <div className='flex justify-center'>
          <SectionHeader>– COMPÉTENCES COMMUNES –</SectionHeader>
        </div>
        <div className='grid grid-cols-3 gap-x-8 gap-y-4'>
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
      </div>

      {/* Groupes de compétences */}
      <div className='flex flex-col w-3/12 items-center justify-center '>
        <div className='flex justify-center '>
          <SectionHeader>GROUPES DE COMPÉTENCES</SectionHeader>
        </div>
        <div className='flex flex-col gap-y-4'>
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
    </div>
  );
}
