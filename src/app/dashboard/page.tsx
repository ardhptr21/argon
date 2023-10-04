import FrequentlyList from '@/components/organisms/FrequentlyList';
import LatestLink from '@/components/organisms/LatestLink';
import LatestTalent from '@/components/organisms/LatestTalent';
import { AiFillDashboard } from 'react-icons/ai';

export default function page() {
  return (
    <>
      <section>
        <h1 className='font-bold text-3xl inline-flex items-center gap-1'>
          <AiFillDashboard size={40} />
          Argon{"'"}s Dashboard
        </h1>
      </section>
      <section className='mt-20 flex items-start gap-16'>
        <FrequentlyList />
        <LatestLink />
      </section>
      <section className='mt-5'>
        <LatestTalent />
      </section>
    </>
  );
}
