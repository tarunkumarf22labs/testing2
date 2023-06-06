import React, { useEffect, useState } from "react";

import HeaderLogo from "./HeaderLogo";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

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
    title: "DESTINATIONS",
    options: [
      { id: 2, value: "Villas in Conoor", path: "coonoor" },
      { id: 3, value: "Villas in Chettinad", path: "chettinad" },
      { id: 4, value: "Villas in Gulf Of Mannar", path: "gulf-of-mannar" },
      { id: 5, value: "Villas in Goa", path: "goa" },
      { id: 6, value: "Villas in Kerala", path: "kerala" },
      { id: 7, value: "Villas in Kodaikanal", path: "kodaikanal" },
      { id: 8, value: "Villas in Mamallapuram", path: "mamallapuram" },
      { id: 9, value: "Villas in Ooty", path: "ooty" },
      { id: 10, value: "Villas in Pondicherry", path: "pondicherry" },
      { id: 11, value: "Villas in Sri Lanka", path: "sri-lanka" },
      { id: 12, value: "Villas in Alampara Coast", path: "alampara-coast" },
      { id: 13, value: "Villas in The Nilgiris", path: "the-nilgiris" },
      { id: 14, value: "Villas in Thirupugalpur", path: "thirupugalpur" },
      { id: 15, value: "Wayanand", path: "wayanand" },
    ],
    path: "destinations",
  },
  {
    title: "LUX LOYALITY",
    options: [],
    path: "lux-loyality",
  },
  {
    title: "JOURNAL",
    options: [],
    path: "journal",
  },
  {
    title: "HOME OWNER",
    options: [],
    path: "home-owner",
  },
  {
    title: "CONTACT US",
    options: [],
    path: "contact-us",
  },
];

function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState("");

  function changeColor() {
    window.scrollY <= 100
      ? setNavbarColor("")
      : setNavbarColor("bg-[#8A1E61] text-white");
  }
  useEffect(() => {
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeColor);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
    
      <div
        className={`hidden z-50 sticky top-0 ${navbarColor} h-16 py-6 font-[Brandon grotesque] content-center justify-between items-center text-xs sm:hidden  sm:px-3.5 md:flex xl:ml-20 xl:mr-20 2xl:ml-28 2xl:mr-28`}
      >
        <div className="h-8 ml-10 border w-36">
          <HeaderLogo />
        </div>

        <div className="flex items-center justify-between w-2/6 h-8 mr-10 md:w-3/5 lg:w-5/12 xl:w-5/12">
          <Navbar
            options={options}
            onMenuSelectedHandler={(menu) => {
              console.log(menu);
            }}
          />
        </div>
      </div>
      <hr className="sticky bg-black top-16 xl:ml-20 xl:mr-20 2xl:ml-28 2xl:mr-28 " />

      <div className="fixed w-[100%] z-[100] bg-white top-0  font-[Brandon grotesque] ${navbarColor} flex border h-16 justify-between items-center px-5  md:hidden ">
        <div className="flex items-center justify-between w-5/12 sm:w-4/12">
          {!showMobileMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
              className="w-6 h-6"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <HeaderLogo />
        </div>
      </div>
      <div className="fixed w-[100%] flex-col z-[101] top-16 bg-white top-44flex md:hidden">
        <MobileNavbar
          options={options}
          onMenuSelectedHandler={(menu: optionsInterface) => {
            console.log(menu);
          }}
          showMobileMenu={showMobileMenu}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default Topbar;
