import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Carousal from "src/stories/Carousal";
import { HomeBannerimages } from "src/data/constants";
import Search from "src/stories/Search";
import { AppContext } from "src/Context";
import { useContext } from "react";


const Home: NextPage = () => {
  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]";
  const bannerText = "UNLOCK THE LUXURY WITH LUXUNLOCK";
  return (
    <>
      <Layout title="LuxUnlock">
           <>
           <Carousal images={HomeBannerimages} bannerImageStyle={bannerImageStyle} bannerTextStyle={bannerTextStyle} bannerText={bannerText}/>
           </>
      </Layout>
    </>
  );
};

export default Home;