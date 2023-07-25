import React from 'react';
import { Container } from './Container';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';
import useGsapAnimations from '@/hooks/useGsapAnimations';
import { gsap_animation_sections } from 'src/types/enum';

const JourneysSection = ({ data }: { data: ISpotlightAndJourney[] }) => {
  useGsapAnimations(gsap_animation_sections.journeys);
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
