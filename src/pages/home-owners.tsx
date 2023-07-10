import Layout from "@/components/Layout";
import React from "react";
import HomeOwnersList from "src/stories/HomeOwnersList";

const HomeOwners = () => {
  return (
    <Layout title="Home-Owners">
    <div>
      <div className="relative mt-16 bg-red-500 h-[219px] md:h-[min(72vh,810px)] md:-mt-[100px]">
        {/* <Image
        width={width}
        height={height}
        className="object-cover w-full h-full brightness-50"
        src={image}
        alt={alt}
      /> */}
      </div>
      <h1 className="absolute top-[20vh] md:top-[30vh] left-1/2 -translate-x-[50%] -translate-y-[50%] text-2xl sm:text-4xl md:text-5xl text-[#F8F8F9] uppercase font-light">
        HOME OWNERS
      </h1>
      <p className="text-center text-[#8A1E61] text-sm uppercase mt-20 font-bold">
        HOME OWNERs
      </p>
      <p className="text-center text-[18181B] text-5xl mt-6 uppercase font-light">
        PARTNER WITH LUXUNLOCK
      </p>
      <div className="flex flex-col items-center justify-between m-auto mt-16 mb-20 md:flex-row md:max-w-7xl gap-14">
        <div className="w-11/12 m-auto md:w-full">
          <HomeOwnersList />
        </div>
        <div className="w-11/12 m-auto h-[500px] md:w-full"></div>
      </div>
    </div>
    </Layout>
  );
};

export default HomeOwners;
