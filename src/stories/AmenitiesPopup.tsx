import React, { useEffect } from 'react';
import Image from 'next/image';
import { IImageTag } from 'src/Interface';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IAmenitiesPopup {
  iconsArray: {
    image: IImageTag;
    text: string;
  }[];
  hidePopup: () => void;
}

const AmenitiesPopup = ({ iconsArray,hidePopup }: IAmenitiesPopup) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
    
  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-20 ease-in-out z-[500]">
      <div
        className="fixed top-0 left-0 w-full h-screen "
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        onClick={hidePopup}
      ></div>
      <div className="relative w-11/12 px-4 py-10 m-auto capitalize bg-white rounded-sm shadow-md md:w-2/3 md:p-8">
         <button
          className="absolute right-[6%] top-2 sm:right-[5%] rounded-full text-white bg-gray w-7 h-7 flex justify-center items-center z-50"
          onClick={hidePopup}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <div className='lg:grid lg:grid-cols-2 gap-auto'>
        {iconsArray?.map((icon, index) => (
          <p key={index} className="flex items-start mb-6">
            <Image
              src={icon.image.image}
              width={20}
              height={20}
              alt={icon.image.alt}
            />
            <span className="pl-3 text-base font-centaur ">{icon.text}</span>
          </p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPopup;
