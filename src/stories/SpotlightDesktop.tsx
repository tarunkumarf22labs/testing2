import React, { RefObject, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { spotLightSection } from 'src/data/constants';
import { ISpotlightAndJourney } from 'src/Interface/home-page';
import PrimaryButton from './PrimaryButton';

const SpotlightDesktop = ({
  data,
  scrollerStartRef
}: {
  data: ISpotlightAndJourney[];
  scrollerStartRef: RefObject<HTMLDivElement>;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollerStartRef?.current,
        start: 'top 100px',
        end: 'bottom 90%',
        pin: '.gsap-spotlight-section-right',
        toggleActions: 'play none reverse none',
        invalidateOnRefresh: true
      });

      data?.forEach((_, idx) => {
        let timeline: gsap.core.Timeline;
        if (idx === 0) {
          setSlideIndex(0);
          return;
        } else {
          timeline = gsap.timeline();
          gsap.set(`.text-content-${idx}`, {
            y: 200,
            opacity: 0
          });
          gsap.set(`.preview-image-${idx}`, {
            zIndex: idx,
            translateY: '100%'
          });
          timeline
            .to(`.preview-image-${idx}`, {
              translateY: 0,
              onStart: () => setSlideIndex(idx),
              onReverseComplete: () => setSlideIndex(idx - 1)
            })
            .to(
              `.text-content-${idx}`,
              {
                y: 0,
                opacity: 1
              },
              '<'
            )
            .to(
              `.text-content-${idx - 1}`,
              {
                opacity: 0
              },
              '<'
            );
          ScrollTrigger.create({
            trigger: `.text-content-${idx}`,
            scrub: true,
            start: 'top 80%',
            end: 'top 50%',
            invalidateOnRefresh: true,
            animation: timeline
          });
        }
      });
    }, [scrollerStartRef]);
    return () => ctx.revert();
  }, [data]);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="uppercase text-4xl text-[#18181B] font-light md:text-5xl overflow-hidden">
        <h1 className="gsap-spotlight-section-heading-text opacity-0">
          {spotLightSection.heading}
        </h1>
      </div>
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col max-w-[579px] pr-[60px] overflow-hidden">
          {data?.map((el, idx) => {
            return (
              <div
                key={`${idx}`}
                className={`flex flex-col gap-y-4 flex-1 py-10 h-full w-full bg-white text-content-${idx}`}
              >
                <h2 className="gsap-spotlight-section-content text-[#1C1917] text-[42px] font-light capitalize">
                  {el?.title}
                </h2>
                <p className="gsap-spotlight-section-content text-base md:text-[22px] leading-[34px] text-[#545456]">
                  {el?.description}
                </p>
                <PrimaryButton
                  title="Know More"
                  onClick={() => {}}
                  className="gsap-spotlight-section-button self-start w-[317px] p-0 py-4 items-center justify-center mt-2"
                />
              </div>
            );
          })}
        </div>
        <div className="gsap-spotlight-section-right flex flex-1 items-center gap-8">
          <div className="gsap-spotlight-section-button w-full max-w-[559px] h-[369px] relative overflow-hidden">
            {data?.map((el, idx) => {
              return (
                <Image
                  key={`${idx}`}
                  src={el?.images?.data?.[0]?.attributes?.url}
                  alt="spotlight"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`absolute w-full h-full object-cover preview-image-${idx}`}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center w-8">
            <ChevronUpIcon
              color="#7B8084"
              width={20}
              className="relative top-[12px]"
            />
            <div className="h-9 w-[1.5px] bg-[#7B8084]" />
            <p className="text-xs text-[#8A1E61] py-3">
              {slideIndex + 1} / {data?.length}
            </p>
            <div className="h-9 w-[1.5px] bg-[#7B8084]" />
            <ChevronUpIcon
              className="rotate-180 relative bottom-[12px]"
              color="#7B8084"
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightDesktop;
