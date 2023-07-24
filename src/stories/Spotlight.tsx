import React, { useRef } from 'react';
import { Container } from './Container';
import SpotlightDesktop from './SpotlightDesktop';
import SpotlightMobile from './SpotlightMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const Spotlight = ({ data }: { data: ISpotlightAndJourney[] }) => {
  const scrollerStartRef = useRef(null);
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
