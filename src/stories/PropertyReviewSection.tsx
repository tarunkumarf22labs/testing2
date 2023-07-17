import React from 'react';
import { NameTitle } from './NameTitle';
import { IReviewCard, ReviewCard } from './ReviewCard';
import classNames from 'classnames';

interface IPropertyReviewSection {
  reviewCardsCollection: IReviewCard[];
}

export const PropertyReviewSection = ({
  reviewCardsCollection
}: IPropertyReviewSection) => {
  return (
    <div
      className={classNames(
        'px-5 py-10 xl:px-0 lg:py-20 lg:max-w-7xl lg:mx-auto'
      )}
    >
      <NameTitle propertyName="Deja View's" title="GUEST SPEAK" />
      <div className="flex flex-col justify-between md:flex-row md:items-start md:flex-wrap md:gap-x-24">
        {reviewCardsCollection.map((review, index) => {
          const { reviewText, name, state, img } = review;
          return (
            <ReviewCard
              key={index}
              reviewText={reviewText}
              name={name}
              state={state}
              img={img}
            />
          );
        })}
      </div>
      <p className="text-[#8A1E61] text-xs md:text-sm font-medium tracking-wide">
        VIEW ALL 20 REVIEWS
      </p>
    </div>
  );
};
