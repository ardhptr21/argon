import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
}

export default function Skeleton({ children, className }: IProps) {
  return <div className={clsx(['bg-gray-200 animate-pulse', className])}>{children}</div>;
}
