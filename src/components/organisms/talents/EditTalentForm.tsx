'use client';

import { editTalentApi } from '@/apis/talentApis';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import FullScreenLoading from '@/components/atoms/loading/FullScreenLoading';
import ModalAvatar from '@/components/molecules/modals/ModalAvatar';
import { EditTalentSchema, EditTalentValidator } from '@/validators/talentValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Talent } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ImCamera } from 'react-icons/im';

interface IProps {
  talent: Talent;
}

export default function EditTalentForm({ talent }: IProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<EditTalentSchema>({
    defaultValues: {
      avatar: talent.avatar,
      name: talent.name,
      mbti: talent.mbti,
      role: talent.role,
      experience: talent.experience,
      lastEducation: talent.lastEducation,
      startEducationYear: talent.startEducationYear,
      endEducationYear: talent.endEducationYear,
    },
    mode: 'onBlur',
    resolver: zodResolver(EditTalentValidator),
  });

  const { mutate: editTalent, isPending } = useMutation({
    mutationFn: editTalentApi,
    onSuccess: (data) => {
      const msg = data.message || 'Create talent successfully.';
      toast.success(msg);
    },
    onError: (error: AxiosError<any>) => {
      const msg = error.response?.data.message || 'Failed, please try again.';
      toast.error(msg);
    },
  });

  const onSubmit = (data: EditTalentSchema) => {
    editTalent({ id: talent.id, body: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col gap-4'>
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
          disabled={isPending}
        />
        <div className='grid grid-cols-3 gap-10'>
          <Input
            label='MBTI'
            className='w-full'
            {...register('mbti')}
            isError={!!errors.mbti}
            error={errors.mbti?.message}
            disabled={isPending}
          />
          <Input
            label='Role'
            className='w-full'
            {...register('role')}
            isError={!!errors.role}
            error={errors.role?.message}
            disabled={isPending}
          />
          <Input
            type='number'
            label='Experience (years)'
            className='w-full'
            {...register('experience')}
            isError={!!errors.experience}
            error={errors.experience?.message}
            disabled={isPending}
          />
        </div>
        <Input
          label='Last education'
          className='w-full'
          {...register('lastEducation')}
          isError={!!errors.lastEducation}
          error={errors.lastEducation?.message}
          disabled={isPending}
        />
        <div className='grid grid-cols-2 gap-10'>
          <Input
            type='number'
            label='Start year'
            className='w-full'
            {...register('startEducationYear')}
            isError={!!errors.startEducationYear}
            error={errors.startEducationYear?.message}
            disabled={isPending}
          />
          <Input
            type='number'
            label='End year'
            className='w-full'
            {...register('endEducationYear')}
            isError={!!errors.endEducationYear}
            error={errors.endEducationYear?.message}
            disabled={isPending}
          />
        </div>
      </div>
      <Button className='w-full' disabled={isPending}>
        Save
      </Button>
      <ModalAvatar open={modalOpen} onOpenChange={setModalOpen} onValueChange={(val) => setValue('avatar', val)} />
      {isPending && <FullScreenLoading text='Editing talent...' />}
    </form>
  );
}
