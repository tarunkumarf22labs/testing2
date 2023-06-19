import React, { useState } from "react";
import Filter from "src/stories/Filter/Filter";
import GalleryView from "src/stories/GalleryView/GalleryView";
import logo from "../../../public/images/Minto1.jpg";
import logo2 from "../../../public/images/Minto2.jpg";
import { HomeBannerimages } from "src/data/constants";
import Layout from "../Layout";
import Carousel from "src/stories/Carousel";
import Image from "next/image";
// import Sponser from "../Sponser/Sponser";
// import Modal from "src/stories/modal/Modal";
// import VillaDetails from "../VillaDetails/VillaDetails";

export default function ImageGallery() {
  const [isModalOpen, setModalOpen] = useState(false);

  const bannerImageStyle = "h-[410px] sm:h-[500px] md:h-[650px] lg:h-[810px]";
  const bannerTextStyle =
    "text-[#F8F8F9] absolute top-[35%] sm:top-[30%] left-[50%] z-[48] w-1/2 md:w-[50%] xl:w-[45%]";
  const bannerText = "UNLOCK THE LUXURY WITH LUXUNLOCK";

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Layout title="LuxUnlock">
        <div>
          <Carousel
            images={HomeBannerimages}
            bannerImageStyle={bannerImageStyle}
            bannerTextStyle={bannerTextStyle}
            bannerText={bannerText}
          />
          <div className="bg-[#F8F8F9] py-16">
            <Filter
              options={[
                "all",
                "exterior",
                "living",
                "bedrooms",
                "bathrooms",
                "common areas",
              ]}
            />
            <GalleryView
              data={[
                {
                  title: "Verandah with master bedroom",
                  url: logo,
                  type: "exterior",
                  onClick: toggleModal,
                },
                {
                  title: "Sitout with swing",
                  url: logo,
                  type: "living",
                  onClick: toggleModal,
                },
                {
                  title: "Entrance to the villa from the side",
                  url: logo2,
                  type: "bathrooms",
                  onClick: toggleModal,
                },
                {
                  title: "Entrance to the villa from the side",
                  url: logo2,
                  type: "bathrooms",
                  onClick: toggleModal,
                },
                {
                  title: "Entrance to the villa from the side",
                  url: logo2,
                  type: "bathrooms",
                  onClick: toggleModal,
                },
              ]}
            />
          </div>
         <Sponser/>
        </div>         
      </Layout>

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={"Verandah with master bedroom"}
      >
        <Image src={logo2} alt="" />
      </Modal>

      {/* <VillaDetails/> */}
    </div>
  );
}
