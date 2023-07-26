import Image from 'next/image';
import React from 'react';
import { Container } from '../Container';
import PrimaryButton from '../PrimaryButton';
import { aboutSection, knowMore } from 'src/data/constants';
import { IAbout } from 'src/Interface/home-page';
import useGsapHomeAnimations from '@/hooks/useGsapHomeAnimations';
import { gsap_animation_sections } from 'src/types/enum';

function AboutSection({ data }: { data: IAbout }) {
  useGsapHomeAnimations(gsap_animation_sections.about);

  return (
    <div className="gsap-about-section">
      <Container className="relative overflow-hidden" bgWhite={false}>
        <div className="w-full flex flex-col justify-center text-center md:w-[596px] mx-auto">
          <div className="text-[#8A1E61] text-center uppercase text-sm font-[450] md:tracking-[4.2px] overflow-hidden">
            <p className="gsap-about-section-heading-text opacity-0">
              {aboutSection.about}
            </p>
          </div>
          <div className="text-[26px] text-center lg:text-[52px] font-[330] text-[#1C1917] uppercase mt-5 overflow-hidden">
            <h1 className="gsap-about-section-heading-text opacity-0">
              {aboutSection.heading}
            </h1>
          </div>
          <p className="gsap-about-section-item opacity-0 sm:w-full text-[#545456] mt-8 leading-[22px] font-normal sm:text-xl font-centaur sm:leading-[34px]">
            {data?.aboutDescription}
          </p>
          <PrimaryButton
            title={knowMore}
            onClick={() => {}}
            className="gsap-about-section-item opacity-0 justify-center w-[317px] self-center mt-8"
          />
          <div className="gsap-about-section-main-image opacity-0 w-full max-w-[596px] h-[212px] md:h-[362px] mt-10 mx-auto shadow-xl">
            <Image
              width={0}
              height={0}
              alt="altag"
              sizes="100vw"
              src={data?.images?.data?.[0]?.attributes?.url}
              className="w-full h-full"
            />
          </div>
        </div>
        <Image
          width={0}
          height={0}
          alt="altag"
          sizes="100vw"
          src={data?.images?.data?.[1]?.attributes?.url}
          className="gsap-about-section-right-image shadow-xl w-[553px] h-[362px] hidden absolute right-[80%] top-1/4 lg:block"
        />
        <Image
          width={0}
          height={0}
          alt="altag"
          sizes="100vw"
          src={data?.images?.data?.[2]?.attributes?.url}
          className="gsap-about-section-left-image shadow-xl w-[553px] h-[362px] hidden absolute left-[80%] top-1/4 lg:block"
        />
      </Container>
    </div>
  );
}

export default AboutSection;
