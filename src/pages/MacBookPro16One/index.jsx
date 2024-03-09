import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";

export default function MacBookPro16OnePage() {
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[19px] p-[42px] md:p-5 bg-gradient2">
        <header className="flex flex-row md:flex-col justify-between items-center w-[84%] md:gap-10">
          <Img src="images/img_group_150x207.svg" alt="image" className="h-[183px]" />
          <div className="flex flex-col items-start justify-start w-full gap-[86px] mx-auto md:px-5 max-w-[964px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-row sm:flex-col justify-between w-[56%] md:w-full sm:gap-10">
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
                <div className="flex flex-row justify-center p-[13px] bg-purple-400 rounded-[25px]">
                  <Text as="p" className="!text-white-A700">
                    Learn
                  </Text>
                </div>
                <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
                  <Text as="p" className="mt-1 !text-white-A700">
                    Company
                  </Text>
                </div>
              </div>
              <ul className="flex flex-row justify-start items-center gap-[30px]">
                <li>
                  <a href="#" className="cursor-pointer hover:bg-light_blue-300">
                    <Text as="p" className="!text-white-A700">
                      Sign Up
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-center items-center w-[110px] h-[55px] px-[30px] py-4 sm:px-5 bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-white-A700 hover:font-normal"
                  >
                    <Text as="p" className="!text-gray-900_05 !font-medium">
                      Login
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <Text
              size="8xl"
              as="p"
              className="ml-[3px] md:ml-0 !text-white-A700 tracking-[0.25px] !font-poppins text-center"
            >
              Stay tuned for something amazing
            </Text>
          </div>
        </header>
        <div className="flex flex-row justify-center w-[54%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              size="11xl"
              as="p"
              className="!text-black-900_02 tracking-[0.40px] !font-poppins text-center !font-medium"
            >
              WE ARE COMING SOON!!
            </Text>
            <div className="h-[545px] w-full mt-2 relative">
              <div className="flex flex-row sm:flex-col justify-start items-center w-[37%] bottom-0 left-[23%] m-auto sm:gap-5 absolute">
                <div className="flex flex-row justify-start items-center w-[98%] sm:w-full">
                  <Img src="images/img_bitcoin_logo.svg" alt="bitcoinlogo_one" className="h-[89px] w-[89px]" />
                  <Img src="images/img_currency.svg" alt="currency_one" className="h-[250px] w-[250px] ml-[-24px]" />
                </div>
                <Img src="images/img_path0.svg" alt="pathzero_one" className="h-[65px] ml-[-33px] sm:ml-0" />
              </div>
              <div className="flex flex-col items-end justify-start w-[82%] left-0 top-[5%] m-auto absolute">
                <div className="flex flex-row md:flex-col justify-end items-center w-full md:gap-5">
                  <Img
                    src="images/img_currency_teal_a700.svg"
                    alt="currency_three"
                    className="h-[183px] w-[183px] z-[1]"
                  />
                  <div className="flex flex-col items-start justify-start w-[83%] md:w-full ml-[-56px] gap-1 md:ml-0">
                    <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                      <div className="flex flex-row justify-between items-center w-[71%] md:w-full ml-[117px] md:ml-5 z-[1]">
                        <div className="flex flex-col items-start justify-start w-[5%] gap-[61px]">
                          <Img
                            src="images/img_confetti_triangle.svg"
                            alt="confetti_one"
                            className="h-[16px] ml-px md:ml-0"
                          />
                          <div className="h-[9px] w-[58%] bg-deep_purple-A100 rounded-[5px]" />
                        </div>
                        <Img src="images/img_confetti_arch.svg" alt="confettiarch" className="h-[11px]" />
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between items-start w-full mt-[-4px] sm:gap-10">
                        <Img
                          src="images/img_arrow_left_gray_300_01.svg"
                          alt="arrowleft_one"
                          className="h-[24px] w-[24px] mt-[23px] sm:mt-0"
                        />
                        <div className="h-[203px] w-[90%] sm:w-full relative">
                          <Img
                            src="images/img_undraw_on_the_way_re_swjt.svg"
                            alt="undrawonthe_one"
                            className="justify-center h-[203px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Img
                            src="images/img_confetti_ribbon.png"
                            alt="confettiribbon"
                            className="h-[37px] w-[6%] sm:w-full right-[1%] top-[20%] m-auto object-cover absolute"
                          />
                        </div>
                      </div>
                      <div className="h-[18px] w-[3%] mt-[67px] ml-[39px] md:ml-0 sm:ml-5 bg-gray-300_01" />
                    </div>
                    <Img
                      src="images/img_confetti_circle.svg"
                      alt="image_one"
                      className="h-[24px] w-[24px] ml-[563px] md:ml-5"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_vector_teal_a400.svg"
                  alt="vector_one"
                  className="h-[116px] w-[117px] mt-[-86px] mr-[68px] md:mr-5 z-[1]"
                />
              </div>
              <Img
                src="images/img_currency_deep_purple_800.svg"
                alt="currency_five"
                className="h-[150px] w-[150px] right-[9%] top-0 m-auto absolute"
              />
              <Img
                src="images/img_currency_pink_300_01.svg"
                alt="currency_seven"
                className="h-[150px] w-[150px] bottom-[15%] right-0 m-auto absolute"
              />
            </div>
            <div className="flex flex-row justify-center w-[41%] md:w-full mt-[27px] pb-[9px]">
              <div className="flex flex-row justify-between items-center w-full p-[3px] border-gray-300 border border-solid bg-white-A700 rounded-lg">
                <Text size="md" as="p" className="ml-[9px] !text-gray-600 tracking-[0.10px] !font-poppins">
                  Email
                </Text>
                <Button
                  size="xs"
                  className="rounded-tr-lg rounded-br-lg tracking-[0.12px] font-poppins font-bold min-w-[86px]"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <Text size="md" as="p" className="mt-[11px] !text-black-900_02 tracking-[0.10px] !font-poppins">
              Subscribe to our mailing list to get latest updates
            </Text>
            <div className="flex flex-row justify-between w-[54%] md:w-full mt-[22px]">
              <Button shape="square" className="w-[52px]">
                <Img src="images/img_icons_facebook.png" />
              </Button>
              <Button shape="square" className="w-[52px]">
                <Img src="images/img_icons_twitter.png" />
              </Button>
              <Button shape="square" className="w-[52px]">
                <Img src="images/img_icons_snapchat.png" />
              </Button>
              <Button shape="square" className="w-[52px]">
                <Img src="images/img_icons_instagram.png" />
              </Button>
              <Button shape="square" className="w-[52px]">
                <Img src="images/img_icons_linkedin.png" />
              </Button>
            </div>
            <Text size="s" as="p" className="mt-[25px] !text-gray-600 tracking-[0.08px] !font-poppins text-center">
              © Copyrights Ted Finance | All Rights Reserved
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
