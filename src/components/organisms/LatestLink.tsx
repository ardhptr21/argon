'use client';

import { listLinksApi } from '@/apis/linkApi';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Link from 'next/link';
import LinkCard from '../molecules/card/LinkCard';
import LinkCardSkeleton from '../molecules/skeletons/LinkCardSkeleton';

export default function LatestLink() {
  const { data: links, isPending } = useQuery({
    queryKey: ['links', { limit: 6 }],
    queryFn: () => listLinksApi({ limit: 6 }),
  });

  return (
    <div className='w-5/12'>
      <div className='flex items-end justify-between'>
        <h2 className='font-bold text-3xl'>Latest Link</h2>
        <Link href='#' className='text-blue underline text-xl font-bold'>
          More
        </Link>
      </div>
      <div className='mt-3 space-y-2'>
        {isPending
          ? Array.from({ length: 6 }).map((_, index) => <LinkCardSkeleton key={index} />)
          : links?.data?.map((link) => (
              <LinkCard
                key={link.id}
                title={`azuralabs.id/${link.slug}`}
                link={`/${link.slug}`}
                endDate={format(new Date(link.endDate), 'dd MMM yyyy')}
              />
            ))}
      </div>
    </div>
  );
}
