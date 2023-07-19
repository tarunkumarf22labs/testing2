import Image from 'next/image';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { viewAllPhotos } from 'src/data/constants';
import Link from 'next/link';
import { Container } from './Container';

interface IPropertyDetailsHeroSection {
  image: string;
  width: number;
  height: number;
  alt: string;
}

const PropertyDetailsHeroSection = ({
  image,
  width,
  height,
  alt
}: IPropertyDetailsHeroSection) => {
  return (
    <div className="relative mt-16 h-[219px] md:h-[min(72vh,810px)] md:-mt-[100px]">
      <Image
        width={width}
        height={height}
        className="object-cover w-full h-full brightness-50"
        src={image}
        alt={alt}
      />
      <Container
        bgTransparent
        className="hidden md:block absolute w-full bottom-0"
        innerContainerClassName="flex justify-end"
      >
        <Link href={'/gallery'}>
          <PrimaryButton
            title={viewAllPhotos}
            onClick={() => {}}
            disabled={false}
            className="w-[213px] justify-center"
          />
        </Link>
      </Container>
    </div>
  );
};

export default PropertyDetailsHeroSection;
