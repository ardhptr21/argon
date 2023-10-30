import EditTalentProjects from '@/components/organisms/talents/EditTalentProjects';
import { db } from '@/lib/db';

interface IProps {
  params: {
    id: string;
  };
}

const getTalentProjects = async (talentId: string) => {
  const projects = await db.project.findMany({ where: { talentId } });
  return projects;
};

export default async function EditTalentProject({ params: { id } }: IProps) {
  const projects = await getTalentProjects(id);

  return (
    <>
      <section className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Edit Talent Projects</h1>
      </section>
      <section>
        <EditTalentProjects projects={projects} />
      </section>
    </>
  );
}
