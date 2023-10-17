import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import Textarea from '@/components/atoms/form/Textarea';
import * as Dialog from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai';
import { IoImageOutline } from 'react-icons/io5';

interface IProps extends Dialog.DialogProps {}

export default function ModalProject(props: IProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.DialogPortal>
        <Dialog.Overlay className='inset-0 bg-black bg-opacity-30 fixed' />
        <Dialog.DialogContent className='fixed outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-20 bg-white rounded space-y-4'>
          <div className='flex items-end justify-between mb-10'>
            <Dialog.DialogTitle className='font-semibold text-2xl'>Choose Avatar</Dialog.DialogTitle>
            <Dialog.DialogClose>
              <AiOutlineClose size={24} className='font-bold' />
            </Dialog.DialogClose>
          </div>
          <div className='flex gap-7'>
            <div className='flex items-center justify-center flex-col gap-1'>
              <div className='w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-400'>
                <IoImageOutline size={75} />
              </div>
              <p className='font-semibold mx-auto text-center text-gray-400'>
                Tap to insert <br /> picture
              </p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <Input size='sm' label='Project Name' />
              <Input size='sm' label='Role' />
              <Input type='date' size='sm' label='Start Month' />
              <Input type='date' size='sm' label='End Month' />
            </div>
          </div>
          <Textarea label='Task Description' rows={8} />
          <Button className='ml-auto px-12'>Submit</Button>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}