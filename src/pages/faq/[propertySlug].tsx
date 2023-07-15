import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Container } from "src/stories/Container";
import { NameTitle } from "src/stories/NameTitle";
import FAQAccordion from "src/stories/FAQAccordion";

interface IFaqs {
  faqs: { question: string; answer: string }[];
}

const faqs = [
  {
    id: 1,
    question: "How can I make a hotel reservation on your website?",
    answer:
      'Making a hotel reservation is easy! Simply visit our website homepage and enter your destination, check-in/check-out dates, and the number of guests. Click on the "Search" button, and you\'ll be presented with a list of available hotels. Choose the one that suits your needs, proceed to the booking page, and follow the instructions to complete your reservation.',
  },
  {
    id: 2,
    question: "Can I modify or cancel my hotel reservation?",
    answer:
      'Yes, you can modify or cancel your hotel reservation, depending on the hotel\'s cancellation policy. To do so, visit the "Manage Reservations" section on our website and provide the necessary details, such as your reservation confirmation number and email address. You can then make the desired modifications or cancel the reservation as needed.',
  },
  {
    id: 3,
    question: "What payment methods do you accept for hotel bookings?",
    answer:
      "We accept various payment methods for hotel bookings, including major credit cards such as Visa, Mastercard, and American Express. Additionally, some hotels may offer alternative payment options, such as PayPal or bank transfers. The available payment methods will be displayed during the booking process.",
  },
];

const PropertyFAQ: NextPage = () => {
  return (
    <Layout title="LuxUnlock">
      <Container bgWhite={false} className="mt-[60px] md:mt-0">
        <div className="flex space-x-16">
          <div className="flex-1">
            <NameTitle
              propertyName={"Deja View's"}
              title={"faqs"}
              removeBottomPadding
            />
            <FAQAccordion data={faqs} />
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="relative md:w-[462px] md:h-[673px]">
              <Image
                src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/l_Sri_Agnipueeswarar_Temple_at_Sunset_87c7e3b75b.webp"
                alt="faq1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full absolute"
              />
              <Image
                src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/l_Front_facade_773d894fd0.webp"
                alt="faq2"
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

export default PropertyFAQ;
