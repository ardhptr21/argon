'use client';

import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/card/ProjectCard';
import ModalProject from '@/components/molecules/modals/ModalProject';
import { useAddTalentContext } from '@/context/addTalentContext';
import { CreateProjectSchema } from '@/validators/projectValidator';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiBriefcaseFill } from 'react-icons/ri';

export default function AddTalentProject() {
  const { setTalent } = useAddTalentContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState<CreateProjectSchema[]>([]);

  useEffect(() => {
    setTalent({ projects: projects as any });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  return (
    <section className='mt-10 p-5 rounded shadow-md bg-white'>
      <div className='flex justify-between items-center'>
        <h2 className='text-gray-500 font-bold text-xl inline-flex items-center gap-6'>
          <RiBriefcaseFill />
          Related Projects
        </h2>
        {projects.length > 0 && (
          <Button variant='bordered' onClick={() => setModalOpen(true)}>
            <AiOutlinePlus size={20} />
            Add New Related Projects
          </Button>
        )}
      </div>
      {projects.length == 0 ? (
        <div className='p-3 flex justify-center items-center flex-col gap-4'>
          <RiBriefcaseFill className='text-gray-200' size={127} />
          <p className='text-gray-500 font-bold max-w-xs text-center'>
            No related project has been added, to add, click the button below
          </p>
          <Button onClick={() => setModalOpen(true)}>
            <AiOutlinePlus size={20} />
            Add New Related Projects
          </Button>
        </div>
      ) : (
        <div className='mt-11 space-y-10'>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              size='base'
              title={project.name}
              description={project.description}
              period={`${project.startDate} - ${project.endDate}`}
              role={project.role}
              withSideLine={false}
            />
          ))}
        </div>
      )}
      <ModalProject
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={(project) => {
          setProjects([...projects, project]);
          setModalOpen(false);
        }}
      />
    </section>
  );
}
