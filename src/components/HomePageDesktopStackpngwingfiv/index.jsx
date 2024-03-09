import React from "react";
import { Img, Button, Text } from "./..";

export default function HomePageDesktopStackpngwingfiv({
  cardholder = "Card Holder Name",
  tedfinance = "Ted Finance ",
  expdate = "Exp Date",
  cvv = "CVV",
  prop = "**/**",
  prop1 = "***",
  fivethousandsix = "5064 **** **** **** 2031",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src="images/img_pngwing_5.png"
        alt="pngwingfive_one"
        className="justify-center h-[341px] w-[66%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
      />
      <div className="flex flex-row justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="h-[331px] w-full sm:w-full relative">
              <div className="flex flex-row sm:flex-col justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto sm:gap-5 absolute">
                <div className="h-[121px] w-[28%] md:w-full z-[1] relative">
                  <Img
                    src="images/img_vector_121x148.png"
                    alt="vector_one"
                    className="justify-center h-[121px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-center justify-start w-[46%] gap-[7px] bottom-[32%] right-[24%] m-auto absolute">
                    <Text size="xs" as="p" className="!text-white-A700 !font-poppins">
                      {cardholder}
                    </Text>
                    <Text size="lg" as="p" className="!text-white-A700 !font-poppins">
                      {tedfinance}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-end w-full sm:w-full ml-[-145px] gap-20 p-[29px] sm:ml-0 sm:p-5 border border-solid purple_A100_02_cyan_A400_border bg-gradient shadow-md rounded-[15px]">
                  <Img src="images/img_vector_white_a700.svg" alt="vector_three" className="h-[27px] mt-2 mr-4" />
                  <div className="flex flex-col items-center justify-start h-[38px] w-[38px] mr-[408px] md:mr-5">
                    <div className="flex flex-col items-center justify-start h-[38px] w-[38px] rotate-[180deg] shadow-lg">
                      <Img src="images/img_wifi.svg" alt="wifi_one" className="h-[38px] w-[38px]" />
                    </div>
                  </div>
                  <Button color="green_500" size="sm" className="w-[33px] rounded-[16px]">
                    <Img src="images/img_group_1000002055.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[19%] gap-1 bottom-[14%] right-[29%] m-auto absolute">
                <div className="flex flex-row justify-between w-[98%] md:w-full">
                  <Text size="xs" as="p" className="mt-px !text-white-A700 !font-poppins">
                    {expdate}
                  </Text>
                  <Text size="xs" as="p" className="!text-white-A700 !font-poppins">
                    {cvv}
                  </Text>
                </div>
                <div className="flex flex-row justify-between w-full">
                  <Text size="lg" as="p" className="mt-px !text-white-A700 !font-poppins">
                    {prop}
                  </Text>
                  <Text size="lg" as="p" className="h-[17px] !text-white-A700 !font-poppins">
                    {prop1}
                  </Text>
                </div>
              </div>
              <Text
                size="2xl"
                as="p"
                className="bottom-[43%] left-[20%] m-auto !text-white-A700 tracking-[1.30px] !font-poppins absolute"
              >
                {fivethousandsix}
              </Text>
              <div className="flex flex-row sm:flex-col justify-center items-start w-max h-max left-0 bottom-0 right-0 top-0 m-auto sm:gap-5 absolute">
                <div className="flex flex-row sm:flex-col justify-center items-center w-[86%] sm:w-full sm:gap-5">
                  <Img
                    src="images/img_pngwing_2.png"
                    alt="pngwingtwo_one"
                    className="w-[27%] md:h-auto sm:w-full z-[1] object-cover"
                  />
                  <div className="flex flex-row justify-center items-start w-[93%] sm:w-full ml-[-77px] sm:ml-0">
                    <Img src="images/img_group.svg" alt="image_four" className="h-[60px] mt-4" />
                    <Img
                      src="images/img_pngwing_5.png"
                      alt="pngwingthree"
                      className="w-[87%] md:h-auto sm:w-full ml-[-33px] object-cover"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_mastercard_logo.png"
                  alt="mastercardlogo"
                  className="w-[24%] md:h-auto sm:w-full mt-[11px] ml-[-46px] sm:ml-0 sm:mt-0 object-cover"
                />
              </div>
              <div className="flex flex-row sm:flex-col justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto sm:gap-5 absolute">
                <Img
                  src="images/img_vector_121x148.png"
                  alt="vector_five"
                  className="w-[28%] md:h-auto sm:w-full z-[1] object-cover"
                />
                <div className="flex flex-row justify-end w-full sm:w-full ml-[-145px] p-[29px] sm:ml-0 sm:p-5 border border-solid purple_A100_02_cyan_A400_border bg-gradient1 shadow-md rounded-[15px]">
                  <div className="flex flex-row justify-between items-center w-[97%] mt-2">
                    <div className="flex flex-col items-center justify-start h-[38px] w-[38px]">
                      <div className="flex flex-col items-center justify-start h-[38px] w-[38px] rotate-[180deg] shadow-lg">
                        <Img src="images/img_wifi.svg" alt="wifi_three" className="h-[38px] w-[38px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[23%] gap-[195px]">
                      <div className="h-[32px] w-[88%] md:w-full relative">
                        <Img
                          src="images/img_vector_27x87.png"
                          alt="vector_seven"
                          className="h-[27px] w-[97%] sm:w-full bottom-0 right-0 left-0 m-auto object-cover absolute"
                        />
                        <Img
                          src="images/img_vector_white_a700.svg"
                          alt="vector_nine"
                          className="h-[27px] top-0 right-0 left-0 m-auto absolute"
                        />
                      </div>
                      <Button color="green_500" size="sm" className="w-[33px] ml-[69px] md:ml-5 rounded-[16px]">
                        <Img src="images/img_group_1000002055.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group.svg"
                alt="image_five"
                className="h-[60px] left-[9%] top-[8%] m-auto absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
