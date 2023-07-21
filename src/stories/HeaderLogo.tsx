import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function HeaderLogo({ logoUrl }: { logoUrl: string }) {
  return (
    <Link href={'/'}>
      <Image
        src={logoUrl}
        width={0}
        height={0}
        sizes="100vw"
        alt="Lux Unlock Logo"
        className="object-contain w-[128px] h-[26px] xl:w-[208px] md:h-[38px]"
      />
    </Link>
  );
}

export default HeaderLogo;
