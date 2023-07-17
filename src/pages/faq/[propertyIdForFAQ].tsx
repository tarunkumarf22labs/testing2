import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Container } from "src/stories/Container";
import { NameTitle } from "src/stories/NameTitle";
import FAQAccordion from "src/stories/FAQAccordion";
import NetWrapper from "src/Network/netWrapper";
import { IVillaFAQ } from "src/Interface";
import { VillaFullFAQProps } from "src/Props";
import PrimaryButton from "src/stories/PrimaryButton";
import { Phone } from "@phosphor-icons/react";

const PropertyFAQ: NextPage = ({ data }: { data: IVillaFAQ }) => {
  const { faqs, potraitImageUrl, landscapeImageUrl, propertyName } =
    VillaFullFAQProps(data);

  return (
    <Layout title="LuxUnlock" animateHeader={false}>
      <Container bgWhite={false} className="pt-[60px] md:pt-0">
        <div className="flex space-x-16 relative pb-20">
          <div className="flex-1">
            <NameTitle
              propertyName={`${propertyName}'s`}
              title={"faqs"}
              removeBottomPadding
            />
            <FAQAccordion initialIndex={0} data={faqs} />
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative md:w-[462px] md:h-[673px]">
              <Image
                src={potraitImageUrl}
                alt="faq1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full absolute"
              />
              <Image
                src={landscapeImageUrl}
                alt="faq2"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute md:w-[300px] md:h-[200px] bottom-[70px] left-2/4 shadow-xl"
              />
            </div>
          </div>
          <PrimaryButton
            className="absolute bottom-0 md:right-0 mx-auto rounded-[500px] px-10 py-3 shadow-3xl"
            title="Contact Us"
            onClick={() => {}}
            leftComponent={<Phone weight="fill" size={20} />}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default PropertyFAQ;

export const getServerSideProps: GetServerSideProps<{
  data: IVillaFAQ | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error, status } = await NetWrapper(
    "api/faqs?populate=deep&filters[property][id][$eq]=3"
  );
  return { props: { data, error } };
};
