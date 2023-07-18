import React from 'react';
import FooterLogo from './FooterLogo';
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo
} from '@phosphor-icons/react';
import Link from 'next/link';

const QuickLinks = [
  { name: 'About Us', url: '/' },
  { name: 'Team', url: '/' },
  { name: 'Investors', url: '/' },
  { name: 'Travel Partners', url: '/' },
  { name: 'FAQs', url: '/faq' }
];

const Footer = () => {
  return (
    <>
      <div className="px-5 py-8 text-white bg-black">
        <div className="mx-auto max-w-7xl">
          {/* Footer Logo and description section */}
          <div className="flex flex-col items-center w-[80%] m-auto mb-8 sm:mb-14">
            <FooterLogo />
            <p className="text-[ #FFFFFF] text-sm sm:text-base text-center md:max-w-3xl font-[Centaur]">
              LuxUnLock is a specialist in designing the most enjoyable holiday
              villa experiences in India. Key to this is our ability to offer
              you the most beautiful private homes combined with our highly
              recognized curated destination experiences.
            </p>
          </div>

          {/* Quick Links section */}
          <div className="relative flex flex-col items-center mb-7 sm:mb-12">
            <hr className="w-full border-t border-[#737373]" />
            <h4 className="text-white font-[Brandon Grotesque] uppercase text-[10px] absolute top-[-10px] px-5 bg-black tracking-[0.3em] md:text-sm">
              <b>Quick links</b>
            </h4>
            <div className="grid justify-between w-full grid-cols-2 mt-5 sm:mt-8 md:w-auto gap-x-1 sm:gap-x-8 md:grid-cols-5 md:gap-0">
              {QuickLinks.map((link, idx) => (
                <Link key={idx} href={link?.url}>
                  <p className="mb-4 text-lg font-medium sm:text-center sm:mb-5 md:mb-0">
                    {link?.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Get in Touch section*/}
          <div>
            <div className="relative flex flex-col items-center mb-12 text-center">
              <hr className="w-full border-t border-[#737373]" />
              <h4 className="text-white font-[Brandon Grotesque] uppercase text-[10px] absolute top-[-10px] px-5 bg-black tracking-[0.3em] md:text-sm">
                <b>Get in touch</b>
              </h4>
              <div className="font-[Brandon Grotesque] mt-5 lg:flex lg:justify-between lg:items-center w-10/12">
                <div className="ml-0 w-[100%] m-auto lg:m-0 lg:w-[30%]">
                  <p className="py-5 font-medium text-center lg:text-left">
                    {/* <b> */}
                    LuxUnlock Private Limited, B-4, RM Towers, 108 Chamiers
                    Road, Chennai 600 018, India
                    {/* </b> */}
                  </p>
                </div>
                <div className="flex items-center justify-center mb-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="">
                      <span className="font-medium">
                        <Link href="tel:+916369555363">
                          {'+91 63695 55363 '}
                        </Link>
                      </span>
                      <span className="font-medium">
                        <Link href="tel:+919840060393">| +91 98400 60393</Link>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">
                      <Link href="mailto:reservations@luxunlock.com">
                        reservations@luxunlock.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#545456] pt-6 pb-6 flex justify-between items-center font-[Brandon Grotesque] flex-col-reverse xl:flex-row">
        <div className="flex items-center justify-between flex-col xl:flex-row w-4/5 xl:w-[34%] 2xl:w-[28%] text-[#FFFFFF] font-medium m-auto xl:ml-32">
          <div className="flex items-center justify-between mb-4 xl:w-1/2">
            <p className="mr-8 xl:mr-0">Terms & Conditions</p>
            <p className="">Privacy Policy</p>
          </div>
          <p className="mb-3">Refund & Cancellation Policy</p>
        </div>
        <hr className="w-[80%] m-auto mt-7 mb-7 border-t border-[#737373] xl:hidden" />
        <div className="flex items-center justify-between m-auto xl:mr-32 w-72">
          <div>
            <FacebookLogo size={24} color="#FFFFFF" />
          </div>
          <div>
            <TwitterLogo size={24} color="#FFFFFF" />
          </div>
          <div>
            <InstagramLogo size={24} color="#FFFFFF" />
          </div>
          <div>
            <LinkedinLogo size={24} color="#FFFFFF" />
          </div>
          <div>
            <PinterestLogo size={24} color="#FFFFFF" />
          </div>
        </div>
      </div>
      <div className="bg-[#1C1917] h-12">
        <p className="text-[#737373] text-center pt-3">
          © 2021 by Luxunlock Private Limited
        </p>
      </div>
    </>
  );
};

export default Footer;
