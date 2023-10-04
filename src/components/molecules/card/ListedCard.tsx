interface IProps {
  name: string;
  lastListed: string;
}

export default function ListedCard({ name, lastListed }: IProps) {
  return (
    <div className='flex justify-between items-center p-4 even:bg-list-item-odd rounded'>
      <div className='flex items-center gap-5'>
        <div className='w-11 h-11 bg-gray-200 rounded-full'></div>
        <h3 className='text-2xl'>{name}</h3>
      </div>
      <div>
        <p className='text-gray-400'>Last listed</p>
        <p>{lastListed}</p>
      </div>
    </div>
  );
}
