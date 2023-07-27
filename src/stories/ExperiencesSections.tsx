import React, { useRef, useState } from 'react';
import ExperienceCard from './ExperienceCard';
import { ScrollButton } from './ScrollButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useIsMobile from '@/hooks/useIsMobile';
import LocalExperienceModal from './LocalExperienceModal';
import { IImageTag } from 'src/Interface';
import { Container } from './Container';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

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
  collections: IStayLongerCollection[];
}
interface IExperiencesSection {
  setItemNo?: (value: number) => void;
  toggleModal: () => void;
  villa: string;
  header: string;
  props: IStayLonger[];
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

  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.stay_longer
  );
  useGsapPropertyDetailsAnimatons(
    gsap_property_details_animation_sections.experiences
  );

  return (
    <div>
      <div className="gsap-pd-stay-longer-section">
        <Container slider bgWhite>
          <div className="pb-6 uppercase sm:pb-10">
            <div className="text-sm text-[#8A1E61] mb-5 tracking-widest overflow-hidden">
              <p className="gsap-pd-stay-longer-section-heading-text opacity-0">
                {villa && villa}
              </p>
            </div>
            <div className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light overflow-hidden">
              <h1 className="gsap-pd-stay-longer-section-heading-text opacity-0">
                {header && header}
              </h1>
            </div>
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
                  className="w-full max-w-[290px] md:max-w-[373px] pr-5 gsap-pd-stay-longer-section-content opacity-0"
                >
                  <ExperienceCard
                    heading={el.title}
                    subHeading=" "
                    shortDescription={el.shortDescription}
                    longDescription={''}
                    imageUrl={el.image.image}
                    onClick={() => {
                      setItemNo(el.id);
                      setShowCuratedExpModal(!showcuratedExpModal);
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
        </Container>
      </div>
      <div className="gsap-pd-experiences-section">
        <Container slider bgWhite={false}>
          <div className="pb-6 uppercase sm:pb-10">
            <div className="text-sm text-[#8A1E61] mb-5 tracking-widest overflow-hidden">
              <p className="gsap-pd-experiences-section-heading-text opacity-0">
                {villa && villa}
              </p>
            </div>
            <div className="text-3xl sm:text-5xl sm:text-[#1C1917] font-light overflow-hidden">
              <h1 className="gsap-pd-experiences-section-heading-text opacity-0">
                {secondHeading && secondHeading}
              </h1>
            </div>
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
                  className="w-full max-w-[290px] md:max-w-[373px] pr-5 gsap-pd-experiences-section-content opacity-0"
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
        </Container>
      </div>
      {showcurrentLocalExperinceCard && (
        <LocalExperienceModal
          imageUrl={currentLocalExperinceCardData.image}
          heading={currentLocalExperinceCardData.title}
          longDescription={currentLocalExperinceCardData.longDecription}
          showOrHide={() => {
            setShowCurrentLocalExperinceCard(!showcurrentLocalExperinceCard);
          }}
        />
      )}
    </div>
  );
};

export default ExperiencesSection;
