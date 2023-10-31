import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
}

export default function TableItem({ children, className }: IProps) {
  return <td className={clsx(['px-5 py-4', className])}>{children}</td>;
}
