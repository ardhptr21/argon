import { AiOutlineDashboard } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import SidenavItem from '../atoms/sidenav/SidenavItem';

export default function Sidenav() {
  return (
    <aside className='h-screen max-w-max bg-blue-light flex flex-col justify-between py-12 px-7'>
      <div className='flex flex-col gap-4'>
        <SidenavItem href='#' active icon={AiOutlineDashboard} />
        <SidenavItem href='#' icon={BsPeople} />
      </div>
      <div>
        <button className='h-12 w-12 bg-red-500 rounded-full shadow-slate-400 shadow-md flex items-center justify-center text-white'>
          <BiLogOutCircle size={24} />
        </button>
      </div>
    </aside>
  );
}