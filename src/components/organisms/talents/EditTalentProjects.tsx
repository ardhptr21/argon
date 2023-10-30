'use client';

import { editProjectApi } from '@/apis/projectApis';
import FullScreenLoading from '@/components/atoms/loading/FullScreenLoading';
import ProjectCard from '@/components/molecules/card/ProjectCard';
import ModalProject from '@/components/molecules/modals/ModalProject';
import { EditProjectSchema } from '@/validators/projectValidator';
import { Project } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface IProps {
  projects: Project[];
}

export default function EditTalentProjects({ projects }: IProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const initialActiveProject = {
    name: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
  };
  const [activeProject, setActiveProject] = useState<EditProjectSchema>(initialActiveProject);
  const [activeIdProject, setActiveIdProject] = useState<string | null>(null);

  const handleClick = (project: Project) => {
    setActiveProject({
      name: project.name,
      role: project.role,
      startDate: project.startDate,
      endDate: project.endDate,
      description: project.description,
    });
    setActiveIdProject(project.id);
    setModalOpen(true);
  };

  const { mutate: editProject, isPending } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      const msg = data.message || 'Project updated successfully.';
      setActiveProject(initialActiveProject);
      setActiveIdProject(null);
      setModalOpen(false);
      router.refresh();
      toast.success(msg);
    },
    onError: (error: AxiosError<any>) => {
      const msg = error.response?.data.message || 'Failed to update project.';
      setModalOpen(false);
      toast.error(msg);
    },
  });

  return (
    <div className='mt-10 p-5'>
      <div className='space-y-10'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='bg-white p-10 rounded shadow hover:bg-gray-50 hover:cursor-pointer'
            onClick={() => handleClick(project)}
          >
            <ProjectCard
              size='base'
              title={project.name}
              description={project.description}
              periodStart={project.startDate}
              periodEnd={project.endDate}
              role={project.role}
              withSideLine={false}
            />
          </div>
        ))}
      </div>
      <ModalProject
        defaultValues={activeProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
        onSubmit={(project) => editProject({ id: activeIdProject!, body: project })}
      />
      {isPending && <FullScreenLoading text='Updating project...' />}
    </div>
  );
}
