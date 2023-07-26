import useIsMobile from '@/hooks/useIsMobile';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ScrollButton } from './ScrollButton';
import Image from 'next/image';
import { IImageTag } from 'src/Interface';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ICuratedExpModal {
  id: number;
  propsData: {
    id: number;
    image: IImageTag;
    title: string;
    description: string;
    numberOfNights: number;
  }[];
  setId: (id: any) => void;
}

export const CuratedExpModal = ({ propsData, setId }: ICuratedExpModal) => {
  const swiperOneRef = useRef(null);
  const isMobile = useIsMobile();

  const [allowSlideNext, setAllowSlideNext] = useState(false);
  const [allowSlidePrev, setAllowSlidePrev] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed left-0 w-full overflow-hidden h-[100vh] top-20 ease-in-out z-[500] rounded-3xl">
      <div
        className="fixed top-0 left-0 z-0 w-full h-screen"
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
        onClick={() => setId(null)}
      ></div>
      <div className="w-11/12 md:max-w-[560px] m-auto border-2 bg-white pl-6 pr-6 rounded-md z-50 relative shadow-md ">
        <button
          className="absolute right-[6%] top-7 sm:right-[5%] rounded-full text-white bg-gray w-7 h-7 flex justify-center items-center z-50"
          onClick={() => setId(null)}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        <Swiper
          ref={swiperOneRef}
          onSwiper={(swiper) => {
            swiperOneRef.current = swiper;
            setAllowSlideNext(Boolean(swiper?.allowSlideNext));
            setAllowSlidePrev(Boolean(swiper?.allowSlidePrev));
          }}
          slidesPerView="auto"
          className="relative"
          centeredSlides={isMobile}
          centeredSlidesBounds={isMobile}
          watchOverflow={true}
          autoHeight={true}
        >
          {propsData?.map((el, idx) => {
            const bulletPoints = el.description.split(/\n-|\n -/);
            return (
              <SwiperSlide
                key={`${idx + 1}`}
                className="flex items-start w-full m-auto mt-6"
              >
                <div className="z-[160] w-full m-auto">
                  <div className="flex items-start justify-start w-full md:max-w-[560px] m-auto mb-6 border-2">
                    <Image
                      src={el.image.image}
                      alt={el.title}
                      width={300}
                      height={320}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                  <p className="text-xs text-[#8A1E61] mb-2">
                    {el.numberOfNights > 1
                      ? `${el.numberOfNights} Nights`
                      : `${el.numberOfNights} Night`}
                  </p>
                  <h3 className="mb-4 text-xl capitalize">{el.title}</h3>
                  {bulletPoints?.length > 1 ? (
                    <div className="h-auto overflow-y-scroll scrollbar-hide max-h-[30vh]">
                      <ul className="mb-6 space-y-3 list-disc">
                        {bulletPoints?.map((elem, index) => {
                          return (
                            <li
                              key={index}
                              className="ml-4 font-centaur text-[#545456]"
                            >
                              {elem[0] === '-' ? elem.substring(2) : elem}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <p className="ml-1 font-centaur text-[#545456] mb-6">
                      {bulletPoints[0]}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {allowSlideNext || allowSlidePrev ? (
          <div className="relative h-12 mb-2 -mt-12 md:mt-8">
            <div className="hidden md:block absolute bottom-1 translate-x-[50%] right-[50%] z-10">
              <ScrollButton
                onNextPress={() => swiperOneRef?.current?.slideNext()}
                onPrevPress={() => swiperOneRef?.current?.slidePrev()}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
