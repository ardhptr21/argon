'use client';

import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { RiFilter2Fill } from 'react-icons/ri';

export default function FilterFormTalent() {
  const params = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState<string>(params.get('search') || '');

  const handleClick = () => {
    const newParams = new URLSearchParams(params);
    newParams.set('search', search);
    router.push('/dashboard/talents?' + newParams.toString());
  };

  return (
    <section className='mt-7 flex justify-between items-center'>
      <div className='flex gap-2'>
        <Input
          left={<BiSearch size={25} className='text-gray-500' />}
          placeholder='Search name talent'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant='bordered' onClick={handleClick}>
          Search
        </Button>
      </div>
      <Button variant='default'>
        <RiFilter2Fill size={20} />
        Filter
      </Button>
    </section>
  );
}
