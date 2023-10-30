import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/form/Input';
import Textarea from '@/components/atoms/form/Textarea';
import { CreateProjectSchema, CreateProjectValidator } from '@/validators/projectValidator';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { IoImageOutline } from 'react-icons/io5';

interface IProps extends Dialog.DialogProps {
  defaultValues?: CreateProjectSchema;
  onSubmit?: (_project: CreateProjectSchema) => void;
}

export default function ModalProject({ onSubmit, defaultValues, ...props }: IProps) {
  const {
    register,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateProjectSchema>({
    defaultValues: {
      name: defaultValues?.name || '',
      role: defaultValues?.role || '',
      startDate: defaultValues?.startDate || '',
      endDate: defaultValues?.endDate || '',
      description: defaultValues?.description || '',
    },
    resolver: zodResolver(CreateProjectValidator),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        ...defaultValues,
        startDate: defaultValues.startDate ? format(defaultValues.startDate as Date, 'yyyy-MM-dd') : undefined,
        endDate: defaultValues.endDate ? format(defaultValues.endDate as Date, 'yyyy-MM-dd') : undefined,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  const handleClick = () => {
    if (!isValid) return;
    if (onSubmit) {
      onSubmit(getValues());
    }
    reset();
  };

  return (
    <Dialog.Root {...props}>
      <Dialog.DialogPortal>
        <Dialog.Overlay className='inset-0 bg-black bg-opacity-30 fixed' />
        <Dialog.DialogContent className='fixed outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-20 bg-white rounded space-y-4'>
          <div className='flex items-end justify-between mb-10'>
            <Dialog.DialogTitle className='font-semibold text-2xl'>Choose Avatar</Dialog.DialogTitle>
            <Dialog.DialogClose>
              <AiOutlineClose size={24} className='font-bold' />
            </Dialog.DialogClose>
          </div>
          <div className='flex gap-7'>
            <div className='flex items-center justify-center flex-col gap-1'>
              <div className='w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-400'>
                <IoImageOutline size={75} />
              </div>
              <p className='font-semibold mx-auto text-center text-gray-400'>
                Tap to insert <br /> picture
              </p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <Input
                size='sm'
                label='Project Name'
                {...register('name')}
                isError={!!errors.name}
                error={errors.name?.message}
              />
              <Input
                size='sm'
                label='Role'
                {...register('role')}
                isError={!!errors.role}
                error={errors.role?.message}
              />
              <Input
                type='date'
                size='sm'
                label='Start Month'
                {...register('startDate')}
                isError={!!errors.startDate}
                error={errors.startDate?.message}
              />
              <Input
                type='date'
                size='sm'
                label='End Month'
                {...register('endDate')}
                isError={!!errors.endDate}
                error={errors.endDate?.message}
              />
            </div>
          </div>
          <Textarea
            label='Task Description'
            rows={8}
            {...register('description')}
            isError={!!errors.description}
            error={errors.description?.message}
          />
          <Button className='ml-auto px-12' disabled={!isValid} onClick={handleClick}>
            Submit
          </Button>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
