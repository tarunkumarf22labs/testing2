import Image from 'next/image';
import React, { useEffect } from 'react';
import { Container } from '../Container';
import PrimaryButton from '../PrimaryButton';
import { aboutSection, knowMore } from 'src/data/constants';
import { IAbout } from 'src/Interface/home-page';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function AboutSection({ data }: { data: IAbout }) {
  useEffect(() => {
    let timeline = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: 'power4.out'
      }
    });

    timeline
      .fromTo(
        '.gsap-about-section-heading-text',
        {
          y: 100,
          skewY: 5,
          opacity: 0
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1
        }
      )
      .fromTo(
        '.gsap-about-section-item',
        { opacity: 0, scale: 0.8, stagger: 0.3 },
        { opacity: 1, scale: 1, stagger: 0.3 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-main-image',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-side-image',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        0.5
      )
      .fromTo(
        '.gsap-about-section-right-image',
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        '<'
      )
      .fromTo(
        '.gsap-about-section-left-image',
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        '<'
      );

    ScrollTrigger.create({
      trigger: '.gsap-about-section',
      start: 'top 50%',
      end: 'bottom bottom',
      animation: timeline
    });
  }, []);

  return (
    <div className="gsap-about-section">
      <Container className="relative overflow-hidden" bgWhite={false}>
        <div className="w-full flex flex-col justify-center text-center md:w-[596px] mx-auto">
          <p className="gsap-about-section-heading-text opacity-0 text-[#8A1E61] text-center uppercase text-sm font-[450] md:tracking-[4.2px]">
            {aboutSection.about}
          </p>
          <h1 className="gsap-about-section-heading-text opacity-0 text-[28px] text-center lg:text-[52px] font-[330] text-[#1C1917] uppercase mt-5">
            {aboutSection.heading}
          </h1>
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
