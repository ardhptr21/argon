interface IProps {
  name: string;
  role: string;
  dateAdded: string;
}

export default function TalentCard({ name, role, dateAdded }: IProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-11 bg-blue-light rounded shadow-md'>
      <div className='flex flex-col items-center'>
        <div className='w-28 h-28 rounded-full bg-gray-200'></div>
        <h4 className='text-sm rounded-2xl py-2 px-4 bg-tertiary-light font-bold -mt-8'>{role}</h4>
      </div>
      <h2 className='font-bold text-xl'>{name}</h2>
      <div className='text-center'>
        <p className='font-bold text-gray-500'>Date Added</p>
        <p className='text-sm text-gray-400 font-medium'>{dateAdded}</p>
      </div>
    </div>
  );
}
