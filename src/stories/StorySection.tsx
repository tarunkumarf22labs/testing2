import Image from 'next/image';
import React, { useState } from 'react';
import ReadMoreOrLess from './ReadMoreOrLess';
import { IImageTag } from 'src/Interface';
import { Container } from './Container';

export interface IStorySection {
  isStory?: boolean;
  heading?: string;
  secondheading?: string;
  story?: string;
  image?: IImageTag;
  stringLength: number;
  initialListToShow: number;
}

export const StorySection = ({
  isStory = true,
  heading,
  story,
  image,
  secondheading,
  stringLength,
  initialListToShow
}: IStorySection) => {
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
      <Container bgWhite={false}>
        <div className="relative z-10 px-4 py-8 -mt-16 bg-white sm:-mt-24 xl:-mt-60 md:px-8 md:py-11">
          {isStory && (
            <p className="uppercase text-sm text-[#8A1E61] mb-2 sm:mb-5  tracking-wider">
              {heading && heading}
            </p>
          )}
          <p className="mb-6 text-3xl font-light uppercase md:text-5xl">
            {/* {isStory ? "STORY" : "Getting there"} */}
            {secondheading && secondheading}
          </p>
          <ReadMoreOrLess
            story={story}
            stringLength={stringLength}
            initialListToShow={initialListToShow}
          />
        </div>
      </Container>
    </div>
  );
};
