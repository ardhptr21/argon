import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import ProjectCard from '@/components/molecules/card/ProjectCard';
import { BiEdit } from 'react-icons/bi';
import { RiBriefcaseFill } from 'react-icons/ri';

export default function page() {
  return (
    <>
      <section className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Detail Talent</h1>
        <Button variant='bordered'>
          <BiEdit size={20} />
          Edit
        </Button>
      </section>
      <section className='bg-white p-10 rounded shadow-md flex items-center gap-10 mt-14'>
        <div className='flex flex-col items-center'>
          <div className='w-80 h-80 rounded-full bg-gray-200'></div>
          <Badge text='Front End' size='lg' className='bg-primary text-white px-12 -mt-8' />
        </div>
        <div className='space-y-10'>
          <h1 className='font-bold text-5xl'>Arifatul Khasanah</h1>
          <div className='flex items-center gap-16'>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>MBTI</p>
              <p className='text-3xl font-bold'>ENFJ</p>
            </div>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>Experience</p>
              <p className='text-3xl font-bold'>7 Years</p>
            </div>
            <div className='space-y-2'>
              <p className='text-gray-500 text-xl font-medium'>Education</p>
              <div>
                <p className='text-3xl font-bold'>Universitas Negeri Semarang</p>
                <p className='text-gray-500 text-xl'>2017 - 2021</p>
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
          <p className='text-primary font-bold text-xl'>Finished Projects: 5</p>
        </div>
        <div className='mt-10 space-y-5'>
          <ProjectCard
            title='Alkindikids'
            period='2022 - Present'
            role='Front End'
            description='Tanta petere igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad cetera munera. Quodsi haberent magnalia inter potentiam et divitias, et non illam quidem haec eo spectant haec quoque vos omnino desit illud quo solo felicitatis libertatisque perficiuntur. Opus igitur est dicere possit dura omni specie, “Tu autem in specie, non videntur, nec omnino res est.”'
          />
          <ProjectCard
            title='RSIGM - Unisula'
            period='2020 - 2023'
            role='Fullstack'
            description='Lorem ipsum dolor sit amet consectetur. Egestas diam aenean ut netus. Posuere tincidunt purus volutpat amet quisque netus proin. Platea mi est ac cras eu non sed porttitor. Pulvinar pharetra nunc sed posuere ultrices lorem id scelerisque. Arcu nulla et ac hendrerit sed velit in diam. Morbi tortor fringilla cras feugiat sapien consequat in. Faucibus magna felis sed vestibulum ultricies lorem congue maecenas. At ac maecenas lorem est erat odio in rhoncus vitae. Viverra sit sed auctor proin consequat nisi. Viverra sit diam ultricies nisi nisl adipiscing amet venenatis.
            Aliquet a mattis in id quam dui dictumst nunc. Adipiscing nec vel turpis suspendisse neque tortor. Phasellus sit mauris.'
          />
        </div>
      </section>
    </>
  );
}
