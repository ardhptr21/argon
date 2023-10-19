'use client';

import { createTalentApi } from '@/apis/talentApis';
import Button from '@/components/atoms/Button';
import FullScreenLoading from '@/components/atoms/loading/FullScreenLoading';
import AddTalentProject from '@/components/organisms/talents/AddTalentProject';
import FormTalent from '@/components/organisms/talents/FormTalent';
import { useAddTalentContext } from '@/context/addTalentContext';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { MdNavigateNext } from 'react-icons/md';

export default function Form() {
  const router = useRouter();
  const { step, setStep, validStep, talent, reset } = useAddTalentContext();

  const { mutate: createTalent, isPending } = useMutation({
    mutationFn: createTalentApi,
    onError: (error: AxiosError<any>) => {
      const msg = error.response.data.message || 'Failed, please try again.';
      toast.error(msg);
    },
    onSuccess: (data) => {
      const msg = data.message || 'Create talent successfully.';
      toast.success(msg);
      reset();
      router.replace('/dashboard/talents', { scroll: true });
    },
  });

  const handleSubmit = () => createTalent(talent);

  return (
    <>
      <section className='flex items-center justify-between relative'>
        <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Add Talent Information</h1>
        {step === 1 && (
          <Button disabled={!validStep} onClick={() => setStep(step + 1)}>
            Next
            <MdNavigateNext size={24} />
          </Button>
        )}
        {step === 2 && <Button onClick={handleSubmit}>Save</Button>}
      </section>
      <section className='mt-10 relative'>
        {step === 1 && <FormTalent />}
        {step === 2 && <AddTalentProject />}
      </section>
      {isPending && <FullScreenLoading text='Creating talent...' />}
    </>
  );
}
