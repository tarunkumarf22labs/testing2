import React from 'react';
import Image from 'next/image';

function HeaderLogo({ logoUrl }: { logoUrl: string }) {
  return (
    <Image
      src={logoUrl}
      width={0}
      height={0}
      sizes="100vw"
      alt="Lux Unlock Logo"
      className="object-contain w-[128px] h-[26px] md:w-[208px] md:h-[38px]"
    />
  );
}

export default HeaderLogo;
