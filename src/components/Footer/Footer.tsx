import React from "react";
import FooterLogo from "./FooterLogo";
import { DeviceMobileCamera } from "@phosphor-icons/react";

const Villas = [
  "Villas in Chettinad",
  "Villas in Goa",
  "Villas in Mallampuram",
  "Villas in Ooty",
  "Villas in Pondicherry",
  "Villas in Alampara Coast",
  "Villas in Wayanad",
  "Villas in Kerala",
  "Villas in Gulf of Mannar",
  "Villas in Nilgiris",
  "Villas in Coonoor",
  "Villas in Sri Lanka",
  "Villas in Thirupugalur",
  "Villas in Kodaikanal",
];

const QuickLinks = ["About Us", "Team", "Investors", "Travel Partners"];

const Footer = () => {
  return (
    <>
      <div className="py-8 px-5 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Footer Logo and description section */}
          <div className="flex flex-col items-center mb-14">
            <FooterLogo />
            <p className="text-white text-[#737373] text-center md:max-w-3xl">
              LuxUnLock is a specialist in designing the most enjoyable holiday
              villa experiences in India. Key to this is our ability to offer
              you the most beautiful private homes combined with our highly
              recognized curated destination experiences.
            </p>
          </div>

          {/* Villas section */}
          <div className="flex flex-col items-center relative mb-12">
            <hr className="w-full border-t border-[#737373]" />
            <h4 className="text-[#8A1E61] uppercase text-[10px] absolute top-[-10px] z-10 px-5 bg-black tracking-[0.3em] md:text-sm">
              VILLAS
            </h4>
            <div className="w-full md:w-auto grid grid-cols-2 mt-5 md:grid-cols-7 md:gap-7">
              {Villas.map((villa, idx) => (
                <p key={idx} className="mb-5 md:mb-0">
                  {villa}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Links section */}
          <div className="flex flex-col items-center relative mb-12">
            <hr className="w-full border-t border-[#737373]" />
            <h4 className="text-[#8A1E61] uppercase text-[10px] absolute top-[-10px] z-10 px-5 bg-black tracking-[0.3em] md:text-sm">
              Quick links
            </h4>
            <div className="w-full md:w-auto grid grid-cols-2 gap-x-8 justify-between mt-5 md:grid-cols-4 md:gap-7">
              {QuickLinks.map((link, idx) => (
                <p key={idx} className="mb-5 md:mb-0">
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Get in Touch section*/}
          <div>
            <div className="flex flex-col items-center relative mb-12 text-center">
              <hr className="w-full border-t border-[#737373]" />
              <h4 className="text-[#8A1E61] uppercase text-[10px] absolute top-[-10px] z-10 px-5 bg-black tracking-[0.3em] md:text-sm">
                Get in touch
              </h4>
              <p className="py-5">
                LuxUnlock Private Limited, B-4, RM Towers, 108 Chamiers Road,
                Chennai 600 018, India
              </p>
              <p className="pb-5 relative flex items-center">
                <DeviceMobileCamera className="w-6 h-6 mr-1" />
                +91 63695 55363 | +91 98400 60393
              </p>
              <p>reservations@luxunlock.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
