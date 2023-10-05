'use client';

import Button from '@/components/atoms/Button';
import ModalProject from '@/components/molecules/modals/ModalProject';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiBriefcaseFill } from 'react-icons/ri';

export default function AddTalentProject() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <Button onClick={() => setModalOpen(true)}>
          <AiOutlinePlus size={20} />
          Add New Related Projects
        </Button>
      </div>
      <ModalProject open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
