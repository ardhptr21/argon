import Badge from '@/components/atoms/Badge';
import clsx from 'clsx';
import { format } from 'date-fns';

const sizeVariant = {
  base: {
    title: 'text-base',
    period: 'text-sm',
    role: 'sm',
  },
  lg: {
    title: 'text-2xl',
    period: 'text-xl',
    role: 'lg',
  },
};

interface IProps {
  title: string;
  periodStart: Date;
  periodEnd?: Date | null;
  role: string;
  description: string;
  withSideLine?: boolean;
  size?: keyof typeof sizeVariant;
}

export default function ProjectCard({
  title,
  periodStart,
  periodEnd,
  role,
  description,
  withSideLine = true,
  size = 'lg',
}: IProps) {
  return (
    <div className={clsx([{ 'space-y-5': size === 'lg' }, { 'space-y-3': size === 'base' }])}>
      <div className='w-full flex flex-row items-end justify-between'>
        <div className='flex items-center gap-6'>
          <div className='w-16 h-16 shadow-md rounded-full'></div>
          <div>
            <h4 className={`${sizeVariant[size].title} font-medium text-gray-600`}>{title}</h4>
            <p className={`${sizeVariant[size].period} text-gray-400`}>
              <span>
                {format(new Date(periodStart), 'yyyy')} - {periodEnd ? format(new Date(periodEnd), 'yyyy') : 'Present'}
              </span>
            </p>
          </div>
        </div>
        <Badge size={sizeVariant[size].role as any} className='bg-primary text-white px-12 py-3' text={role} />
      </div>
      <div className='flex items-stretch justify-center gap-14 relative pb-6'>
        {withSideLine && (
          <div className='flex flex-col items-center justify-between gap-2 absolute left-6 top-0 bottom-0'>
            <div className='bg-primary h-3 w-3 rounded-full'></div>
            <div className='px-[1px] flex-grow bg-primary'></div>
            <div className='bg-primary h-3 w-3 rounded-full'></div>
          </div>
        )}
        <p className='inline-block ml-[5.5rem] text-xl w-full'>{description}</p>
      </div>
    </div>
  );
}
