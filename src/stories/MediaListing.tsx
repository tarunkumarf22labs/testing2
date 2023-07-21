import React from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { featuredIn } from 'src/data/constants';

interface IMediaListing {
  mediaImages: string[];
}
const MediaListing = ({ mediaImages }: IMediaListing) => {
  return (
    <Container>
      <h1 className="hidden md:block uppercase text-[#1C1917] text-center text-[28px] lg:text-[52px] font-[330] tracking-[1.04px] mt-5">
        {featuredIn}
      </h1>
      <div className="flex flex-col md:flex-row gap-[62px] md:mt-8 items-center justify-evenly overflow-scroll scrollbar-hide">
        {mediaImages.map((img, idx) => {
          return (
            <div
              className="transition duration-300 ease-out transform cursor-pointer hover:scale-105"
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
  );
};

export default MediaListing;
