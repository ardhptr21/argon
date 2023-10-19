import Button from '@/components/atoms/Button';
import FilterFormTalent from '@/components/organisms/talents/FilterFormTalent';
import ListTalents from '@/components/organisms/talents/ListTalents';
import Link from 'next/link';
import { AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

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
      <FilterFormTalent />
      <ListTalents />
    </>
  );
}
