import React from 'react';
import { reviewsPageData } from '../data/constants';
import { Container } from 'src/stories/Container';
import Layout from '@/components/Layout';
import { NameTitle } from 'src/stories/NameTitle';
import { ReviewCard } from 'src/stories/ReviewCard';
import Image from 'next/image';

const Reviews = () => {
  const { property, reviews } = reviewsPageData;

  return (
    <Layout title="Reviews">
      <Container bgWhite={false}>
        <div className="flex justify-between">
          <div>
            <NameTitle propertyName={property} title="REVIEWS" />
            <div>
              {reviews.map((review, index) => {
                const { name, date: state, img, review: reviewText } = review;

                return (
                  <ReviewCard
                    key={index}
                    name={name}
                    state={state}
                    img={img}
                    reviewText={reviewText}
                    customClasses="m-w-[697px]"
                  />
                );
              })}
            </div>
          </div>
          <div className="hidden md:block relative h-[673px]">
            <Image
              src="/images/Amenities1.png"
              alt="amenities1"
              width={462}
              height={673}
            />
            <Image
              src="/images/Amenities2.png"
              alt="amenities2"
              width={300}
              height={200}
              className="absolute 2xl:-right-[15%] right-0 top-[403px]"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Reviews;
