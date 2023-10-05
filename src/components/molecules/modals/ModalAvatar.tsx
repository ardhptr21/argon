import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface IProps extends Dialog.DialogProps {
  // eslint-disable-next-line no-unused-vars
  onValueChange?: (value: string) => any;
  defaultValue?: string;
}

export default function ModalAvatar({ onValueChange, defaultValue, ...props }: IProps) {
  const avatarsData = [
    { path: '/images/avatars/men.png', title: 'Men' },
    { path: '/images/avatars/women-no-hijab.png', title: 'Women' },
    { path: '/images/avatars/women-with-hijab.png', title: 'Women with Veil' },
  ];

  const [value, setValue] = useState<string | null>(defaultValue || null);

  const handleChange = (value: string) => {
    setValue(value);
    onValueChange && onValueChange(value);
  };

  return (
    <Dialog.Root {...props}>
      <Dialog.DialogPortal>
        <Dialog.Overlay className='inset-0 bg-black bg-opacity-30 fixed' />
        <Dialog.DialogContent className='fixed outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-20 bg-white rounded'>
          <div className='flex items-end justify-between'>
            <Dialog.DialogTitle className='font-semibold text-2xl'>Choose Avatar</Dialog.DialogTitle>
            <Dialog.DialogClose>
              <AiOutlineClose size={24} className='font-bold' />
            </Dialog.DialogClose>
          </div>
          <div className='flex items-center gap-10 mt-10'>
            {avatarsData.map((avatar) => (
              <div key={avatar.path} className='text-center space-y-6'>
                <button className='cursor-pointer' onClick={() => handleChange(avatar.path)}>
                  <Image
                    src={avatar.path}
                    width={236}
                    height={236}
                    alt={avatar.title}
                    className={clsx([
                      'rounded-full bg-gray-200',
                      { 'border border-primary shadow-md shadow-primary': value === avatar.path },
                    ])}
                  />
                </button>
                <p className='text-2xl'>{avatar.title}</p>
              </div>
            ))}
          </div>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
