import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { IVillaFAQ } from 'src/Interface';
import NetWrapper from 'src/Network/netWrapper';
import { VillaFullFAQProps } from 'src/Props';
import { Container } from 'src/stories/Container';
import { NameTitle } from 'src/stories/NameTitle';
import { villaFAQ } from 'src/data/constants';

const LuxUnlockFAQ: NextPage = ({ data }: { data: IVillaFAQ }) => {
  const { faqs, potraitImageUrl, landscapeImageUrl } = VillaFullFAQProps(data);

  return (
    <Layout title="LuxUnlock" animateHeader={false}>
      <Container bgWhite={false} className="pt-[60px] md:pt-0">
        <div className="flex space-x-16">
          <div className="flex-1">
            <NameTitle
              propertyName={`LuxUnlock's`}
              title={villaFAQ.heading}
              removeBottomPadding
            />
            <div className="flex flex-col gap-10 mt-5">
              {faqs?.map((faq, idx) => {
                return (
                  <div key={`${idx}`}>
                    <p className="text-[#545456] leading-[18px]">
                      {faq?.question}
                    </p>
                    <p className="text-[#7B8084] font-centaur leading-[22px] mt-2">
                      {faq?.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative md:w-[462px] md:h-[673px]">
              <Image
                src={potraitImageUrl}
                alt="potrait"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full absolute"
              />
              <Image
                src={landscapeImageUrl}
                alt="landscape"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute md:w-[300px] md:h-[200px] bottom-[70px] left-2/4 shadow-xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default LuxUnlockFAQ;

export const getServerSideProps: GetServerSideProps<{
  data: IVillaFAQ | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error } = await NetWrapper(
    'api/faqs?filters[isForProperty][$eq]=false&populate=deep'
  );
  return { props: { data, error } };
};
