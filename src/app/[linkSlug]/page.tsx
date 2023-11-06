import ShowTalentCard from '@/components/molecules/card/ShowTalentCard';
import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    linkSlug: string;
  };
}

export const getLink = async (linkSlug: string) => {
  const link = await db.link.findFirst({
    where: { slug: linkSlug },
    include: {
      talents: {
        select: {
          id: true,
          name: true,
          avatar: true,
          role: true,
          _count: {
            select: { projects: true },
          },
        },
      },
    },
  });

  if (!link) throw notFound();

  return link;
};

export default async function ShowLink({ params: { linkSlug } }: IProps) {
  const link = await getLink(linkSlug);

  return (
    <section className='bg-[url(/images/background/v2.jpg)] bg-no-repeat bg-cover bg-bottom h-screen w-screen px-20 py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='rounded-md p-4 border-4 border-primary backdrop-blur-2xl text-center text-white'>
          <h1 className='text-4xl font-bold mb-5'>Meet our Exceptional Software Sailors</h1>
          <p className='text-2xl'>
            Embark on a software journey with our exceptional team of Software Sailors. They navigate coding’s vast
            seas, crafting cutting edge solutions and conquering challenges. Join them in the world of software
            excellence.
          </p>
        </div>
        <div className='grid grid-cols-4 mt-10 w-5/6 mx-auto gap-12'>
          {link.talents.map((talent) => (
            <ShowTalentCard
              key={talent.id}
              avatar={talent.avatar}
              name={talent.name}
              role={talent.role}
              totalProjects={talent._count.projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
