'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';

interface IPaginationProps {
  total: number;
  current?: number;
  basePath: string;
  param?: string;
  maxVisiblePages?: number;
  withFirstAndLast?: boolean;
}

export default function Pagination({
  total,
  current,
  maxVisiblePages = 5,
  param = 'page',
  basePath,
  withFirstAndLast,
}: IPaginationProps) {
  const router = useRouter();
  const params = useSearchParams();
  const page = current || Number(params.get(param)) || 1;

  const getPagesNumber = () => {
    if (total <= maxVisiblePages) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const middlePage = Math.floor(maxVisiblePages / 2);
    const startPage = Math.min(Math.max(1, page - middlePage), total - maxVisiblePages + 1);

    const pages = [startPage];
    if (startPage > 1) {
      pages.push(0);
    }

    for (let i = startPage + 1; i < startPage + maxVisiblePages - 1; i++) {
      pages.push(i);
    }

    if (startPage + maxVisiblePages - 2 < total) {
      pages.push(0);
    }

    pages.push(total);

    return pages;
  };

  const handlePrevPage = () => {
    if (page === 1) return;
    change(page - 1);
  };

  const handleNextPage = () => {
    if (page === total) return;
    change(page + 1);
  };

  const change = (p: number) => {
    const newParams = new URLSearchParams(params);
    newParams.set(param, String(p));
    router.push(`${basePath}?${newParams.toString()}`);
  };

  return (
    <div className='flex items-center gap-2'>
      {page !== 1 && (
        <>
          {withFirstAndLast && (
            <BaseBtn type='button' disabled={page === 1} fill={page > 1} onClick={() => change(1)}>
              <BiChevronsLeft size={24} />
            </BaseBtn>
          )}
          <BaseBtn type='button' disabled={page === 1} fill={page > 1} onClick={handlePrevPage}>
            <BiChevronLeft size={24} />
          </BaseBtn>
        </>
      )}
      {getPagesNumber().map((p, i) =>
        p === 0 ? (
          <BaseBtn key={i} type='button' disabled>
            ...
          </BaseBtn>
        ) : (
          <BaseBtn key={i} type='button' fill={p === page} onClick={() => change(p)}>
            {p}
          </BaseBtn>
        )
      )}

      {page !== total && (
        <>
          <BaseBtn type='button' disabled={page === total} fill={page < total} onClick={handleNextPage}>
            <BiChevronRight size={24} />
          </BaseBtn>
          {withFirstAndLast && (
            <BaseBtn type='button' disabled={page === total} fill={page < total} onClick={() => change(total)}>
              <BiChevronsRight size={24} />
            </BaseBtn>
          )}
        </>
      )}
    </div>
  );
}

interface IBaseBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  fill?: boolean;
}

const BaseBtn = ({ children, fill, ...props }: IBaseBtnProps) => {
  return (
    <button
      {...props}
      className={clsx([
        'aspect-square w-14 h-11 rounded-lg flex justify-center items-center cursor-pointer disabled:cursor-default disabled:hover:bg-inherit',
        { 'text-white bg-primary hover:bg-primary-deep': fill },
        { 'border border-primary text-primary hover:bg-primary-light': !fill },
      ])}
    >
      {children}
    </button>
  );
};
