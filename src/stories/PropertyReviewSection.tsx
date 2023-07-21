import React from 'react';
import { NameTitle } from './NameTitle';
import { ReviewCard } from './ReviewCard';
import { Container } from './Container';
import { IVillaUserExperience } from 'src/Interface';
import Link from 'next/link';

interface IPropertyReviewSection {
  data: IVillaUserExperience[];
  propertyName: string;
}

export const PropertyReviewSection = ({
  data,
  propertyName
}: IPropertyReviewSection) => {
  return (
    <Container>
      <NameTitle propertyName={`${propertyName}'s`} title="GUEST EXPERIENCE" />
      <div className="grid items-start md:grid-cols-2 md:gap-x-[100px]">
        {data?.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              reviewText={review?.experience}
              name={review?.name}
              state={review?.date}
              img={review?.avatar?.data?.attributes?.url}
            />
          );
        })}
      </div>
      {data?.length > 6 ? (
        <Link href={''}>
          <p className="text-[#8A1E61] text-xs md:text-sm font-medium tracking-wide">
            VIEW ALL {data?.length} REVIEWS
          </p>
        </Link>
      ) : null}
    </Container>
  );
};
