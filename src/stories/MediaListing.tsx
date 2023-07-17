import React from 'react';
import Image from 'next/image';

interface IMediaListing {
  mediaImages: string[];
}
const MediaListing = ({ mediaImages }: IMediaListing) => {
  return (
    <div className="flex items-center p-20 ml-20 overflow-scroll scrollbar-hide">
      {mediaImages.map((img, idx) => {
        return (
          <div
            className="mr-10 transition duration-300 ease-out transform cursor-pointer md:mr-44 hover:scale-105"
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
  );
};

export default MediaListing;
