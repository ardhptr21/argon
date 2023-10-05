import Link from 'next/link';
import TalentCard from '../molecules/card/TalentCard';

export default function LatestTalent() {
  return (
    <>
      <div className='flex items-end justify-between'>
        <h2 className='font-bold text-3xl'>Latest Talend Added</h2>
        <Link href='#' className='text-blue underline text-xl font-bold'>
          More
        </Link>
      </div>
      <div className='mt-4 grid grid-cols-4 gap-20'>
        <TalentCard name='Rizal Muttaqin' role='Front End' dateAdded='12 Jul 23' />
        <TalentCard name='Rizal Muttaqin' role='Front End' dateAdded='12 Jul 23' />
        <TalentCard name='Rizal Muttaqin' role='Front End' dateAdded='12 Jul 23' />
        <TalentCard name='Rizal Muttaqin' role='Front End' dateAdded='12 Jul 23' />
      </div>
    </>
  );
}
