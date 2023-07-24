import React, { useRef } from 'react';
import { Container } from './Container';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const JourneysSection = ({ data }: { data: ISpotlightAndJourney[] }) => {
  return (
    <div className="gsap-journey-section">
      <Container bgWhite={true}>
        <div className="hidden lg:block">
          <JourneyDesktop data={data} />
        </div>
        <div className="lg:hidden">
          <JourneyMobile data={data} />
        </div>
      </Container>
    </div>
  );
};

export default JourneysSection;
