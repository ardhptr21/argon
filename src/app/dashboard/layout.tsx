import Sidenav from '@/components/organisms/Sidenav';
import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className='flex'>
      <Sidenav />
      <main className='w-full overflow-y-auto max-h-screen min-h-screen p-12 bg-background'>{children}</main>
    </div>
  );
}
