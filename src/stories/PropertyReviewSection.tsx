import React from 'react';
import { NameTitle } from './NameTitle';
import { ReviewCard } from './ReviewCard';
import { Container } from './Container';
import { ITestimonials } from 'src/Interface/home-page';

interface IPropertyReviewSection {
  data: ITestimonials;
}

export const PropertyReviewSection = ({ data }: IPropertyReviewSection) => {
  return (
    <Container>
      <NameTitle propertyName="Deja View's" title="GUEST EXPERIENCE" />
      <div className="grid items-start md:grid-cols-2 md:gap-x-[100px]">
        {data?.data.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              reviewText={review?.attributes?.testimonial?.experience}
              name={review?.attributes?.testimonial?.name}
              state={review?.attributes?.testimonial?.date}
              img={
                review?.attributes?.testimonial?.avatar?.data?.attributes?.url
              }
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
