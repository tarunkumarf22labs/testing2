import Image from 'next/image';
import React, { useState } from 'react';
import ReadMoreOrLess from './ReadMoreOrLess';
import { IImageTag } from 'src/Interface';
import { Container } from './Container';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

export interface IStorySection {
  isStory?: boolean;
  heading?: string;
  secondheading?: string;
  story?: string;
  image?: IImageTag;
  stringLength: number;
  initialListToShow: number;
  gsapClassName?: string;
  gsapEnum?: gsap_property_details_animation_sections;
}

export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
  secondheading,
  stringLength,
  initialListToShow,
  gsapClassName,
  gsapEnum
}: IStorySection) => {
  useGsapPropertyDetailsAnimatons(gsapEnum);

  return (
    <div id={`${secondheading}-for-scroll`}>
      <div className="-z-10 sm:min-w-screen">
        <Image
          src={image.image}
          alt={image.alt}
          width={image.width}
          height={image.width}
          className="h-[450px] w-full object-cover"
        />
      </div>
      <div className={gsapClassName}>
        <Container bgWhite={false}>
          <div
            className={`${gsapClassName}-container opacity-0 relative z-10 px-4 py-8 -mt-16 bg-white sm:-mt-24 xl:-mt-60 md:px-8 md:py-11`}
          >
            {isStory && heading?.length ? (
              <div className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5 md:tracking-[4.2px] md:font-[450] overflow-hidden">
                <p
                  className={`${gsapClassName}-heading-text opacity-0`}
                >{`${heading}'s`}</p>
              </div>
            ) : null}
            <div className="mb-6 text-3xl font-light uppercase md:text-5xl overflow-hidden">
              {/* {isStory ? "STORY" : "Getting there"} */}
              <h1 className={`${gsapClassName}-heading-text opacity-0`}>
                {secondheading && secondheading}
              </h1>
            </div>
            <div className={`${gsapClassName}-content`}>
              <ReadMoreOrLess
                story={story}
                stringLength={stringLength}
                initialListToShow={initialListToShow}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
