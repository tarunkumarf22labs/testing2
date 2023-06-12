import React from "react";
import Image from "next/image";

interface VillaBannerInterface {
  bannerText: string;
  bannerTextStyle: string;
  bannerImageStyle: string;
}

export const VillaBanner = (props: VillaBannerInterface) => {
    const { bannerText,bannerTextStyle,bannerImageStyle } = props
    console.log(bannerText)
  return (
    <div className="relative text-center md:-mt-16">
      <Image
        src={"/images/a01.png"}
        alt="Villa Poster"
        width={1920}
        height={1080}
        className={bannerImageStyle}
      />
     <div className={`overflow-hidden ${bannerTextStyle} Home-page-text-div font-[Brandon Grotesque] tracking-wide text-4xl md:text-5xl`}>
        <p className="capitalize animate-slide-down">{bannerText}</p>
      </div>
    </div>
  );
};
