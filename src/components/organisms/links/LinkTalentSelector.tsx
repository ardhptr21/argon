'use client';

import Badge from '@/components/atoms/Badge';
import Table from '@/components/molecules/table/Table';
import TableItem from '@/components/molecules/table/TableItem';
import TableRow from '@/components/molecules/table/TableRow';
import { Talent } from '@prisma/client';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';

interface IProps {
  talents: Talent[];
  show?: boolean;
  onChangeShow?: (_show: boolean) => void;
  selectedTalents: Talent[];
  onSelect?: (_selected: Talent) => void;
  onUnselect?: (_selected: Talent) => void;
}

export default function LinkTalentSelector({
  talents,
  show,
  onChangeShow,
  selectedTalents,
  onSelect,
  onUnselect,
}: IProps) {
  const filteredTalents = talents.filter((talent) => !selectedTalents.find((selected) => selected.id === talent.id));

  const handleChange = (talent: Talent) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onSelect && onSelect(talent);
    } else {
      onUnselect && onUnselect(talent);
    }
  };

  return (
    <section
      className={clsx([
        'absolute left-0 right-0 bottom-0 h-4/5 border-t-2 border-gray-300 z-20 bg-white transition duration-300 p-10',
        { 'translate-y-[100vh]': !show },
      ])}
    >
      <div>
        <button
          className='rounded-full p-4 border-2 border-primary text-primary shadow-md'
          onClick={() => (onChangeShow ? onChangeShow(false) : null)}
        >
          <HiOutlineArrowLeft size={24} />
        </button>
      </div>
      <div className='mt-7'>
        <Table>
          <tbody>
            {selectedTalents.map((selectedTalent) => (
              <TableRow variant='bordered' key={selectedTalent.id} isActive activeable>
                <TableItem>
                  <input type='checkbox' className='scale-150' checked={true} onChange={handleChange(selectedTalent)} />
                </TableItem>
                <TableItem className='inline-flex gap-5 items-center'>
                  <div className='w-11 h-11 rounded-full bg-gray-200 relative overflow-hidden'>
                    <Image src={selectedTalent.avatar} alt={selectedTalent.name} fill={true} priority sizes='100%' />
                  </div>
                  <span className='text-xl font-semibold'>{selectedTalent.name}</span>
                </TableItem>
                <TableItem>
                  <Badge text={selectedTalent.role} size='sm' className='bg-purple-300' />
                </TableItem>
              </TableRow>
            ))}
            {filteredTalents.map((talent) => (
              <TableRow variant='bordered' key={talent.id}>
                <TableItem>
                  <input type='checkbox' className='scale-150' onChange={handleChange(talent)} />
                </TableItem>
                <TableItem className='inline-flex gap-5 items-center'>
                  <div className='w-11 h-11 rounded-full bg-gray-200 relative overflow-hidden'>
                    <Image src={talent.avatar} alt={talent.name} fill={true} priority sizes='100%' />
                  </div>
                  <span className='text-xl font-semibold'>{talent.name}</span>
                </TableItem>
                <TableItem>
                  <Badge text={talent.role} size='sm' className='bg-purple-300' />
                </TableItem>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}
