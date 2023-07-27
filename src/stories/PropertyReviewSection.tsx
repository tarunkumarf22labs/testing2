import React from 'react';
import { NameTitle } from './NameTitle';
import { ReviewCard } from './ReviewCard';
import { Container } from './Container';
import { IVillaUserExperience } from 'src/Interface';
import Link from 'next/link';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

interface IPropertyReviewSection {
  data: IVillaUserExperience[];
  propertyName: string;
}

export const PropertyReviewSection = ({
  data,
  propertyName
}: IPropertyReviewSection) => {
  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.guest_experience
  );

  return (
    <div className="gsap-pd-guest-experience-section">
      <Container>
        <NameTitle
          propertyName={`${propertyName}'s`}
          title="GUEST EXPERIENCE"
          gsapClassName="gsap-pd-guest-experience-section-heading-text opacity-0"
        />
        <div className="grid items-start md:grid-cols-2 md:gap-x-[100px]">
          {data?.map((review, index) => {
            return (
              <div
                key={index}
                className="gsap-pd-guest-experience-section-content"
              >
                <ReviewCard
                  reviewText={review?.experience}
                  name={review?.name}
                  state={review?.date}
                  img={review?.avatar?.data?.attributes?.url}
                />
              </div>
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
    </div>
  );
};
