'use client';

import { listTalentsApi } from '@/apis/talentApis';
import Pagination from '@/components/atoms/Pagination';
import TalentCard from '@/components/molecules/card/TalentCard';
import TalentCardSkeleton from '@/components/molecules/skeletons/TalentCardSkeleton';
import { Talent } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export default function ListTalents() {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;

  const { data: talents, isPending } = useQuery({
    queryKey: ['list-talents', search, page],
    queryFn: () => listTalentsApi({ search, page, limit: 20 }),
  });

  return (
    <section>
      <div className='grid grid-cols-5 gap-7 mt-14'>
        {isPending
          ? Array.from({ length: 10 }).map((_, index) => <TalentCardSkeleton key={index} />)
          : talents?.data?.map((talent: Talent) => (
              <TalentCard
                key={talent.id}
                name={talent.name}
                role={talent.role}
                avatar={talent.avatar}
                dateAdded={talent.createdAt}
              />
            ))}
      </div>
      {!isPending && (
        <div className='flex justify-end items-center mt-10'>
          {talents?.meta?.totalPages > 1 && (
            <Pagination
              total={talents.meta.totalPages}
              current={page}
              basePath='/dashboard/talents'
              withFirstAndLast={true}
            />
          )}
        </div>
      )}
    </section>
  );
}
