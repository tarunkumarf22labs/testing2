import Image from 'next/image';
import React from 'react';

const GuestSpeakCard = ({
  experience,
  avatar,
  name
}: {
  experience: string;
  avatar: string;
  name: string;
}) => {
  return (
    <div className="md:bg-[#F8F8F9] p-6 flex flex-col gap-10 text-center md:text-left">
      <div>
        <p className="text-[#545456] text-base md:text-xl font-centaur font-[400] leading-[22px] md:leading-[34px]">
          {experience?.length > 230
            ? experience?.substring(0, 230) + '..'
            : experience}
        </p>
        {experience?.length > 230 ? (
          <p className="text-[#8A1E61] font-centaur text-base md:text-xl font-[400] mt-10 cursor-pointer">
            Read More
          </p>
        ) : null}
      </div>
      <div className="flex items-center gap-3 justify-center md:justify-start">
        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full relative bg-gray-400">
          <Image
            alt="user_avatar"
            src={avatar ?? ''}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-[#8A1E61] font-[450] text-sm tracking-[1.4px] capitalize">
            {name}
          </p>
          <p className="text-[10px] font-[390] text-[#7B8084]">Tamil Nadu</p>
        </div>
      </div>
    </div>
  );
};

export default GuestSpeakCard;
