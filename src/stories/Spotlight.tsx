import React from 'react';
import { Container } from './Container';
import SpotlightDesktop from './SpotlightDesktop';
import SpotlightMobile from './SpotlightMobile';
import { ISpotlightAndJourney } from 'src/Interface/home-page';

const Spotlight = ({ data }: { data: ISpotlightAndJourney[] }) => {
  return (
    <Container bgWhite={true}>
      <div className="hidden lg:block">
        <SpotlightDesktop data={data} />
      </div>
      <div className="lg:hidden">
        <SpotlightMobile data={data} />
      </div>
    </Container>
  );
};

export default Spotlight;
