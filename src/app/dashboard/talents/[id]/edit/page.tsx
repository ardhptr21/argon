import EditTalentForm from '@/components/organisms/talents/EditTalentForm';
import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

interface IProps {
  params: {
    id: string;
  };
}

const getTalent = async (id: string) => {
  const talent = await db.talent.findFirst({ where: { id } });

  if (!talent) throw notFound();

  return talent;
};

export default async function EditTalent({ params: { id } }: IProps) {
  const talent = await getTalent(id);

  return (
    <div>
      <EditTalentForm talent={talent} />
    </div>
  );
}
