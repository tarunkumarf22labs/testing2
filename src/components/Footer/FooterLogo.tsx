import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <Image
      src="/images/FooterLogo.png"
      width={96}
      height={50}
      alt="LuxUnlock Footer Logo"
      className="pb-4"
    />
  );
};

export default FooterLogo;
