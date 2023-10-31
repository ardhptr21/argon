import Skeleton from '@/components/atoms/Skeleton';

export default function LinkTableItemSkeleton() {
  return (
    <div className='w-full h-20 bg-gray-100 odd:bg-gray-300 flex items-center justify-between px-5 py-4'>
      <Skeleton className='w-96 h-5' />
      <div className='space-y-2'>
        <Skeleton className='w-36 h-3' />
        <Skeleton className='w-28 h-3' />
      </div>

      <div className='space-y-2'>
        <Skeleton className='w-36 h-3' />
        <Skeleton className='w-28 h-3' />
      </div>
      <Skeleton className='w-10 h-10 rounded-full mr-28' />
    </div>
  );
}
