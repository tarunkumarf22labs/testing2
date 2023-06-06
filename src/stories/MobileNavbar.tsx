import React from "react";
import MobileNavOptions from "./MobileNavOptions";

interface optionsInterface {
  id: number;
  value: string;
  path: string;
}
interface IMenuContent {
  title: string;
  options: optionsInterface[];
}

interface NavbarProps {
  options: IMenuContent[];
  onMenuSelectedHandler: (menu: optionsInterface) => void;
  showMobileMenu: boolean;
}

function MobileNavbar(props: NavbarProps) {
  const { options, onMenuSelectedHandler, showMobileMenu } = props;
  console.log(options, onMenuSelectedHandler, showMobileMenu);
  return (
    <>
      {showMobileMenu && (
        <div className="flex flex-col md:hidden">
          {options.map((ele, idx) => {
            return (
              <MobileNavOptions
                title={ele.title}
                options={ele.options}
                id={idx}
                onMenuSelectedHandler={onMenuSelectedHandler}
                key={idx}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
