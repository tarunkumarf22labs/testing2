import Layout from '@/components/Layout';
import classNames from 'classnames';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Container } from 'src/stories/Container';

interface ICard {
  name: string;
  designation: string;
  description: string;
  email: string;
  img: string;
  reverse?: boolean;
}

const About: NextPage = () => {
  return (
    <Layout title="LuxUnlock">
      <>
        <Container className="mt-16 md:mt-0" full={true}>
          <div className="h-[155px] text-white uppercase bg-[#7B8084] flex flex-col justify-center items-center md:py-32">
            <p className="text-xs md:text-sm md:mb-5">luxunlock&apos;s</p>
            <h1 className="text-4xl md:text-6xl md:font-light">About Us</h1>
          </div>
        </Container>
        <Container bgWhite={false}>
          <div className="text-center">
            <p className="text-3xl text-[#18181B] font-light pb-6 md:text-4xl">
              WHO ARE WE?
            </p>
            <div className="text-base text-[#262626] font-centaur font-normal space-y-6 md:text-xl md:leading-8">
              <p>
                LuxUnlock, or as we like to say LUX, is our luxury brainchild
                thats been a long time coming. Over the last decade in our
                luxury travel business, we began to see a growing trend of
                luxury guests seeking exclusive, self-contained, safe, and
                private luxury travel experiences to bring together close family
                and friends. The 2020 pandemic accelerated this need. And
                LuxUnlock was born.
              </p>
              <p>
                LuxUnlock is - unlocking access for luxury travellers to private
                luxury vacation homes that have never been given out before, and
                enhanced with a portfolio of curated destination experiences.
                And this comes backed by decades of our experience,
                entrepreneurship and innovation in the hospitality & tourism
                industry.
              </p>
              <p>
                With our reputation of starting and operating successful
                hospitality enterprises and of creating the most memorable
                holiday experiences, we aim to bring these skills together to
                deliver youthe quintessential LuxUnlock Experience.
              </p>
              <p>Best wishes</p>
              <p className="font-creattion text-3xl md:text-6xl text-[#8A1E61]">
                Rucha and Ashish Gupta
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="space-y-8 md:space-y-32">
            {data.map((item, index) => {
              const reverse = index === 1 ? true : false;
              return <Card key={index} {...item} reverse={reverse} />;
            })}
          </div>
        </Container>
      </>
    </Layout>
  );
};

const data = [
  {
    name: 'Rucha Singh',
    designation: 'Founder',
    email: 'rucha@luxunlock.com',
    description:
      'A hospitality degree from Pune and an MBA in Human Resources from XLRIJamshedpur, Rucha Gupta worked for several years in large corporations such as Procter & Gamble, Murugappa Group, and Mercer Consulting. Needing the flexibility of raising a family and working at the same time, she joined Milesworth Travel, the family-run corporate travel company, ushering in a wonderful 15-year relationship with American Express as their office in Chennai, India. In 2008, the idea of the city&apos;s first ever true Bed & Breakfast took shape, and Footprint B&B was born. It went on to win accolades from nearly every international travel guide from Lonely Planet, Frommers, Footprint, Rough Guides and Routard. And was voted the number one hospitality establishment in Chennai across all categories by TripExpert in 2019. Rucha serves as a Director for Operations at LuxUnlock&apos;s parent company, Milesworth Journeys, our luxury travel company.',
    img: '/images/AboutImage1.png'
  },
  {
    name: 'Ashish Gupta',
    designation: 'Founder',
    email: 'ashish@luxunlock.com',
    description:
      'Ashish Gupta has had over 20 years of entrepreneurship in the hospitality & travel industry, which is backed by an undergraduate degree in Mechanical Engineering from Mangalore University and an MBA in Marketing & Finance from XLRI Jamshedpur. He has had several years of professional service in companies such as Larsen & Toubro, Invensys plc, and ITC Limited - from designing tyre-making machinery to marketing consumer products and engineering solutions for the oil & gas industry. In the last two decades, he has co-founded The Barefoot Group in the Andaman Islands, owners of the award-winning eco-lodge Barefoot at Havelock, and Barefoot Scuba, India&apos;s leading PADI scuba diving centre. In addition to this, he has also co-founded Travel To Care, India&apos;s first sustainable tourism online platform for responsible tourism, which was funded by the Danish International Development Agency (DANIDA). He is currently Managing Director of Milesworth Journeys, Chennai&apos;s leading luxury holiday travel company.',
    img: '/images/AboutImage2.png'
  }
];

const Card = (props: ICard) => {
  const { name, email, designation, img, description, reverse = false } = props;
  return (
    <div
      className={classNames(
        'sm:flex sm:justify-center sm:items-center sm:space-x-16',
        reverse ? 'sm:flex-row-reverse  sm:space-x-reverse' : ''
      )}
    >
      <div className="pb-4 sm:w-1/2 md:max-w-[410px] md:h-[614px]">
        <Image
          src={img}
          alt={name}
          width={348}
          height={432}
          className="md:w-[410px] md:h-[auto]"
        />
      </div>
      <div className=" sm:w-1/2">
        <div className="flex flex-col mb-5">
          <p className="text-2xl  md:text-5xl capitalize">{name}</p>
          <p className="text-base">
            {designation} |{' '}
            <span className="text-[#8A1E61] underline">{email}</span>
          </p>
        </div>
        <div className="font-normal text-[#262626] md:text-xl font-centaur">
          {description}
        </div>
      </div>
    </div>
  );
};

export default About;
