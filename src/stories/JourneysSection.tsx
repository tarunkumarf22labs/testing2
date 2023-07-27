import React from 'react';
import { Container } from './Container';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';
import useGsapHomeAnimations from '@/hooks/useGsapHomeAnimations';
import { gsap_animation_sections } from 'src/types/enum';

const JourneysSection = ({
  data,
  journeySectionheading,
  isbuttonvisible = true
}: {
  data: ISpotlightAndJourney[];
  journeySectionheading: string;
  isbuttonvisible?: boolean;
}) => {
  useGsapHomeAnimations(gsap_animation_sections.journeys);
  return (
    <div className="gsap-journey-section">
      <Container bgWhite={true}>
        <div className="hidden lg:block">
          <JourneyDesktop
            data={data}
            journeySectionheading={journeySectionheading}
            isbuttonvisible={isbuttonvisible}
          />
        </div>
        <div className="lg:hidden">
          <JourneyMobile
            data={data}
            journeySectionheading={journeySectionheading}
          />
        </div>
      </Container>
    </div>
  );
};

export default JourneysSection;
