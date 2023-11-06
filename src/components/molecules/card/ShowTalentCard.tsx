import Badge from '@/components/atoms/Badge';
import Image from 'next/image';

interface IProps {
  avatar: string;
  name: string;
  role: string;
  totalProjects: number;
}

export default function ShowTalentCard({ avatar, name, role, totalProjects }: IProps) {
  return (
    <div className='bg-white rounded shadow-lg p-3'>
      <div className='aspect-[4/3] rounded relative p-10 overflow-hidden bg-gray-200'>
        <Image src={avatar} alt={name} fill={true} className='object-contain' />
        <div className='w-full absolute left-0 right-0 bottom-0 p-3'>
          <Badge text={role} className='bg-tertiary-light text-center mx-auto' size='sm' />
        </div>
      </div>
      <div className='text-center space-y-1 mt-5'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <div>
          <p className='font-medium text-gray-900'>Projects Cleared</p>
          <p className='text-sm'>{totalProjects} Projects</p>
        </div>
      </div>
    </div>
  );
}
