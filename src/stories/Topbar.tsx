import React, { useContext, useEffect, useState } from 'react';

import HeaderLogo from './HeaderLogo';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';
import { Container } from './Container';
import { Equals } from '@phosphor-icons/react';
import { AppContext } from 'src/Context';

interface optionsInterface {
  id: number;
  value: string;
  path: string;
}
interface IMenu {
  title: string;
  options: optionsInterface[];
  path: string;
}

const options: IMenu[] = [
  {
    title: 'DESTINATIONS',
    options: [
      { id: 2, value: 'Villas in Conoor', path: 'coonoor' },
      { id: 3, value: 'Villas in Chettinad', path: 'chettinad' },
      { id: 4, value: 'Villas in Gulf Of Mannar', path: 'gulf-of-mannar' },
      { id: 5, value: 'Villas in Goa', path: 'goa' },
      { id: 6, value: 'Villas in Kerala', path: 'kerala' },
      { id: 7, value: 'Villas in Kodaikanal', path: 'kodaikanal' },
      { id: 8, value: 'Villas in Mamallapuram', path: 'mamallapuram' },
      { id: 9, value: 'Villas in Ooty', path: 'ooty' },
      { id: 10, value: 'Villas in Pondicherry', path: 'pondicherry' },
      { id: 11, value: 'Villas in Sri Lanka', path: 'sri-lanka' },
      { id: 12, value: 'Villas in Alampara Coast', path: 'alampara-coast' },
      { id: 13, value: 'Villas in The Nilgiris', path: 'the-nilgiris' },
      { id: 14, value: 'Villas in Thirupugalpur', path: 'thirupugalpur' },
      { id: 15, value: 'Wayanand', path: 'wayanand' }
    ],
    path: 'destinations'
  },
  {
    title: 'LUX LOYALITY',
    options: [],
    path: 'lux-loyality'
  },
  {
    title: 'JOURNAL',
    options: [],
    path: 'journal'
  },
  {
    title: 'HOME OWNER',
    options: [],
    path: 'home-owner'
  },
  {
    title: 'CONTACT US',
    options: [],
    path: 'contact-us'
  }
];

function Topbar({ animateHeader = true }: { animateHeader: boolean }) {
  const { setShowSideBar } = useContext(AppContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState('text-white');
  const [headerLogo, setHeaderLogo] = useState('/images/logo_white.svg');
  const [animate, setAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState('');

  const { setShowLoginPopup, showLoginPopup } = useContext(AppContext);
  const scrolledNavClass = 'bg-white shadow-sm text-[#8A1E61] group isScrolled';

  useEffect(() => {
    function changeColor() {
      if (window?.scrollY > 100) {
        setScrolled(true);
        setHeaderLogo('/images/logo_primary.svg');
        setNavbarColor(scrolledNavClass);
      } else {
        setScrolled(false);
        setHeaderLogo('/images/logo_white.svg');
        setNavbarColor('text-white');
      }
    }
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeColor);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 300); // Start animation after 2000 milliseconds (2 seconds)

    return () => {
      clearTimeout(timeout);
      setAnimate(false);
    }; // Clean up the timeout on component unmount
  }, []);

  useEffect(() => {
    let token = localStorage.getItem('luxunlock_login');
    setToken(token);
  }, [showLoginPopup]);

  return (
    <>
      <div
        className={`hidden animate-fade-in-down z-50 sticky top-0 ${
          animateHeader ? navbarColor : scrolledNavClass
        } h-[100px] font-bold lg:block text-[#8A1E61] `}
      >
        <Container
          bgTransparent
          className="h-full"
          innerContainerClassName={`flex h-full font-[Brandon grotesque] content-center justify-between items-center text-xs py-0 lg:py-0`}
        >
          <HeaderLogo logoUrl={headerLogo} />
          <div className="flex items-center justify-between h-8 gap-2 xl:gap-5">
            <Navbar options={options} onMenuSelectedHandler={(menu) => {}} />
            {token === null || token?.length === 0 ? (
              <div
                className="uppercase cursor-pointer bg-[#8A1E61] text-white text-center pl-10 pr-10 pt-2 pb-2 text-xs "
                onClick={() => {
                  setShowLoginPopup(!showLoginPopup);
                }}
              >
                {'LOGIN'}
              </div>
            ) : (
              <div
                className="uppercase cursor-pointer bg-[#8A1E61] text-white text-center pl-10 pr-10 pt-2 pb-2 text-xs "
                onClick={() => {
                  // setShowLoginPopup(!showLoginPopup);
                  localStorage.removeItem('luxunlock_login');
                  setToken('');
                }}
              >
                {'LOGOUT'}
              </div>
            )}
            <button onClick={() => setShowSideBar(true)}>
              <Equals size={24} />
            </button>
          </div>
        </Container>
      </div>
      {animateHeader === false || scrolled ? null : (
        <div
          className={`hidden lg:block ${
            animate ? 'block animate-fade-in-down' : 'hidden'
          }  duration-75 animate-fade-in-down sticky top-[100px] z-[150] w-full ${
            navbarColor == 'text-white' ? '' : 'hidden'
          }`}
        >
          <hr
            className={`h-[2px] bg-white flex justify-center max-w-7xl mx-auto my-0`}
          />
        </div>
      )}
      {/* ${animate ? 'animate-spin' : ''} */}
      <div className="fixed w-[100%] z-[100] bg-white top-0  font-[Brandon grotesque] ${navbarColor} flex border h-16 justify-between items-center px-5  lg:hidden  ">
        <div className="flex items-center justify-between w-5/12 sm:w-4/12">
          {!showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 font-bold"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <div className="ml-3">
            <HeaderLogo logoUrl={'/images/logo_primary.svg'} />
          </div>
        </div>
      </div>
      <div className="fixed w-[100%] flex-col z-[101] top-16 flex lg:hidden">
        <MobileNavbar
          options={options}
          onMenuSelectedHandler={(menu: optionsInterface) => {}}
          showMobileMenu={showMobileMenu}
        />
      </div>
    </>
  );
}

export default Topbar;
