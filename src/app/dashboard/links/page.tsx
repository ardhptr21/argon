import Button from '@/components/atoms/Button';
import FilterFormLink from '@/components/organisms/links/FilterFormLink';
import ListLinks from '@/components/organisms/links/ListLinks';
import Link from 'next/link';
import { AiOutlineLink, AiOutlinePlus } from 'react-icons/ai';

export default function LinkPage() {
  return (
    <>
      <section className='flex items-center justify-between'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>
          <AiOutlineLink size={40} />
          List of Links
        </h1>
        <div className='inline-flex items-center gap-2'>
          <Link href='/dashboard/links/add'>
            <Button variant='bordered'>
              <AiOutlinePlus size={20} />
              Create New Link
            </Button>
          </Link>
        </div>
      </section>
      <FilterFormLink />
      <ListLinks />
    </>
  );
}
