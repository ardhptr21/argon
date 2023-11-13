'use client';

import { CreateTalentSchema } from '@/validators/talentValidator';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

const initialValue = {
  step: 1,
  validStep: false,
  talent: {},
  setStep: () => {},
  setValidStep: () => {},
  setTalent: () => {},
  reset: () => {},
};

export const AddTalentContext = createContext<{
  step: number;
  validStep: boolean;
  talent: CreateTalentSchema;
  setValidStep: (_validStep: boolean) => void;
  setStep: (_step: number) => void;
  setTalent: (_talent: CreateTalentSchema) => void;
  reset: () => void;
}>(initialValue as any);

export const AddTalentContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState({ step: 1, validStep: false, talent: {} });
  return (
    <AddTalentContext.Provider
      value={{
        step: data.step,
        validStep: data.validStep,
        talent: data.talent as any,
        setValidStep: (validStep: boolean) => setData({ ...data, validStep }),
        setStep: (step: number) => setData({ ...data, step }),
        setTalent: (talent: CreateTalentSchema) => setData({ ...data, talent: { ...data.talent, ...talent } }),
        reset: () => setData(initialValue),
      }}
    >
      {children}
    </AddTalentContext.Provider>
  );
};

export const useAddTalentContext = () => {
  const context = useContext(AddTalentContext);
  if (!context) throw new Error('useAddTalentContext must be used within AddTalentContextProvider');
  return context;
};
