import Layout from "@/components/Layout";
import type { NextPage } from "next";
import Carousal from "src/stories/Carousal";
import { HomeBannerimages } from "src/data/constants";
import Search from "src/stories/Search";
import { AppContext } from "src/Context";
import { useContext } from "react";


const Home: NextPage = () => {
  return (
    <>
      <Layout title="LuxUnlock">
           <>
           <Carousal images={HomeBannerimages} />
           </>
      </Layout>
    </>
  );
};

export default Home;
