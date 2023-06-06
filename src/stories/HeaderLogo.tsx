import React from "react";
import Image from "next/image";

function HeaderLogo() {
  return (
    <Image
      src="/images/Logo.png"
      width={138}
      height={26}
      alt="Lux Unlock Logo"
      className="md:w-40 md:h-8"
    />
  );
}

export default HeaderLogo;
