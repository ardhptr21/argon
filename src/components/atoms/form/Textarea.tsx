import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

const typeVariant = {
  filled: 'bg-white',
  transparent: 'bg-transparent',
};

const sizeVariant = {
  sm: 'py-2 px-3',
  base: 'py-4 px-5',
};

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  variant?: keyof typeof typeVariant;
  size?: keyof typeof sizeVariant;
}

export default function Textarea({ label, className, variant, ...props }: IProps) {
  return (
    <div className='flex flex-col gap-1'>
      {label && <p className='font-semibold'>{label}</p>}
      <div
        className={clsx([
          'group flex items-center gap-3 border-2 border-gray-300 rounded focus-within:border-primary',
          typeVariant[variant || 'filled'],
          sizeVariant[props.size || 'base'],
          className,
        ])}
      >
        <textarea
          {...props}
          className='outline-none font-semibold text-gray-500 placeholder:font-semibold placeholder:tracking-wide bg-transparent w-full'
        />
      </div>
    </div>
  );
}
