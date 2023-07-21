import React, { useContext, useEffect, useState } from 'react';
import MobileNavOptions from './MobileNavOptions';
import { AppContext } from 'src/Context';

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
  const [token, setToken] = useState('');

  const { setShowLoginPopup, showLoginPopup } = useContext(AppContext);

  useEffect(() => {
    let token = localStorage.getItem('luxunlock_login');
    setToken(token);
  }, [showLoginPopup]);
  return (
    <>
      {showMobileMenu && (
        <div className="flex flex-col duration-100 bg-white lg:hidden animate-fade-in-down">
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
          <div className="text-[#8A1E61] flex items-center justify-start h-12 p-2 text-xs font-bold cursor-pointer ">
            {/* <Image src={googleIcon} height={28} width={28} alt="google icon" /> */}
            {/* <div className='bg-[#8A1E61] text-white text-center pl-10 pr-10 pt-2 pb-2 text-xs'>
            LOGIN
            </div> */}
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
            {/* <p className="ml-4 text-xs">Authenticate Your Account</p> */}
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNavbar;
