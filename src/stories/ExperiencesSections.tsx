import React, { useRef, useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useIsMobile from '@/hooks/useIsMobile';
import LocalExperienceModal from './LocalExperienceModal';
import { IImageTag } from 'src/Interface';

interface ILocalExperince {
  id: number;
  image: {
    image: string;
    width: number;
    height: number;
    alt: string;
  };
  shortDescription: string;
  longDecription: string;
  title: string;
}

interface IStayLongerCollection {
    id: number;
    image: IImageTag;
    title: string;
    description: string;
  }
interface IStayLonger {
  id: number;
  image: IImageTag;
  title: string;
  shortDescription: string;
  collections:IStayLongerCollection[];
}
interface IExperiencesSection {
  setItemNo?: (value: number) => void;
  toggleModal: () => void;
  villa: string;
  header: string;
  props:IStayLonger[];
  secondProps: ILocalExperince[];
  secondHeading: string;
}

const ExperiencesSection = ({
  setItemNo,
  toggleModal,
  villa,
  header,
  props,
  secondProps,
  secondHeading
}: IExperiencesSection) => {
  const swiperOneRef = useRef(null);
  const swiperTwoRef = useRef(null);

  const isMobile = useIsMobile();

  const [allowSlideOneNext, setAllowSlideOneNext] = useState(false);
  const [allowSlideOnePrev, setAllowSlideOnePrev] = useState(false);

  const [allowSlideTwoNext, setAllowSlideTwoNext] = useState(false);
  const [allowSlideTwoPrev, setAllowSlideTwoPrev] = useState(false);

  const [currentLocalExperinceCardData, setCurrentLocalExperinceCardData] =
    useState<ILocalExperince>();

  const [showcurrentLocalExperinceCard, setShowCurrentLocalExperinceCard] =
    useState(false);
  const [showcuratedExpModal, setShowCuratedExpModal] = useState(false);
  return (
    <>
      <div className="md:mt-10 lg:mt-20">
        <div className="relative py-10 bg-white lg:py-20">
          <div className="relative pl-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:pl-0">
            <div className="pb-6 uppercase sm:pb-10">
              <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
                {villa && villa}
              </p>
              <p className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light">
                {header && header}
              </p>
            </div>
            <Swiper
              ref={swiperOneRef}
              onSwiper={(swiper) => {
                swiperOneRef.current = swiper;
                setAllowSlideOneNext(Boolean(swiper?.allowSlideNext));
                setAllowSlideOnePrev(Boolean(swiper?.allowSlidePrev));
              }}
              slidesPerView={'auto'}
              className="relative"
              centeredSlides={isMobile}
              centeredSlidesBounds={isMobile}
              watchOverflow={true}
            >
              {props?.map((el, idx) => {
                return (
                  <SwiperSlide
                    key={`${idx + 1}`}
                    className="w-full max-w-[290px] md:max-w-[373px] pr-5"
                  >
                    <ExperienceCard
                      heading={el.title}
                      subHeading=" "
                      shortDescription={el.shortDescription}
                      longDescription={""}
                      imageUrl={el.image.image}
                      onClick={() => {
                        setItemNo(el.id)
                        setShowCuratedExpModal(!showcuratedExpModal)
                      }}
                      toggleModal={toggleModal}
                    />
                  </SwiperSlide>
                );
              })}
              {allowSlideOneNext || allowSlideOnePrev ? (
                <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
                  <ScrollButton
                    onNextPress={() => swiperOneRef?.current?.slideNext()}
                    onPrevPress={() => swiperOneRef?.current?.slidePrev()}
                  />
                </div>
              ) : null}
            </Swiper>
          </div>
        </div>
        <div className="py-10 lg:py-20">
          <div className=" pl-5 md:ml-[max(0px,(100%_-_80rem)/2)] xl:pl-0">
            <div className="pb-6 uppercase sm:pb-10">
              <p className="text-sm text-[#8A1E61] mb-5 tracking-widest">
                {villa && villa}
              </p>
              <p className="text-3xl uppercase sm:text-5xl sm:text-[#1C1917] font-light">
                {secondHeading}
              </p>
            </div>
            <Swiper
              ref={swiperTwoRef}
              onSwiper={(swiper) => {
                swiperTwoRef.current = swiper;
                setAllowSlideTwoNext(Boolean(swiper?.allowSlideNext));
                setAllowSlideTwoPrev(Boolean(swiper?.allowSlidePrev));
              }}
              slidesPerView={'auto'}
              centeredSlides={isMobile}
              centeredSlidesBounds={isMobile}
              watchOverflow={true}
            >
              {secondProps?.map((el, idx) => {
                return (
                  <SwiperSlide
                    key={`${idx + 1}`}
                    className="w-full max-w-[290px] md:max-w-[373px] pr-5"
                    onClick={() => {
                      setShowCurrentLocalExperinceCard(
                        !showcurrentLocalExperinceCard
                      );
                      setCurrentLocalExperinceCardData(el);
                    }}
                  >
                    <ExperienceCard
                      heading={el.title}
                      subHeading=" "
                      shortDescription={el.shortDescription}
                      longDescription={el.longDecription}
                      imageUrl={el.image.image}
                      localExperience={true}
                    />
                  </SwiperSlide>
                );
              })}
              {allowSlideTwoNext || allowSlideTwoPrev ? (
                <div className="hidden md:block absolute top-[50%] -translate-y-[50%] right-5 z-10">
                  <ScrollButton
                    onNextPress={() => swiperTwoRef?.current?.slideNext()}
                    onPrevPress={() => swiperTwoRef?.current?.slidePrev()}
                  />
                </div>
              ) : null}
            </Swiper>
          </div>
        </div>
      </div>
      {showcurrentLocalExperinceCard && (
        <LocalExperienceModal
          imageUrl={currentLocalExperinceCardData.image}
          heading={currentLocalExperinceCardData.title}
          longDescription={currentLocalExperinceCardData.longDecription}
          showOrHide = {() => {
            setShowCurrentLocalExperinceCard(
              !showcurrentLocalExperinceCard
            );
          }}
        />
      )}
    </>
  );
};

export default ExperiencesSection;
