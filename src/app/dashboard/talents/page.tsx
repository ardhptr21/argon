import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import TalentCard from '@/components/molecules/card/TalentCard';
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { RiFilter2Fill } from 'react-icons/ri';

export default function page() {
  return (
    <>
      <section className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>
          <BsPeople size={40} />
          List of Talent
        </h1>
        <div className='inline-flex items-center gap-2'>
          <Link href='/dashboard/talents/add'>
            <Button variant='bordered'>
              <AiOutlinePlus size={20} />
              Add Talent
            </Button>
          </Link>
          <Button>
            <AiOutlineUnorderedList size={20} />
            Create New List
          </Button>
        </div>
      </section>
      <section className='mt-7 flex justify-between items-center'>
        <div className='flex gap-2'>
          <Input left={<BiSearch size={25} className='text-gray-500' />} placeholder='Search name talent' />
          <Button variant='bordered'>Search</Button>
        </div>
        <Button variant='default'>
          <RiFilter2Fill size={20} />
          Filter
        </Button>
      </section>
      <section className='grid grid-cols-5 gap-7 mt-14'>
        {Array.from({ length: 15 }).map((_, i) => (
          <TalentCard key={i} name='Rizal Muttaqin' role='Front End' dateAdded='12 Jul 13' />
        ))}
      </section>
    </>
  );
}
