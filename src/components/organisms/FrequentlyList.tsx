import { AiOutlineUnorderedList } from 'react-icons/ai';
import ListedCard from '../molecules/card/ListedCard';

export default function FrequentlyList() {
  return (
    <div className='bg-white p-10 shadow-md rounded w-7/12'>
      <h2 className='font-bold text-3xl inline-flex items-center gap-6'>
        <AiOutlineUnorderedList size={40} className='text-gray-400' />
        Most Frequently Listed
      </h2>
      <div className='mt-5'>
        <ListedCard name='Khoerul Umam' lastListed='11 Jul 2023' />
        <ListedCard name='Khoerul Umam' lastListed='11 Jul 2023' />
        <ListedCard name='Khoerul Umam' lastListed='11 Jul 2023' />
        <ListedCard name='Khoerul Umam' lastListed='11 Jul 2023' />
        <ListedCard name='Khoerul Umam' lastListed='11 Jul 2023' />
      </div>
    </div>
  );
}
