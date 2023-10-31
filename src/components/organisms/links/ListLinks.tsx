import Table from '@/components/molecules/table/Table';
import TableItem from '@/components/molecules/table/TableItem';
import TableRow from '@/components/molecules/table/TableRow';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function ListLinks() {
  return (
    <section className='mt-6'>
      <Table>
        <tbody>
          <TableRow variant='stacked'>
            <TableItem>
              <a href='' target='_blank' className='text-xl underline text-blue font-semibold'>
                azuralabs.id/z23sc11
              </a>
            </TableItem>
            <TableItem>
              <p className='font-semibold text-gray-400'>Start Date of link</p>
              <p className='font-medium text-gray-400'>11 May 23</p>
            </TableItem>
            <TableItem>
              <p className='font-semibold text-gray-400'>End Date of link</p>
              <p className='font-medium text-gray-400'>11 Jul 23</p>
            </TableItem>
            <TableItem>
              <Link href='#' className='rounded-full bg-blue-200 p-2 hover:bg-blue-300 inline-block'>
                <RiArrowRightSLine />
              </Link>
            </TableItem>
          </TableRow>
        </tbody>
      </Table>
    </section>
  );
}
