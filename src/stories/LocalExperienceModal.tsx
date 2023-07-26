import React, { useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IExperienceCard {
  imageUrl: {
    image: string;
    width: number;
    height: number;
    alt: string;
  };
  heading: string;
  longDescription: string;
  showOrHide: () => void;
}

const LocalExperienceModal = ({
  imageUrl,
  heading,
  longDescription,
  showOrHide
}: IExperienceCard) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-20 ease-in-out z-[500] rounded-3xl">
      <div
        className="fixed top-0 left-0 z-0 w-full h-screen"
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        onClick={showOrHide}
      ></div>
      <div className="w-11/12 md:max-w-[560px] m-auto border-2 bg-white p-6 rounded-md z-50 relative max-h-[70vh] h-auto overflow-y-scroll scrollbar-hide">
        <button
          className="absolute right-[6%] top-7 sm:right-[5%] rounded-full text-white bg-gray w-7 h-7 flex justify-center items-center"
          onClick={showOrHide}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <Image
          src={imageUrl.image}
          width={300}
          height={500}
          alt={imageUrl.alt}
          className="object-cover w-full h-auto"
        />
        <p className="mt-6 text-[#18181B] text-xl capitalize mb-4">{heading}</p>
        <div className="text-[#545456] font-[Centaur] text-base overflow-auto pb-6">
          {longDescription}
        </div>
      </div>
    </div>
  );
};

export default LocalExperienceModal;
