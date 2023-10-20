'use client';

import { listTalentsApi } from '@/apis/talentApis';
import { Talent } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import TalentCard from '../molecules/card/TalentCard';
import TalentCardSkeleton from '../molecules/skeletons/TalentCardSkeleton';

export default function LatestTalent() {
  const { data: talents, isPending } = useQuery({
    queryKey: ['list-talents-latest'],
    queryFn: () => listTalentsApi({ limit: 4 }),
  });
  return (
    <>
      <div className='flex items-end justify-between'>
        <h2 className='font-bold text-3xl'>Latest Talend Added</h2>
        <Link href='#' className='text-blue underline text-xl font-bold'>
          More
        </Link>
      </div>
      <div className='mt-4 grid grid-cols-4 gap-20'>
        {isPending
          ? Array.from({ length: 4 }).map((_, index) => <TalentCardSkeleton key={index} />)
          : talents?.data?.map((talent: Talent) => (
              <TalentCard
                key={talent.id}
                {...talent}
                dateAdded={talent.createdAt}
                href={`/dashboard/talents/${talent.id}`}
              />
            ))}
      </div>
    </>
  );
}
