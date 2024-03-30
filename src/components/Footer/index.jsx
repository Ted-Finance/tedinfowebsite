import React from "react";
import { Text, Button, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="justify-center items-center w-full mt-[40px] xl:p-[50px] p-5 z-[1] bg-[#260426]">
        <div className="flex flex-col items-center justify-center lg:w-[87%] w-full gap-[50px] 2xl:ml-[9rem] lg:ml-[5rem]">
          <Img src="images/footer-logo.svg" alt="image_six" className="" />
          <div className="flex flex-col items-center justify-start w-full gap-[20px]">
            <div className="flex flex-row justify-center w-full">
              <ul className="flex flex-col md:flex-row justify-between xl:w-[50%] w-[90%] font-normal text-[14px] text-center text-align-center lg:text-left">
                <li>
                  <Text as="p" className="!font-medium !text-[15px] !text-[#5BEBFF]">Products</Text>
                  <a href="/sendreceivemoney">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Send Money</Text>
                  </a>
                  <a href="/multicurrency">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Multicurrency Account</Text>
                  </a>
                  <a href="/exchange">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Currency Exchange</Text>
                  </a>
                  <a href="/virtualcard">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Virtual Dollar Card</Text>
                  </a>
                  <a href="/investment">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Investment</Text>
                  </a>
                </li>
                <li>
                  <Text as="p" className="!font-medium !text-[15px] !text-[#5BEBFF]">Learn</Text>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Blog</Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Support</Text>
                  </a>
                  <a href="/useted">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">How to use Wallet</Text>
                  </a>
                </li>
                <li>
                  <Text as="p" className="!font-medium !text-[15px] !text-[#5BEBFF]">Company</Text>
                  <a href="/about">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">About Us</Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Contact Us</Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Chat Us</Text>
                  </a>
                </li>
                <li>
                  <Text as="p" className="!font-medium !text-[15px] !text-[#5BEBFF]">Legal</Text>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Service Terms</Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">App Use Policy</Text>
                  </a>
                  <a href="#">
                    <Text as="p" className="!font-normal !text-[12px] !text-[#E4E4E7]">Privacy Policy</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row">
              <Img src="images/applestore.svg" alt="applestore" className="lg:w-[200px] lg:h-[101px]" />
              <Img src="images/playstore.svg" alt="playstore" className="lg:w-[200px] lg:h-[101px] lg:mt-[-0.1rem]" />
            </div>
            <div className="h-px w-full bg-[#260426]" />
            <div className="flex lg:flex-row flex-col justify-start items-center w-full 2xl:pl-[280px] xl:pl-[150px] xl:pr-0 lg:pl-[86px]  md:pl-[32px] pr-14 gap-5 px-5 xl:gap-[4.25rem]">
              <div className="flex flex-row md:hidden">
                <div className="flex flex-row justify-start items-center xl:w-[22%] w-full gap-1.5">
                  <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[18px] w-[18px]" />
                  <Text as="p" className="text-center text-align-center font-normal text-[10px]">info@tedfinance.com</Text>
                </div>
                <div className="flex flex-row justify-start items-center xl:w-[19%] w-full gap-1.5 pl-[1rem]">
                  <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[18px] w-[18px]" />
                  <Text as="p" className="text-center text-align-center font-normal text-[10px]">+234 812 235 7728</Text>
                </div>
              </div>
              <div className="md:block hidden">
                <div className="flex flex-row justify-start items-center xl:w-[22%] w-full gap-1.5">
                  <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="text-center text-align-center font-normal text-[15px]">info@tedfinance.com</Text>
                </div>
              </div>
              <div className="md:block hidden">
                <div className="flex flex-row justify-start items-center w-full gap-1.5">
                  <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                  <Text as="p" className="text-center text-align-center font-normal text-[15px]">+234 812 235 7728</Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center xl:w-[31%] lg:w-[40%] md:w-[45%] w-full gap-1.5">
                <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
                <Text as="p" className="w-[100%] text-center text-align-center pt-[1rem] md:pt-0 font-normal text-[10px] md:text-[15px] lg:text-left">
                  <>
                    23, Science Road, Unilag Estate,
                    Magodo GRA 1, Lagos State.
                  </>
                </Text>
              </div>
            </div>
            <div className="h-px w-full bg-[#260426]" />
            <div className="flex lg:flex-row flex-col justify-between items-center w-full p-4 gap-10 border-[#260426] border border-solid bg-[#260426] rounded-[42px]">
              <div className="flex flex-row justify-start gap-3.5">
                <Button color="" shape="circle" className="w-[52px] bg-[#5BEBFF]">
                  <Img src="images/img_icon_gray_900_04.svg" />
                </Button>
                <Button color="" shape="circle" className="w-[52px] bg-[#5BEBFF]">
                  <Img src="images/img_icon_gray_900_04_52x52.svg" />
                </Button>
                <Button color="" shape="circle" className="w-[52px] bg-[#5BEBFF]">
                  <Img src="images/img_button.svg" />
                </Button>
              </div>
              <Text as="p" className="!text-gray-400 xl:!font-light font-normal text-[15px]">
                TedFinance All Rights Reserved
              </Text>
              <div className="flex flex-row justify-start items-center 2xl:w-[21%] xl:w-[25%] w-full 2xl:mr-3.5 xl:mr-3.5 lg:mr-[-35rem] md:mr-[-28rem] mr-[-7rem] gap-3">
                <a href="#">
                  <Text as="p" className="!text-gray-400 xl:!font-light  text-center text-align-center w-full font-normal text-[15px] lg:text-left">
                    Privacy Policy
                  </Text>
                </a>
                <div className="h-[27px] w-px bg-gray-400" />
                <a href="#">
                  <Text as="p" className="!text-gray-400 xl:!font-light lg:text-left text-center text-align-center w-full font-normal text-[15px]">
                    Terms of Service
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
