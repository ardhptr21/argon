import clsx from 'clsx';

const sizeVariant = {
  sm: 'text-sm py-2 px-4',
  lg: 'px-6 py-4',
};

const typeVariant = {
  bordered: 'border-2',
};

interface IProps {
  className?: string;
  text: string;
  size?: keyof typeof sizeVariant;
  variant?: keyof typeof typeVariant;
}

export default function Badge({ className, text, size, variant }: IProps) {
  return (
    <div
      className={clsx([
        'font-bold max-w-max shadow-gray-400 shadow-md rounded-full',
        sizeVariant[size || 'sm'],
        variant && typeVariant[variant],
        className,
      ])}
    >
      <p>{text}</p>
    </div>
  );
}
