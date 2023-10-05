import Badge from '@/components/atoms/Badge';

interface IProps {
  title: string;
  period: string;
  role: string;
  description: string;
}

export default function ProjectCard({ title, period, role, description }: IProps) {
  return (
    <div className='space-y-5'>
      <div className='w-full flex flex-row items-end justify-between'>
        <div className='flex items-center gap-6'>
          <div className='w-16 h-16 shadow-md rounded-full'></div>
          <div>
            <h4 className='text-2xl font-medium text-gray-600'>{title}</h4>
            <p className='text-xl text-gray-400'>{period}</p>
          </div>
        </div>
        <Badge size='lg' className='bg-primary text-white px-12 py-3' text={role} />
      </div>
      <div className='flex items-stretch justify-center gap-14 relative'>
        <div className='flex flex-col items-center justify-between gap-2 absolute left-6 top-0 bottom-0'>
          <div className='bg-primary h-3 w-3 rounded-full'></div>
          <div className='px-[1px] flex-grow bg-primary'></div>
          <div className='bg-primary h-3 w-3 rounded-full'></div>
        </div>
        <p className='inline-block ml-[5.5rem]'>{description}</p>
      </div>
    </div>
  );
}
