import React from 'react';
import { Container } from './Container';
import JourneyDesktop from './JourneyDesktop';
import JourneyMobile from './JourneyMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const JourneysSection = ({ data, journeySectionheading, isbuttonvisible = true }: { data: ISpotlightAndJourney[], journeySectionheading: string, isbuttonvisible?: boolean }) => {
  return (
    <Container bgWhite={true}>
      <div className="hidden lg:block">
        <JourneyDesktop data={data} journeySectionheading={journeySectionheading} isbuttonvisible={isbuttonvisible} />
      </div>
      <div className="lg:hidden">
        <JourneyMobile data={data} journeySectionheading={journeySectionheading}  />
      </div>
    </Container>
  );
};

export default JourneysSection;
