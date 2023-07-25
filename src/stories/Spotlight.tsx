import React, { useRef } from 'react';
import { Container } from './Container';
import SpotlightDesktop from './SpotlightDesktop';
import SpotlightMobile from './SpotlightMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';
import useGsapAnimations from '@/hooks/useGsapAnimations';
import { gsap_animation_sections } from 'src/types/enum';

const Spotlight = ({ data }: { data: ISpotlightAndJourney[] }) => {
  const scrollerStartRef = useRef(null);

  useGsapAnimations(gsap_animation_sections.spotlight);

  return (
    <div ref={scrollerStartRef} className="gsap-spotlight-section">
      <Container bgWhite={true}>
        <div className="hidden lg:block">
          <SpotlightDesktop scrollerStartRef={scrollerStartRef} data={data} />
        </div>
        <div className="lg:hidden">
          <SpotlightMobile data={data} />
        </div>
      </Container>
    </div>
  );
};

export default Spotlight;
