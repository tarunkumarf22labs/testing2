import Image from 'next/image';
import React from 'react';

function Bookingcard({
  imagesrc,
  id,
  placename,
  villatype,
  villaaminities,
  bookingdetails
}) {
  return (
    <div className=" w-full h-fit  xl:w-[792px] md:h-[445px] bg-white p-4">
      <div className="text-pantonepink text-sm ">{id}</div>
      <div className="uppercase -tracking-[0.64px] text-2xl pb-8 font-light">
        Review your itinerary
      </div>
      <div className=" h-full md:h-[186px] flex gap-6 pb-8 flex-col sm:flex-row  ">
        <div className="h-auto">
          {/* <Image src={imagesrc}  alt={'villa'} className='h-full object-cover w-full '  height={"100"} width={"100"} /> */}
          <img
            src={
              'https://a0.muscache.com/im/pictures/miso/Hosting-829319222305726312/original/6c63a08b-f6fd-4ed1-b00a-948f21f1e481.jpeg?im_w=720'
            }
            className="max-h-full object-cover "
          />
        </div>
        <div className="w-full">
          <h2 className="text-pantonepink text-xs uppercase font-normal tracking-[1px] ">
            {placename}
          </h2>
          <h2 className="text-[#171717] font-bold text-xl font-[Brandon Grotesque] ">
            {villatype}
          </h2>
          <ul className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-1 pt-2 ">
            {villaaminities?.map((aminity: string) => {
              return (
                <li key={aminity} className=" whitespace-nowrap">
                  {aminity}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t pt-8">
        <div className="font-Brandon text-xl ">Stay Details</div>
        <div className=" grid grid-cols-2 gap-5  md:grid-cols-4 pt-5  ">
          {bookingdetails?.map((booking) => {
            return (
              <div key={booking.title}>
                <div className="text-[#7B8084]  font-normal">
                  {booking.title}
                </div>
                <div className="text-[#545456] font-normal ">
                  {booking.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bookingcard;
