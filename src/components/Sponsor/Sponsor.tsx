import React from 'react';
import Image from 'next/image';
import ad from '@/images/architectural-digest.png';
import platform from '@/images/plateform.png';
import traveller from '@/images/traveller.png';
import hindugroup from '@/images/the-hindu-group.png';

export default function Sponsor() {
  const data = [hindugroup, platform, traveller, ad];
  return (
    <div className="flex max-[720px]:flex-col gap-10 justify-evenly py-12 items-center ">
      {data?.map((el, idx) => (
        <div key={idx}>
          <Image src={el} alt="" />
        </div>
      ))}
    </div>
  );
}
