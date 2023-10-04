import Link from 'next/link';
import React from 'react';
import LinkCard from '../molecules/card/LinkCard';

export default function LatestLink() {
  return (
    <div className='w-5/12'>
      <div className='flex items-end justify-between'>
        <h2 className='font-bold text-3xl'>Latest Link</h2>
        <Link href='#' className='text-blue underline text-xl font-bold'>
          More
        </Link>
      </div>
      <div className='mt-3 space-y-2'>
        <LinkCard title='azuralabs.id/z23sc11' link='https://google.com' endDate='11 Jul 23' />
        <LinkCard title='azuralabs.id/z23sc11' link='https://google.com' endDate='11 Jul 23' />
        <LinkCard title='azuralabs.id/z23sc11' link='https://google.com' endDate='11 Jul 23' />
        <LinkCard title='azuralabs.id/z23sc11' link='https://google.com' endDate='11 Jul 23' />
        <LinkCard title='azuralabs.id/z23sc11' link='https://google.com' endDate='11 Jul 23' />
      </div>
    </div>
  );
}
