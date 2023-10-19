import { AddTalentContextProvider } from '@/context/addTalentContext';
import FormTalent from '@/components/organisms/talents/FormTalent';

export default function AddTalentDashboard() {
  return (
    <AddTalentContextProvider>
      <div>
        <FormTalent />
      </div>
    </AddTalentContextProvider>
  );
}
