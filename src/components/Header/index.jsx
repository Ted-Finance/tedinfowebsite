import React, { useState, useRef } from "react";
import { Button, Img, ProductDropDown, HambugerMenu } from "./..";
import { Link, useLocation } from "react-router-dom";

export default function Header({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHam, setIsOpenHam] = useState(false);
  const dropdownRef = useRef(null);
  const mambugerRef = useRef(null);
  const location = useLocation();

  const isHomeRoute = location.pathname === '/' || location.pathname === '/home';


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHambugerMenu = () => {
    setIsOpenHam(!isOpenHam);
  };


  return (
    <>
      <header {...props}>
        <div className="flex flex-row justify-between items-center gap-10 relative mt-[20px] lg:mt-[40px] 2xl:mx-[8rem] xl:mx-[5rem] mx-[2rem]">
          <Img src="images/site-logo.png" alt="logo" className="lg:w-[103px] w-[51.59px] lg:h-[65.89px] h-33px]" />
          <Button
            color=""
            size="4xl"
            rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
            className="cursor-pointer rounded-[27px] relative block lg:hidden"
            onClick={toggleHambugerMenu}
          />
          <div className="lg:block hidden">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between w-full gap-[0.5rem] 2xl:mr-[14rem] xl:mr-[10rem] lg:mr-[5rem]">
                <a
                  href="/"
                  className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 cursor-pointer bg-purple-400 rounded-[25px]"
                >
                  <p className="!text-white-A700 !font-normal text-[15px]">Home</p>
                </a>
                <div
                  className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 cursor-pointer bg-purple-400 rounded-[25px]"
                  onClick={toggleMenu}
                >
                  <p className="!text-white-A700 !font-normal text-[15px]">Products</p>
                </div>
                <Link to="/useted">
                  <div className="flex flex-row justify-center w-[100px] h-[51px] px-6 py-3.5 bg-purple-400 rounded-[25px]">
                    <p className="!text-white-A700 cursor-pointer !font-normal text-[15px]">Learn</p>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="flex flex-row justify-center w-[100px] h-[51px] px-6 py-3 bg-purple-400 rounded-[25px]">
                    <p className="mt-1 !text-white-A700 cursor-pointer !font-normal text-[15px]">Company</p>
                  </div>
                </Link>
              </div>
              <div className="">
                <ul className="flex flex-row justify-start items-center gap-[0.5rem]">
                  <li>
                    <a href="#" className="cursor-pointer hover:bg-light_blue-300 flex justify-center items-center  w-[110px] hover:h-[55px] hover:rounded-[27px] font-normal">
                      <p className={`!font-normal !text-${isHomeRoute ? 'white-A700' : '#420442'} text-[18px]`}>Sign Up</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-center items-center  w-[110px] h-[55px] px-[30px] py-4  bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-white-A700 font-normal"
                    >
                      <p className="!text-gray-900_05 !font-normal text-[18px]">Login</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full lg:left-[2rem] xl:left-[6rem] 2xl:left-[22rem] z-[2] bg-white-A700 rounded-lg shadow-lg mt-[5px] w-[399px] h-[511px]"
            >
              <ProductDropDown toggleMenu={toggleMenu} />
            </div>
          )}
          {isOpenHam && (
            <div
              ref={mambugerRef}
              className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg md:min-h-[55vh] min-h-[55vh] w-[100vw] mt-[-6rem] ml-[-2rem]"
            >
              <HambugerMenu toggleMenu={toggleHambugerMenu} />
            </div>
          )}
        </div>
      </header>
    </>
  );
}
