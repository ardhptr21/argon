'use client';

import { listLinksApi } from '@/apis/linkApi';
import Pagination from '@/components/atoms/Pagination';
import LinkTableItemSkeleton from '@/components/molecules/skeletons/LinkTableItemSkeleton';
import Table from '@/components/molecules/table/Table';
import TableItem from '@/components/molecules/table/TableItem';
import TableRow from '@/components/molecules/table/TableRow';

import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function ListLinks() {
  const params = useSearchParams();
  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;

  const { data: links, isPending } = useQuery({
    queryKey: ['list-links', search, page],
    queryFn: () => listLinksApi({ search, page, limit: 20 }),
  });

  return (
    <section className='mt-6'>
      {isPending ? (
        <div>
          {Array.from({ length: 8 }).map((_, index) => (
            <LinkTableItemSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Table>
          <tbody>
            {links?.data?.map((link) => (
              <TableRow variant='stacked' key={link.id}>
                <TableItem>
                  <a
                    href={`https://azuralabs.id/${link.slug}`}
                    target='_blank'
                    className='text-xl underline text-blue font-semibold'
                  >
                    https://azuralabs.id/{link.slug}
                  </a>
                </TableItem>
                <TableItem>
                  <p className='font-semibold text-gray-400'>Start Date of link</p>
                  <p className='font-medium text-gray-400'>{format(new Date(link.startDate), 'dd MMM yyyy')}</p>
                </TableItem>
                <TableItem>
                  <p className='font-semibold text-gray-400'>End Date of link</p>
                  <p className='font-medium text-gray-400'>{format(new Date(link.endDate), 'dd MMM yyyy')}</p>
                </TableItem>
                <TableItem>
                  <Link href='#' className='rounded-full bg-blue-200 p-2 hover:bg-blue-300 inline-block'>
                    <RiArrowRightSLine />
                  </Link>
                </TableItem>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
      {!isPending && (
        <div className='flex justify-end items-center mt-10'>
          {links?.meta?.totalPages > 1 && (
            <Pagination
              total={links.meta.totalPages}
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
