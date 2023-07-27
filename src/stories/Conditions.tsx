import React from 'react';
import { ICondition } from './BeforeYouBook';
import classNames from 'classnames';

interface IConditionsProps {
  data: ICondition;
  index?: number;
}

export const Conditions = (props: IConditionsProps) => {
  const {
    data: { title, conditions },
    index: parentIndex
  } = props;

  return (
    <div
      className={classNames(
        parentIndex === 0 ? '' : 'pt-8',
        'gsap-pd-before-you-book-section-content'
      )}
    >
      <div className="text-xl text-[#18181B] mb-5">{title}</div>
      <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {typeof conditions === 'string' ? (
          <p>{conditions && conditions}</p>
        ) : (
          conditions.map((item, index) => {
            if (item.label === 'Check-In' || item.label === 'Check-Out') {
              item.text = item.text.substring(0, 5);
            }
            return (
              <div key={index} className="">
                <p className="text-xs text-[#7B8084] mb-1">{item.label}</p>
                <p className="text-base text-[#545456] font-centaur">
                  {item.text && item.text}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
