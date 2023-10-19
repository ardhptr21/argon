import Input from '@/components/atoms/form/Input';
import ModalAvatar from '@/components/molecules/modals/ModalAvatar';
import { useAddTalentContext } from '@/context/addTalentContext';
import { CreateTalentSchema, CreateTalentValidator } from '@/validators/talentValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ImCamera } from 'react-icons/im';

export default function AddTalentData() {
  const { setValidStep, setTalent } = useAddTalentContext();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    setValue,
    getValues,
    formState: { errors, isValid },
    watch,
  } = useForm<Omit<CreateTalentSchema, 'projects'>>({
    defaultValues: {
      avatar: '',
      name: '',
      mbti: '',
      experience: 0,
      lastEducation: '',
      startEducationYear: 0,
      endEducationYear: 0,
    },
    mode: 'onBlur',
    resolver: zodResolver(CreateTalentValidator.omit({ projects: true })),
  });

  watch((data) => setTalent(data));

  useEffect(() => {
    setValidStep(isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);
  return (
    <div className='flex items-center justify-center flex-col gap-4'>
      <div
        className='w-56 h-56 rounded-full overflow-hidden bg-white text-gray-500 flex items-center justify-center'
        onClick={() => setModalOpen(true)}
      >
        {!!getValues('avatar') ? (
          <Image src={getValues('avatar')} alt='avatar' width={224} height={224} />
        ) : (
          <div className='p-14 flex flex-col gap-1 justify-center items-center'>
            <ImCamera size={76} />
            <p className='font-semibold text-center'>Choose an avatar</p>
          </div>
        )}
      </div>
      <div className='w-full space-y-3'>
        <Input
          label='Talent Name'
          className='w-full'
          {...register('name')}
          isError={!!errors.name}
          error={errors.name?.message}
        />
        <div className='grid grid-cols-2 gap-10'>
          <Input
            label='MBTI'
            className='w-full'
            {...register('mbti')}
            isError={!!errors.mbti}
            error={errors.mbti?.message}
          />
          <Input
            type='number'
            label='Experience (years)'
            className='w-full'
            {...register('experience')}
            isError={!!errors.experience}
            error={errors.experience?.message}
          />
        </div>
        <Input
          label='Last education'
          className='w-full'
          {...register('lastEducation')}
          isError={!!errors.lastEducation}
          error={errors.lastEducation?.message}
        />
        <div className='grid grid-cols-2 gap-10'>
          <Input
            type='number'
            label='Start year'
            className='w-full'
            {...register('startEducationYear')}
            isError={!!errors.startEducationYear}
            error={errors.startEducationYear?.message}
          />
          <Input
            type='number'
            label='End year'
            className='w-full'
            {...register('endEducationYear')}
            isError={!!errors.endEducationYear}
            error={errors.endEducationYear?.message}
          />
        </div>
      </div>
      <ModalAvatar open={modalOpen} onOpenChange={setModalOpen} onValueChange={(val) => setValue('avatar', val)} />
    </div>
  );
}
