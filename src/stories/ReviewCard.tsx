import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

export interface IReviewCard {
  top?: boolean;
  reviewText?: string;
  name?: string;
  state?: string;
  img?: string;
  customClasses?: string;
}

export const ReviewCard = ({
  top = true,
  reviewText,
  name,
  state,
  img,
  customClasses
}: IReviewCard) => {
  return (
    <div
      className={classNames(
        'text-[#545456] mt-4 mb-3  md:max-w-lg md:h-auto flex',
        top ? 'flex-col-reverse md:px-0 py-2' : 'flex-col bg-[#f8f8f9] md:p-6 ',
        customClasses
      )}
    >
      <p
        className={classNames(
          'font-centaur text-[#545456]',
          top ? 'mt-2 mb-3 text-xl' : 'text-base mb-10 sm:text-2xl'
        )}
      >
        {reviewText}
      </p>
      <div
        className={classNames(
          'flex sm:justify-start',
          top ? 'justify-start' : 'justify-center '
        )}
      >
        <Image
          src={img}
          alt="Avatar"
          width={60}
          height={60}
          className="rounded-full bg-slate-500 text-slate-500 mr-3"
        />
        <div className={classNames('flex flex-col justify-center')}>
          <p className="text-sm text-[#8A1E61] tracking-widest font-normal">
            {name}
          </p>
          <p className="text-xs text-[#7B8084] tracking-widest">{state}</p>
        </div>
      </div>
    </div>
  );
};
