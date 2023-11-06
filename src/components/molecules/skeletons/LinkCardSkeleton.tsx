import Skeleton from '@/components/atoms/Skeleton';

export default function LinkCardSkeleton() {
  return (
    <div className='bg-white shadow-md p-5 rounded'>
      <Skeleton className='w-40 h-3 rounded' />
      <div className='flex items-center justify-between mt-2'>
        <Skeleton className='w-36 h-4 rounded' />
        <Skeleton className='w-36 h-3 rounded' />
      </div>
    </div>
  );
}
