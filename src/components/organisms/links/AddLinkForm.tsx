'use client';

import { CreateLinkApi } from '@/apis/linkApi';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import FullScreenLoading from '@/components/atoms/loading/FullScreenLoading';
import Table from '@/components/molecules/table/Table';
import TableItem from '@/components/molecules/table/TableItem';
import TableRow from '@/components/molecules/table/TableRow';
import { CreateLinkSchema, CreateLinkValidator } from '@/validators/linkValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Talent } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiSolidTrash } from 'react-icons/bi';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import LinkTalentSelector from './LinkTalentSelector';
import { format } from 'date-fns';

interface IProps {
  talents: Talent[];
}

export default function AddLinkForm({ talents }: IProps) {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedTalents, setSelectedTalents] = useState<Talent[]>([]);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setValue,
    getValues,
  } = useForm<CreateLinkSchema>({
    mode: 'onBlur',
    resolver: zodResolver(CreateLinkValidator),
    defaultValues: {
      slug: '',
      startDate: '',
      endDate: '',
      target: '',
      passcode: '',
      talents: [],
    },
  });

  const handleSelect = (talent: Talent) => {
    setSelectedTalents([...selectedTalents, talent]);
    setValue('talents', [...getValues('talents'), talent.id]);
  };

  const handleUnselect = (talent: Talent) => {
    setSelectedTalents(selectedTalents.filter((selected) => selected.id !== talent.id));
    setValue('talents', getValues('talents').filter((selected) => selected !== talent.id) as any);
  };

  const { mutate: createLink, isPending } = useMutation({
    mutationFn: CreateLinkApi,
    onSuccess: (data) => {
      const msg = data.message || 'Link created successfully.';
      router.push('/dashboard/links');
      toast.success(msg);
    },
    onError: (err) => {
      const msg = err.message || 'Failed to create link.';
      toast.error(msg);
    },
  });

  const onSave = (data: CreateLinkSchema) =>
    createLink({
      ...data,
      startDate: format(data.startDate as Date, 'yyyy-MM-dd'),
      endDate: format(data.endDate as Date, 'yyyy-MM-dd'),
    });

  return (
    <>
      <section className='flex items-center justify-between'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='font-bold text-3xl inline-flex items-center gap-5'>Create Link</h1>
          <Button variant='primary' onClick={handleSubmit(onSave)} disabled={!isValid || isPending}>
            Save
          </Button>
        </div>
      </section>
      <section className='mt-9'>
        <h2 className='font-semibold text-xl'>Create Link and General Information</h2>
        <form className='mt-5 space-y-8'>
          <div>
            <Input
              label='Create New Link'
              left='https://azuralabs.id/'
              {...register('slug')}
              isError={!!errors.slug}
              error={errors.slug?.message}
              disabled={isPending}
            />
            <p className='font-bold text-sm text-gray-500 inline-flex items-center gap-2 mt-3'>
              <BsFillInfoCircleFill />
              System needs to check the link before you can publish it
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <Input
              type='date'
              label='Start of Duration'
              {...register('startDate')}
              isError={!!errors.startDate}
              error={errors.startDate?.message}
              disabled={isPending}
            />
            <Input
              type='date'
              label='End of Duration'
              {...register('endDate')}
              isError={!!errors.endDate}
              error={errors.endDate?.message}
              disabled={isPending}
            />
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <Input
              label='Client Target'
              {...register('target')}
              isError={!!errors.target}
              error={errors.target?.message}
              disabled={isPending}
            />
            <Input
              label='Passcode'
              {...register('passcode')}
              isError={!!errors.passcode}
              error={errors.passcode?.message}
              disabled={isPending}
            />
          </div>
        </form>
      </section>
      <hr className='h-[2px] w-full bg-gray-300 my-6' />
      <section>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold text-xl'>Listed Talent</h2>
          <Button variant='bordered' onClick={() => setShowSelector(true)} disabled={isPending}>
            Add Talent
          </Button>
        </div>
        <Table className='mt-5'>
          <tbody>
            {selectedTalents.map((talent) => (
              <TableRow variant='stacked' key={talent.id}>
                <TableItem className='inline-flex items-center gap-5'>
                  <div className='w-11 h-11 rounded-full bg-gray-200 relative overflow-hidden'>
                    <Image src={talent.avatar} alt={talent.name} fill={true} priority sizes='100%' />
                  </div>
                  <span className='text-xl font-semibold'>{talent.name}</span>
                </TableItem>
                <TableItem>
                  <Badge text={talent.role} size='sm' className='bg-purple-300' />
                </TableItem>
                <TableItem>
                  <button
                    className='bg-red-600 rounded-full p-3 text-white hover:bg-red-700'
                    onClick={() => handleUnselect(talent)}
                  >
                    <BiSolidTrash size={20} />
                  </button>
                </TableItem>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </section>
      <LinkTalentSelector
        talents={talents}
        show={showSelector}
        onChangeShow={setShowSelector}
        selectedTalents={selectedTalents}
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      {isPending && <FullScreenLoading text='Creating link...' />}
    </>
  );
}
