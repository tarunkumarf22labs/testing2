import React from "react";
import Image from "next/image";

interface VillaBannerInterface {
  title: string;
}

export const VillaBanner = (props: VillaBannerInterface) => {
    const { title } = props
    console.log(title)
  return (
    <div className="w-full h-[40vh]  border sm:h-[80vh]">
      {/* <Image
        src={"/images/a01.png"}
        alt="Villa Poster"
        width={100}
        height={100}
      /> */}
         {/* <Image
      src="/images/Logo.png"
      width={138}
      height={26}
      alt="Lux Unlock Logo"
      className="md:w-40 md:h-8"
    /> */}
            <div className="font-light hidden w-64 md:w-96 absolute  top-2/4 left-1/4 sm:block md:left-[40%] text-center text-4xl font-[Brandon Grotesque] tracking-wide z-50">
         <p> {title}</p>
      </div>
     
    </div>
  );
};
