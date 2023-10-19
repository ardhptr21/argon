import { AddTalentContextProvider } from '@/context/addTalentContext';
import Form from './(components)/Form';

export default function AddTalentDashboard() {
  return (
    <AddTalentContextProvider>
      <div>
        <Form />
      </div>
    </AddTalentContextProvider>
  );
}
