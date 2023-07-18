import React from 'react';
import { Container } from './Container';
import SpotlightDesktop from './SpotlightDesktop';
import SpotlightMobile from './SpotlightMobile';

const data = [
  {
    big: '/images/CurratedCollectionsModelImage1.webp',
    small: '/images/GallerySmallRoom1.png',
    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vel illo, ad ex iure minus explicabo voluptatibus provident animi cupiditate deserunt earum repudiandae nam sunt! Magnam ea vero excepturi voluptates.'
  },
  {
    big: '/images/a01.png',
    small: '/images/Amenities1.png',
    para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad nobis nemo quibusdam expedita commodi perferendis pariatur perspiciatis, laboriosam qui ipsa mollitia accusamus rerum fugit sapiente repudiandae, possimus facilis necessitatibus?'
  },
  {
    big: '/images/ListYourPropertyImage33.webp',
    small: '/images/ListYourPropertyImage11.webp',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ad nobis nemo quibusdam expedita commodi perferendis pariatur perspiciatis, laboriosam qui ipsa mollitia accusamus rerum fugit sapiente repudiandae, possimus facilis necessitatibus?'
  }
];

const Spotlight = () => {
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
