'use client';

import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { AiOutlineDashboard, AiOutlineLink } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import SidenavItem from '../atoms/sidenav/SidenavItem';

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <aside className='h-screen max-w-max bg-blue-light flex flex-col justify-between py-12 px-7'>
      <div className='flex flex-col gap-4'>
        <SidenavItem href='/dashboard' active={pathname === '/dashboard'} icon={AiOutlineDashboard} />
        <SidenavItem href='/dashboard/links' active={pathname.startsWith('/dashboard/links')} icon={AiOutlineLink} />
        <SidenavItem href='/dashboard/talents' active={pathname.startsWith('/dashboard/talents')} icon={BsPeople} />
      </div>
      <div>
        <button
          className='h-12 w-12 bg-red-500 rounded-full shadow-slate-400 shadow-md flex items-center justify-center text-white'
          onClick={() => signOut()}
        >
          <BiLogOutCircle size={24} />
        </button>
      </div>
    </aside>
  );
}
