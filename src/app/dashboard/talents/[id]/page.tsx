import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/card/ProjectCard';
import { db } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { RiBriefcaseFill } from 'react-icons/ri';

interface IProps {
  params: {
    id: string;
  };
}

const getTalent = async (id: string) => {
  const talent = await db.talent.findFirst({ where: { id }, include: { projects: true } });

  if (!talent) throw notFound();

  return talent;
};

export default async function TalentDetail({ params: { id } }: IProps) {
  const talent = await getTalent(id);

  return (
    <>
      <section className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Detail Talent</h1>
        <Link href={`/dashboard/talents/${id}/edit`}>
          <Button variant='bordered'>
            <BiEdit size={20} />
            Edit
          </Button>
        </Link>
      </section>
      <section className='bg-white p-10 rounded shadow-md flex items-center gap-10 mt-14'>
        <div className='flex flex-col items-center'>
          <div className='w-80 h-80 rounded-full bg-gray-200 relative overflow-hidden'>
            <Image src={talent.avatar} alt={talent.name} fill={true} priority sizes='100%' />
          </div>
          <Badge text='Front End' size='lg' className='bg-primary text-white px-12 -mt-8 z-10' />
        </div>
        <div className='space-y-10'>
          <h1 className='font-bold text-5xl'>{talent.name}</h1>
          <div className='flex items-center gap-16'>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>MBTI</p>
              <p className='text-3xl font-bold'>{talent.mbti}</p>
            </div>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>Experience</p>
              <p className='text-3xl font-bold'>{talent.experience} Years</p>
            </div>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>Education</p>
              <div>
                <p className='text-3xl font-bold'>{talent.lastEducation}</p>
                <p className='text-gray-500 text-xl'>
                  {talent.startEducationYear} - {talent.endEducationYear}
                </p>
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-gray-500 text-xl font-medium'>Skills</p>
            <div className='flex items-center gap-2'>
              <Badge
                size='sm'
                variant='bordered'
                className='border-primary bg-primary-light'
                text='Interaction Design'
              />
              <Badge size='sm' variant='bordered' className='border-primary bg-primary-light' text='Figma' />
              <Badge size='sm' variant='bordered' className='border-primary bg-primary-light' text='User Research' />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white p-10 rounded shadow-md mt-10'>
        <div className='flex items-center justify-between'>
          <p className='text-primary font-bold text-xl inline-flex items-center gap-6'>
            <RiBriefcaseFill />
            Related Projects
          </p>
          <p className='text-primary font-bold text-xl'>Finished Projects: {talent.projects.length}</p>
          <div className='inline-flex gap-2'>
            <Button variant='bordered'>
              <AiOutlinePlus size={20} />
              Add New Related Project
            </Button>
            <Link href={`/dashboard/talents/${id}/projects/edit`}>
              <Button variant='default' className='bg-transparent border-2 border-gray-200 hover:bg-gray-100'>
                <BiEdit size={20} />
                Edit
              </Button>
            </Link>
          </div>
        </div>
        <div className='mt-10 space-y-5'>
          {talent.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              periodStart={project.startDate}
              periodEnd={project.endDate}
              role={project.role}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
