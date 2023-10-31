import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  bordered?: boolean;
  className?: string;
}

export default function Table({ children, bordered, className }: IProps) {
  return (
    <div className={clsx(['rounded overflow-hidden', { 'border-2 border-gray-400': bordered }, className])}>
      <table className='table border-collapse w-full'>{children}</table>
    </div>
  );
}
