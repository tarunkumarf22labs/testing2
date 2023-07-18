import { DPDay, DPMonth, DPYear } from '@rehookify/datepicker';
import clsx from 'clsx';

export const getDayClassName = (
  className: string,
  { selected, disabled, inCurrentMonth, now, range }: DPDay
) =>
  clsx('day', className, range, {
    // 'bg-slate-700 text-white hover:bg-slate-700 opacity-100': selected,
    'bg-pink-900  text-white hover:bg-pink-900 opacity-100': selected,

    'opacity-25 cursor-not-allowed': disabled,
    '!opacity-0': !inCurrentMonth,
    'border border-slate-500': now
  });

export const getMonthClassName = (
  className: string,
  { selected, now, disabled }: DPMonth
) =>
  clsx(className, {
    'bg-pink-900 text-white hover:bg-pink-900 opacity-100': selected,
    'border border-slate-500': now,
    'opacity-25 cursor-not-allowed': disabled
  });

export const getYearsClassName = (
  className: string,
  { selected, now, disabled }: DPYear
) =>
  clsx(className, {
    'bg-pink-900 text-white hover:bg-pink-900 opacity-100': selected,
    'border border-slate-500': now,
    'opacity-25 cursor-not-allowed': disabled
  });

// #8A1E61
// bg-slate-700
