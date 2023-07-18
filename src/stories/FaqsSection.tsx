import React from "react";
import { Container } from "./Container";
import { NameTitle } from "./NameTitle";
import Image from "next/image";
import Link from "next/link";

interface IFaqs {
  faqs: { question: string; answer: string }[];
}

export const FaqsSection = ({ faqs }: IFaqs) => {
  return (
    <Container>
      <div className="flex space-x-16">
        <div className="w-full lg:w-1/2">
          <NameTitle propertyName={"Deja View's"} title={'faqs'} />
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const { question, answer } = faq;
              return (
                <div key={index}>
                  <p className="text-base text-[#545456] mb-2 font-semibold">
                    {question}?
                  </p>
                  <p className="text-base text-[#7B8084] font-centaur">
                    {answer}
                  </p>
                </div>
              );
            })}
          </div>
          <Link href={"/faq/123"}>
            <p className="text-[#8A1E61] mt-5 text-xs md:text-sm font-medium tracking-wide">
              VIEW ALL FAQs
            </p>
          </Link>
        </div>
        <div className="relative hidden w-1/2 lg:block">
          <Image
            src="/images/FaqImage2.png"
            alt="faq2"
            width={326}
            height={489}
            className="absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px]  top-0 right-0 "
          />
          <Image
            src="/images/FaqImage1.png"
            alt="faq1"
            width={326}
            height={489}
            className="absolute w-[217px] h-[326px] md:w-[326px] md:h-[489px] top-28 right-36 lg:top-40 lg:right-48"
          />
        </div>
      </div>
    </Container>
  );
};
