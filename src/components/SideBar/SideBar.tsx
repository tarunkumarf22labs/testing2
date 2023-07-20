import Link from 'next/link';
import React, { useContext } from 'react';
import { AppContext } from 'src/Context';
import { motion } from 'framer-motion';

const SideBar = () => {
  const { showSidebar, setShowSideBar } = useContext(AppContext);

  const navs = [
    { name: 'ABOUT US' },
    { name: 'CELEBRATIONS & RETREATS' },
    { name: 'THE LUXUNLOCK EXPERIENCE' }
  ];

  if (showSidebar) {
    return (
      <div
        onClick={() => setShowSideBar(false)}
        className="fixed inset-0 w-full h-full bg-black/20 z-[999]"
      >
        <motion.nav
          initial={{ x: '100%' }}
          animate={{
            x: 0
          }}
          transition={{ type: 'just' }}
          className="w-[254px] bg-white h-screen fixed right-0 top-0 z-[9999]"
        >
          <ul className="py-5">
            {navs?.map((nav) => {
              return (
                <Link href={'/'} onClick={() => setShowSideBar(false)}>
                  <p className="px-[26px] pt-5 uppercase text-[#27272A] text-xs font-[420] tracking-[0.24px]">
                    {nav.name}
                  </p>
                </Link>
              );
            })}
          </ul>
        </motion.nav>
      </div>
    );
  } else {
    return null;
  }
};

export default SideBar;
