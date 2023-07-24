import React from 'react';
import Search from 'src/stories/Search';
import Image from 'next/image';
import Layout from '@/components/Layout';
import MediaListing from 'src/stories/MediaListing';
import { mediaImages } from 'src/data/constants';

const locations = [
  {
    id: 1,
    type: 'city',
    title: 'Chennai'
  }
];
const Favourites = () => {
  let arr = [1, 2, 3, 4];
  let amenities = ['6 Guest', '3 Bedrooms', '2 Bathrooms'];
  return (
    <Layout title='fovourites'>
    <>
    <div className='bg-[#F8F8F9]'>
    <div className=" max-w-[1440px] m-auto pt-20 pb-24">
      <p className="text-[#8A1E61] text-sm uppercase tracking-[4.20] text-center mb-5 font-bold">
        YOUR
      </p>
      <p className="text-center text-[#18181B] text-5xl font-light uppercase tracking-[1.04] mb-28">
        FAVOURITE Villas
      </p>
      <div className="relative m-auto lg:absolute top-70  lg:left-14 lg:right-14 xl:left-28 xl:right-24 w-[90%]">
        <Search locations={locations} inFavouritePage= {true} />
      </div>
      <div className="grid grid-cols-1 gap-8 p-3 pt-20 md:gap-20 md:grid-cols-2 lg:pt-36">
        {arr.map((ele, id) => {
          return (
            <div key={id} className="w-full ">
              <div>
                <Image
                  src={
                    // 'https://luxunlockdev.s3.ap-south-1.amazonaws.com/Skyfall_Exterior_1_391e5b5fdb.jpg'
                    process.env.NEXT_PUBLIC_FAVOURITE_IMAGE
                  }
                  width={580}
                  height={360}
                  className="object-contain w-full h-auto"
                  alt="banner"
                />
              </div>
              <div className="flex items-center justify-between mt-4 md:items-start ">
                <div>
                  <p className="text-xs text-[#8A1E61] font-bold mb-3">
                    Kodaikanal, Tamil Nadu
                  </p>
                  <p className="text-xl text-[#18181B] capitalize">
                    Gramercy House
                  </p>
                  <div className="flex flex-wrap items-center justify-between mt-1 gap-[6px]">
                    {amenities.map((ele, idx) => {
                      return (
                        <>
                          <p className="text-center text-[#545456] text-xs font-[Centaur]">
                            {ele}
                          </p>
                          {idx !== amenities.length - 1 ? (
                            <div className="w-[2px] h-[2px] rounded bg-black"></div>
                          ) : (
                            ''
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-center text-[#8A1E61] font-bold">
                    ₹15,599 night
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
        <MediaListing mediaImages={mediaImages} />
    </>
    </Layout>
  );
};

export default Favourites;
