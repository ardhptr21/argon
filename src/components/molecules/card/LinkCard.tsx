interface IProps {
  title: string;
  link: string;
  endDate: string;
}

export default function LinkCard({ title, link, endDate }: IProps) {
  return (
    <div className='bg-white shadow-md p-5 rounded'>
      <a href={link} className='text-blue underline font-bold'>
        {title}
      </a>
      <div className='flex items-center justify-between'>
        <p className='font-bold'>End Date of Link :</p>
        <p className='text-gray-400 font-bold'>{endDate}</p>
      </div>
    </div>
  );
}
