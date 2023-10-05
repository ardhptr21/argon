import Button from '@/components/atoms/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiBriefcaseFill } from 'react-icons/ri';

export default function AddTalentProject() {
  return (
    <section className='mt-10 p-5 rounded shadow-md bg-white'>
      <h2 className='text-gray-500 font-bold text-xl inline-flex items-center gap-6'>
        <RiBriefcaseFill />
        Related Projects
      </h2>
      <div className='p-3 flex justify-center items-center flex-col gap-4'>
        <RiBriefcaseFill className='text-gray-200' size={127} />
        <p className='text-gray-500 font-bold max-w-xs text-center'>
          No related project has been added, to add, click the button below
        </p>
        <Button>
          <AiOutlinePlus size={20} />
          Add New Related Projects
        </Button>
      </div>
    </section>
  );
}
