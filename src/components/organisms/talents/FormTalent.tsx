import Input from '@/components/atoms/form/Input';
import { ImCamera } from 'react-icons/im';

export default function FormTalent() {
  return (
    <section className='mt-10 flex items-center justify-center flex-col gap-4'>
      <div className='w-56 h-56 rounded-full p-14 bg-white text-gray-500 flex items-center justify-self-center flex-col gap-1'>
        <ImCamera size={76} />
        <p className='font-semibold text-center'>Choose an avatar</p>
      </div>
      <div className='w-full space-y-3'>
        <Input label='Talent Name' className='w-full' />
        <div className='grid grid-cols-2 gap-10'>
          <Input label='MBTI' className='w-full' />
          <Input type='number' label='Experience (years)' className='w-full' />
        </div>
        <Input label='Last education' className='w-full' />
        <div className='grid grid-cols-2 gap-10'>
          <Input type='date' label='Start year' className='w-full' />
          <Input type='date' label='End year' className='w-full' />
        </div>
      </div>
    </section>
  );
}
