import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const variantStyle = {
  bordered: 'border-2 border-primary text-primary hover:bg-primary-light',
  primary: 'bg-primary text-white hover:bg-primary-deep',
  default: 'bg-gray-200 text-gray-500 hover:bg-gray-300',
};

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: keyof typeof variantStyle;
}

export default function Button({ children, variant, ...props }: IProps) {
  return (
    <button
      {...props}
      className={clsx([
        'flex items-center justify-center gap-2 py-4 px-8 rounded font-medium duration-150',
        variantStyle[variant ?? 'primary'],
      ])}
    >
      {children}
    </button>
  );
}
