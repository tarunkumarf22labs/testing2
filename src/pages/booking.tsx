import Footer from '@/components/Footer/Footer';
import FooterLogo from '@/components/Footer/FooterLogo';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { IHomeInterface } from 'src/Interface';
import NetWrapper from 'src/Network/netWrapper';
import { Headerlogo } from 'src/assets';
import HeaderLogo from 'src/stories/HeaderLogo';
import Bookingcard from 'src/stories/bookingcard';
import BookingForm from 'src/stories/bookingform';
import Paymentcard from 'src/stories/paymentcard';

function Booking(data: IHomeInterface) {
  const datas = [
    {
      title: '₹27,500 X 13 Nights',
      price: '₹3,57,500'
    },
    {
      title: 'Additional Guest Charges',
      price: '₹00'
    },
    {
      title: 'Pet Charges',
      price: '₹3,57,500'
    },
    {
      title: 'Refundable Security Deposit',
      price: '₹3,57,500'
    },
    {
      title: 'VAT / GST',
      price: '₹64,350'
    }
  ];
  const villaaminities = [
    '6 Guests',
    '3 Bedrooms',
    '2 Bathrooms',
    'English-Style Cottage',
    'Scenic Views'
  ];
  const bookingdetails = [
    {
      title: 'Check-In & Check-Out',
      value: '10 May - 25 May, 2023'
    },
    {
      title: 'Total Nights',
      value: '15 Nights'
    },
    {
      title: 'Guests',
      value: '2 Guests'
    },
    {
      title: 'Booking Type',
      value: 'Villa'
    }
  ];
  return (
    <>
      <div className="max-w-[1640px] my-0 mx-auto ">
        <header className="h-[102px] pl-2 flex md:justify-center items-center md:pl-0  ">
          <HeaderLogo logoUrl="/images/logo_primary.svg" />
        </header>

        <div className="bg-[#F8F8F9]">
          <div className="  md:p-10 xl:p-24  ">
            <div className="grid grid-cols-1  gap-10  xl:grid-cols-2 ">
              <div className="">
                <Bookingcard
                  id={'01'}
                  imagesrc={''}
                  placename={'Coonoor, Tamil Nadu, India'}
                  villatype={'Chloe Cottage'}
                  key={'1'}
                  villaaminities={villaaminities}
                  bookingdetails={bookingdetails}
                />
              </div>

              <div className="place-self-end self-start p-8 bg-white w-full xl:w-fit  ">
                <Paymentcard datas={datas} />
              </div>
            </div>

            <div className="mt-10  ">
              <BookingForm onSubmit={(data) => console.log(data)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;

export const getServerSideProps: GetServerSideProps<{
  data: IHomeInterface | null;
  error: string | null;
}> = async (): Promise<any> => {
  const { data, error, status } = await NetWrapper(
    'api/properties/2?populate=deep'
  );

  return { props: { data, error } };
};
