import React from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { featuredIn } from 'src/data/constants';
import useGsapAnimations from '@/hooks/useGsapAnimations';
import { gsap_animation_sections } from 'src/types/enum';

interface IMediaListing {
  mediaImages: string[];
}
const MediaListing = ({ mediaImages }: IMediaListing) => {
  useGsapAnimations(gsap_animation_sections.featured_in);

  return (
    <div className="gsap-media-listing-section">
      <Container>
        <div className="uppercase text-[#1C1917] text-center text-[28px] lg:text-[52px] font-[330] tracking-[1.04px] mt-5 overflow-hidden">
          <h1 className="gsap-media-listing-section-heading-text opacity-0">
            {featuredIn}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-[62px] mt-8 items-center justify-evenly overflow-scroll scrollbar-hide">
          {mediaImages.map((img, idx) => {
            return (
              <div
                className="gsap-media-listing-section-item transform cursor-pointer hover:scale-105"
                key={idx}
              >
                <div className="relative w-40">
                  <Image
                    src={img}
                    width={200}
                    height={100}
                    className="w-full m-auto"
                    alt="Media image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default MediaListing;
