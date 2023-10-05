import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

const typeVariant = {
  filled: 'bg-white',
  transparent: 'bg-transparent',
};

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  left?: ReactNode;
  variant?: keyof typeof typeVariant;
}

export default function Input({ className, label, left, variant, ...props }: IProps) {
  return (
    <div className='flex flex-col gap-1'>
      {label && <p className='font-semibold'>{label}</p>}
      <div
        className={clsx([
          'group flex items-center gap-3 border-2 border-gray-300 rounded py-4 px-5 focus-within:border-primary',
          typeVariant[variant || 'filled'],
          className,
        ])}
      >
        {left && left}
        <input
          type='text'
          className='outline-none font-bold text-gray-500 placeholder:font-bold placeholder:tracking-wide bg-transparent w-full'
          {...props}
        />
      </div>
    </div>
  );
}
