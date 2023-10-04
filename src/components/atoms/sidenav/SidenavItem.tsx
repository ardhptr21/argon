import { clsx } from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
  active?: boolean;
  href: string;
}

export default function SidenavItem({ icon: Icon, active, ...props }: IProps) {
  return (
    <Link
      {...props}
      className={clsx([
        'p-2 rounded-full h-12 w-12 flex items-center justify-center shadow-slate-500 shadow-lg border border-primary',
        {
          'bg-primary text-white': active,
          'bg-white text-primary': !active,
        },
      ])}
    >
      <Icon size={24} />
    </Link>
  );
}
