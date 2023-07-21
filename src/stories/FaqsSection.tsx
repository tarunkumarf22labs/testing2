import React, { useEffect, useState } from 'react';
import { Container } from './Container';
import { NameTitle } from './NameTitle';
import Image from 'next/image';
import Link from 'next/link';
import { IVillaFAQ } from 'src/Interface';

interface IFaqs {
  faqs: IVillaFAQ;
}

export const FaqsSection = ({ faqs }: IFaqs) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const endpoint = parsedUrl.pathname;
    setPath(endpoint);
  }, []);
  return (
    <Container>
      <div className="flex space-x-16">
        <div className="w-full lg:w-1/2">
          <NameTitle propertyName={"Deja View's"} title={'faqs'} />
          <div className="space-y-6">
            {faqs?.data?.[0]?.attributes?.questionAndAnswers?.map(
              (faq, index) => {
                return (
                  <div key={index}>
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
            src="/images/a02.png"
            alt="faq2"
            width={326}
            height={489}
            className="absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px] top-0 right-0 object-cover"
          />
          <Image
            src="/images/a01.png"
            alt="faq1"
            width={326}
            height={489}
            className="absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px] top-28 right-36 lg:top-40 lg:right-48 object-cover"
          />
        </div>
      </div>
    </Container>
  );
};
