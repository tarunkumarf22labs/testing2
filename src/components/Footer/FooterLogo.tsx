import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <Image
      src="/images/FooterLogo.png"
      width={388}
      height={299}
      alt="LuxUnlock Footer Logo"
      className="w-24 pb-4 mt-10 sm:w-36 md:w-48"
    />
  );
};

export default FooterLogo;
