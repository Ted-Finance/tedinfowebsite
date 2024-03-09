import React from "react";
import { Text, Button, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <Img src="images/img_group_150x207.svg" alt="image" className="h-[164px]" />
      <div className="flex flex-row md:flex-col justify-between items-center w-full mt-[37px] mx-auto md:gap-10 md:px-5 max-w-[900px]">
        <div className="flex flex-row sm:flex-col justify-between w-auto gap-[27px] sm:gap-10">
          <a
            href="#"
            className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 sm:px-5 bg-purple-400 rounded-[25px]"
          >
            <Text as="p" className="!text-white-A700">
              Home
            </Text>
          </a>
          <a
            href="#"
            className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 sm:px-5 bg-purple-400 rounded-[25px]"
          >
            <Text as="p" className="!text-white-A700">
              Products
            </Text>
          </a>
          <Button size="md" shape="round" className="sm:px-5 min-w-[99px] !rounded-[25px]">
            Learn
          </Button>
          <Button size="md" shape="round" className="sm:px-5 min-w-[132px] !rounded-[25px]">
            Company
          </Button>
        </div>
        <ul className="flex flex-row justify-start items-center gap-[30px]">
          <li>
            <a href="#" className="cursor-pointer hover:bg-light_blue-300">
              <Text as="p" className="!text-gray-900_01">
                Sign Up
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center w-[110px] h-[55px] px-[30px] py-4 sm:px-5 bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-gray-900_01 hover:font-normal"
            >
              <Text as="p" className="!text-gray-900_05 !font-medium">
                Login
              </Text>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
