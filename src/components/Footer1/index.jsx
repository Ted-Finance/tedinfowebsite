import React from "react";
import { Text, Button, Img } from "./..";

export default function Footer1({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
        <Img src="images/img_group_white_a700.svg" alt="image_one" className="h-[121px]" />
        <div className="flex flex-col items-center justify-start w-full gap-[49px]">
          <div className="flex flex-row justify-center w-full">
            <ul className="flex flex-row justify-between w-[24%]">
              <li>
                <a href="#">
                  <Text as="p">Home</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Careers</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">About</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Security</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="h-px w-full bg-gray-900_04" />
          <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
            <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
              <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_one" className="h-[24px] w-[24px]" />
              <Text as="p">info@tedfinance.com</Text>
            </div>
            <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
              <Img src="images/img_icon_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
              <Text as="p">+234 812 235 7728</Text>
            </div>
            <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
              <Img src="images/img_icon_5.svg" alt="icon_five" className="h-[24px] w-[24px]" />
              <Text as="p" className="w-[91%]">
                <>
                  23, Science Road, Unilag Estate,
                  <br />
                  Magodo GRA 1, Lagos State.
                </>
              </Text>
            </div>
          </div>
          <div className="h-px w-full bg-gray-900_04" />
          <div className="flex flex-row md:flex-col justify-between items-center w-full p-4 md:gap-10 border-gray-900_04 border border-solid bg-gray-900 rounded-[42px]">
            <div className="flex flex-row justify-start gap-3.5">
              <Button color="lime_500" shape="circle" className="w-[52px]">
                <Img src="images/img_icon_gray_900_04.svg" />
              </Button>
              <Button color="lime_500" shape="circle" className="w-[52px]">
                <Img src="images/img_icon_gray_900_04_52x52.svg" />
              </Button>
              <Button color="lime_500" shape="circle" className="w-[52px]">
                <Img src="images/img_button.svg" />
              </Button>
            </div>
            <Text as="p" className="!text-gray-400 !font-light">
              TedFinance All Rights Reserved
            </Text>
            <div className="flex flex-row justify-start items-center w-[21%] md:w-full mr-3.5 gap-3">
              <a href="#">
                <Text as="p" className="!text-gray-400 !font-light">
                  Privacy Policy
                </Text>
              </a>
              <div className="h-[27px] w-px bg-gray-400" />
              <a href="#">
                <Text as="p" className="!text-gray-400 !font-light">
                  Terms of Service
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
