import React from 'react';
import { Container } from './Container';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const JourneysSection = ({ data }: { data: ISpotlightAndJourney[] }) => {
  return (
    <Container bgWhite={true}>
      <div className="hidden lg:block">
        <JourneyDesktop data={data} />
      </div>
      <div className="lg:hidden">
        <JourneyMobile data={data} />
      </div>
    </Container>
  );
};

export default JourneysSection;
