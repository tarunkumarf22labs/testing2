import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { NameTitle } from './NameTitle';
import Image from 'next/image';
import Link from 'next/link';
import { IVillaFAQ } from 'src/Interface';
import useGsapPropertyDetailsAnimatons from '@/hooks/useGsapPropertyDetailsAnimatons';
import { gsap_property_details_animation_sections } from 'src/types/enum';

interface IFaqs {
  faqs: IVillaFAQ;
  propertyName: string;
}

export const FaqsSection = ({ faqs, propertyName }: IFaqs) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const endpoint = parsedUrl.pathname;
    setPath(endpoint);
  }, []);

  useGsapPropertyDetailsAnimatons(gsap_property_details_animation_sections.faq);

  return (
    <div className="gsap-pd-faq-section">
      <Container>
        <div className="flex space-x-16">
          <div className="w-full lg:w-1/2">
            <NameTitle
              propertyName={`${propertyName}'s`}
              title={'faqs'}
              gsapClassName="gsap-pd-faq-section-heading-text opacity-0"
            />
            <div className="space-y-6">
              {faqs?.data?.[0]?.attributes?.questionAndAnswers?.map(
                (faq, index) => {
                  return (
                    <div
                      key={index}
                      className="gsap-pd-faq-section-content opacity-0"
                    >
                      <p className="text-base text-[#545456] mb-2 font-semibold">
                        {faq?.question}?
                      </p>
                      <p className="text-base text-[#7B8084] font-centaur">
                        {faq?.answer}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            {faqs?.data?.[0]?.attributes?.questionAndAnswers.length > 5 ? (
              <Link href={`/faq${path}`}>
                <p className="text-[#8A1E61] mt-5 text-xs md:text-sm font-medium tracking-wide">
                  VIEW ALL FAQs
                </p>
              </Link>
            ) : null}
          </div>
          <div className="relative hidden w-1/2 lg:block">
            <Image
              src={
                faqs?.data?.[0]?.attributes?.portraitImages?.data?.[0]
                  ?.attributes?.url
              }
              alt="faq2"
              width={326}
              height={489}
              className="gsap-pd-faq-image-1 opacity-0 absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px] top-0 right-0 object-cover"
            />
            <Image
              src={
                faqs?.data?.[0]?.attributes?.portraitImages?.data?.[1]
                  ?.attributes?.url
              }
              alt="faq1"
              width={326}
              height={489}
              className="gsap-pd-faq-image-2 opacity-0 absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px] top-28 right-36 lg:top-40 lg:right-48 object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
