import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { villaInterface } from 'src/Interface';

function AutoScrollingVillaCard({ data }: { data: villaInterface[] }) {
  return (
    <div className="m-auto py-[60px] bg-[#f8f8f9]">
      <Marquee>
        {data.map((villa, idx) => {
          return (
            <div
              className="w-[200px] h-[133px] mr-12 relative cursor-pointer"
              key={`${idx}`}
            >
              <Image
                src="https://luxunlockdev.s3.ap-south-1.amazonaws.com/Lower_Verandah_at_Breakfast_e5e907f6b2.jpg"
                width={200}
                height={133}
                alt="image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 w-full h-full bg-black/40" />
              <p className="truncate capitalize text-lg font-[390] absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">
                Villa in{' '}
                {villa?.attributes?.address?.city?.data?.attributes?.name}
              </p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default AutoScrollingVillaCard;
