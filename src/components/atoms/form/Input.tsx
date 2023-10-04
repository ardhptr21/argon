import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  left?: ReactNode;
}

export default function Input({ className, left, ...props }: IProps) {
  return (
    <div
      className={clsx([
        'group flex items-center gap-3 border-2 border-gray-300 rounded py-4 px-5 w-max focus-within:border-primary',
        className,
      ])}
    >
      {left && left}
      <input
        type='text'
        className='outline-none font-bold text-gray-500 placeholder:font-bold placeholder:tracking-wide bg-transparent'
        {...props}
      />
    </div>
  );
}
