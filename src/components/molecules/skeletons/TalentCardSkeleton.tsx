import Skeleton from '@/components/atoms/Skeleton';

export default function TalentCardSkeleton() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-blue-light rounded shadow-md p-11 gap-4'>
      <div className='flex flex-col justify-center items-center'>
        <Skeleton className='w-28 h-28 rounded-full bg-gray-500' />
      </div>
      <Skeleton className='w-full h-8 rounded-md bg-gray-300' />
      <div className='space-y-1 flex flex-col justify-center items-center w-full'>
        <Skeleton className='w-1/2 h-4 rounded-md' />
        <Skeleton className='w-1/3 h-4 rounded-md' />
      </div>
    </div>
  );
}
