import React from "react";
import { Button, Img, Text } from "..";

export default function TopFooter({ ...props }) {



  return (
    <>
      <header {...props}>
        <div className="flex flex-row justify-start w-full lg:pb-14 pb-5 border border-solid lime_500_33_lime_500_33_border bg-[#420442] rounded-[20px] mt-[4rem] lg:h-[254px]">
          <div className="flex lg:flex-row flex-col justify-between items-center w-full mx-auto gap-10 px-5">
            <div className="flex flex-row justify-center lg:w-[70%] w-full">
              <div className="flex lg:flex-row flex-col justify-center items-center w-full gap-5">
                <Img
                  src="images/img_abstract_design_298x283.png"
                  alt="abstractdesign"
                  className="lg:w-[25%] w-full h-[208px] object-cover"
                />
                <div className="flex flex-col items-center justify-start 2xl:w-[92%] w-full lg:mr-[-27rem] lg:ml-[-550px] xl:mr-[-30rem] gap-3.5 ml-0 mt-[-12rem] 2xl:mt-0 xl:mt-0 lg:mt-0">
                  <Text size="11xl" as="p" className="!text-light_blue-300 leading-[150%] w-full text-[28px] 2xl:text-[30px] flex flex-row">
                    <span className="text-light_blue-300  lg:block hidden">Start your financial journey with </span>
                    <span className="text-white-A700 2xl:ml-3 ml-1  lg:block  hidden">TedFinance today!</span>
                    <span className="text-white-A700  text-center  text-align-center text-[28px] font-normal lg:hidden block">Start your financial journey with TedFinance today!</span>
                  </Text>
                  <Text size="5xl" as="p" className=" lg:!text-[#FFFFFF] w-full text-[14px] font-light text-center text-align-center  lg:text-left !text-purple-400 mt-[1rem] 2xl:mt-0 xl:mt-0">
                    Ready to take control of your finances? Join Ted Finance now, and let us help you achieve your
                    financial goals with our tailored solutions and exceptional support to empower your financial success.
                  </Text>
                </div>
              </div>
            </div>
            <Button color="white_A700" size="4xl" className="lg:mr-[3rem] text-[#420442] px-5 font-medium min-w-[160px] rounded-[31px] text-[18px] text-center text-align-center lg:text-left">
              Open Account
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
