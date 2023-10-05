'use client';

import Button from '@/components/atoms/Button';
import AddTalentProject from '@/components/organisms/talents/AddTalentProject';
import FormTalent from '@/components/organisms/talents/FormTalent';
import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';

export default function AddTalentDashboard() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className='relative'>
      <section className='flex items-center justify-between relative'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Add Talent Information</h1>
        {step === 1 && (
          <Button onClick={() => setStep(step + 1)}>
            Next
            <MdNavigateNext size={24} />
          </Button>
        )}
        {step === 2 && <Button>Save</Button>}
      </section>
      <section className='mt-10 relative'>
        {step === 1 && <FormTalent />}
        {step === 2 && <AddTalentProject />}
      </section>
    </div>
  );
}
