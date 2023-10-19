'use client';

import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

const typeVariant = {
  filled: 'bg-white',
  transparent: 'bg-transparent',
};

const sizeVariant = {
  sm: 'py-2 px-3',
  base: 'py-4 px-5',
};

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  left?: ReactNode;
  variant?: keyof typeof typeVariant;
  size?: keyof typeof sizeVariant;
  isError?: boolean;
  error?: string;
}

function Input({ className, label, left, variant, size, isError, error, ...props }: IProps, ref: any) {
  return (
    <div className='flex flex-col gap-1' ref={ref}>
      {label && <p className='font-semibold'>{label}</p>}
      <div
        className={clsx([
          'group flex items-center gap-3 border-2 rounded focus-within:border-primary',
          typeVariant[variant || 'filled'],
          sizeVariant[size || 'base'],
          { 'border-gray-300': !isError },
          { 'border-red-500': isError },
          className,
        ])}
      >
        {left && left}
        <input
          type='text'
          className='outline-none font-semibold text-gray-500 placeholder:font-semibold placeholder:tracking-wide bg-transparent w-full'
          {...props}
        />
      </div>
      {isError && <small className='text-red-500'>{error}</small>}
    </div>
  );
}

export default forwardRef(Input);
