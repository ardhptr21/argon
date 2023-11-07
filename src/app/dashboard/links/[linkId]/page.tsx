import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Table from '@/components/molecules/table/Table';
import TableItem from '@/components/molecules/table/TableItem';
import TableRow from '@/components/molecules/table/TableRow';
import { db } from '@/lib/db';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RiArrowRightSLine } from 'react-icons/ri';

interface IProps {
  params: {
    linkId: string;
  };
}

export const getLink = async (id: string) => {
  const link = await db.link.findFirst({ where: { id }, include: { talents: true } });
  if (!link) throw notFound();
  return link;
};

export default async function DetailLink({ params: { linkId } }: IProps) {
  const link = await getLink(linkId);

  return (
    <>
      <section className='flex items-center justify-between mb-9'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>https://azuralabs.id/{link.slug}</h1>
        <div className='inline-flex items-center gap-2'>
          <Link href='/dashboard/links/edit'>
            <Button variant='primary'>Edit</Button>
          </Link>
        </div>
      </section>
      <section>
        <h2 className='text-xl font-semibold mb-5'>General Information</h2>
        <div className='space-y-20'>
          <div className='space-y-5'>
            <h3 className='font-semibold'>Link to share</h3>
            <div className='flex items-center gap-4'>
              <p className='text-xl'>https://azuralabs.id/{link.slug}</p>
              <button className='bg-tertiary-light text-sm rounded-full px-3'>Copy</button>
            </div>
          </div>
          <div className='flex justify-start gap-32'>
            <div className='space-y-1'>
              <h3 className='font-semibold'>Client Target</h3>
              <p className='text-xl'>{link.target}</p>
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>End of Duration</h3>
              <p className='text-xl'>
                {format(new Date(link.startDate), 'dd MMM yyyy HH:mm')} -{' '}
                {format(new Date(link.endDate), 'dd MMM yyyy HH:mm')}
              </p>
              <p className='text-gray-400 font-semibold text-sm'>This link will be inactive when the duration ended</p>
            </div>
          </div>
          <div className='space-y-1'>
            <h3 className='font-semibold'>Passcode</h3>
            <p className='text-xl'>{link.passcode}</p>
          </div>
        </div>
        <hr className='h-[2px] w-full bg-gray-300 my-6' />
        <Table>
          <tbody>
            {link.talents.map((talent) => (
              <TableRow variant='stacked' key={talent.id}>
                <TableItem className='inline-flex items-center gap-5'>
                  <div className='w-11 h-11 rounded-full bg-gray-200 relative overflow-hidden'>
                    <Image src={talent.avatar} alt={talent.name} fill={true} priority sizes='100%' />
                  </div>
                  <span className='text-xl font-semibold'>{talent.name}</span>
                </TableItem>
                <TableItem>
                  <Badge text={talent.role} size='sm' className='bg-purple-300' />
                </TableItem>
                <TableItem>
                  <Link
                    href={`/dashboard/talents/${talent.id}`}
                    className='rounded-full bg-blue-200 p-2 hover:bg-blue-300 inline-block'
                  >
                    <RiArrowRightSLine />
                  </Link>
                </TableItem>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
}
