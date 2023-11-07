import FormLogin from '@/components/organisms/FormLogin';
import { getServerAuthSession } from '@/lib/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerAuthSession();
  if (session) return redirect('/dashboard');

  return (
    <section className='grid grid-cols-2 h-screen'>
      <div className='p-12 flex justify-center items-center'>
        <FormLogin />
      </div>
      <div className='bg-gray-200 relative'>
        <Image
          src='/images/background/login.jpg'
          fill={true}
          sizes='100%'
          className='object-cover'
          alt='login cover'
          priority
        />
      </div>
    </section>
  );
}
