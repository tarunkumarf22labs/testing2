import React from 'react';
import Option from './Option';

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
}

const Navbar = (props: NavbarProps) => {
  const { options, onMenuSelectedHandler } = props;
  return (
    <ul className="flex items-center gap-2 xl:gap-5 w-full">
      {options.map((ele, idx) => {
        return (
          <Option
            title={ele.title}
            options={ele.options}
            id={idx}
            onMenuSelectedHandler={onMenuSelectedHandler}
            key={idx}
          />
        );
      })}
    </ul>
  );
};

export default Navbar;
