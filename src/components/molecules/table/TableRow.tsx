import clsx from 'clsx';
import { PropsWithChildren } from 'react';

const styleVariants = {
  bordered: 'border-2 border-gray-400',
  stacked: 'odd:bg-blue-light bg-white',
};

interface IProps extends PropsWithChildren {
  activeable?: boolean;
  isActive?: boolean;
  variant: keyof typeof styleVariants;
}

export default function TableRow({ children, activeable, isActive, variant }: IProps) {
  return (
    <tr
      className={clsx([
        'relative z-10',
        styleVariants[variant],
        {
          "before:content-[''] before:absolute before:inset-0 before:bg-blue-light before:border-2 before:border-primary before:-z-10":
            activeable && isActive && variant !== 'stacked',
        },
      ])}
    >
      {children}
    </tr>
  );
}
