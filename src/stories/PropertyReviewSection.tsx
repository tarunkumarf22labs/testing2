import React from 'react';
import { NameTitle } from './NameTitle';
import { IReviewCard, ReviewCard } from './ReviewCard';
import { Container } from './Container';

interface IPropertyReviewSection {
  reviewCardsCollection: IReviewCard[];
}

export const PropertyReviewSection = ({
  reviewCardsCollection
}: IPropertyReviewSection) => {
  return (
    <Container>
      <NameTitle propertyName="Deja View's" title="GUEST EXPERIENCE" />
      <div className="grid md:grid-cols-2 md:gap-x-[100px]">
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
    </Container>
  );
};
