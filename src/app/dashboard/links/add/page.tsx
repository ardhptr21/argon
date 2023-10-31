import AddLinkForm from '@/components/organisms/links/AddLinkForm';
import { db } from '@/lib/db';

export const getTalents = async () => {
  const talents = await db.talent.findMany();
  return talents;
};

export default async function AddLink() {
  const talents = await getTalents();

  return (
    <>
      <AddLinkForm talents={talents} />
    </>
  );
}
