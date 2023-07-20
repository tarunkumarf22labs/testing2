import Image from 'next/image';
import React from 'react';
import { Iphotocollege } from './types';
import { Container } from '../Container';
import PrimaryButton from '../PrimaryButton';
import { knowMore } from 'src/data/constants';

function PhotoCollage({
  title,
  description,
  centerimage,
  leftimage,
  rightimage
}: Iphotocollege) {
  return (
    <Container className="relative overflow-hidden" bgWhite={false}>
      <div className="w-full flex flex-col justify-center text-center md:w-[596px] mx-auto">
        <p className="text-[#8A1E61] text-center uppercase text-sm font-[450] md:tracking-[4.2px]">
          ABOUT
        </p>
        <h1 className="text-[28px] text-center lg:text-[52px] font-[330] text-[#1C1917] uppercase mt-5">
          {title}
        </h1>
        <p className="sm:w-full text-[#545456] mt-8 leading-[22px] font-normal sm:text-xl font-centaur sm:leading-[34px]">
          {description}
        </p>
        <PrimaryButton
          title={knowMore}
          onClick={() => {}}
          className="justify-center w-[317px] self-center mt-8"
        />
        <div className="w-full mt-10">
          <Image
            width={'100'}
            height={'100'}
            alt="altag"
            src={centerimage}
            loading="lazy"
            className="shadow-xl w-full"
          />
        </div>
      </div>
      <Image
        width={'100'}
        height={'100'}
        alt="altag"
        className="hidden absolute right-[92%] top-1/4 w-[533px] lg:block shadow-xl"
        src={leftimage}
        loading="lazy"
      />
      <Image
        width={'100'}
        height={'100'}
        alt="altag"
        className="hidden absolute left-[92%] top-1/4 w-[533px] lg:block shadow-xl"
        src={rightimage}
        loading="lazy"
      />
    </Container>
  );
}

export default PhotoCollage;
