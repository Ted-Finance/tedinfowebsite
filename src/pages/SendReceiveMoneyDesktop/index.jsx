import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";

export default function SendReceiveMoneyDesktopPage() {
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[46px] md:pt-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[94px]">
          <div className="h-[4955px] w-full pr-1 md:px-5 relative max-w-[1716px]">
            <div className="flex flex-row md:flex-col justify-end items-start w-[52%] right-0 top-[3%] m-auto md:gap-5 absolute">
              <Img
                src="images/img_imockup_iphone_1217x588.png"
                alt="imockupiphone"
                className="w-[67%] md:w-full md:h-[1217px] z-[1] object-cover"
              />
              <Img
                src="images/img_abstract_design.svg"
                alt="abstractdesign"
                className="h-[382px] mt-16 ml-[-118px] md:ml-0 md:mt-0"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[33%] left-[10%] top-[5%] m-auto absolute">
              <Heading size="3xl" as="h1" className="!font-bold mr-[12.5rem]">
                  Smart Virtual <br />
                  US Dollar Card
              </Heading>
              <Text size="8xl" as="p" className="mt-[] !text-black-900_02 !font-poppins">
                  You can now Shop online, Pay subscription <br />
                  and lots more with TedFinance Smart Virtual <br />
                  US Dollar Card{" "}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[48%] gap-11 left-0 top-[11%] m-auto absolute">
              <Button
                size="5xl"
                rightIcon={<Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />}
                className="ml-[163px] gap-[30px] md:ml-5 sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-full"
              >
                Get Started Now
              </Button>
              <div className="flex flex-row md:flex-col justify-start pb-[22px] pl-[22px] gap-5 sm:pb-5 sm:pl-5">
                <Img
                  src="images/img_3d_rendering_ba_9.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] mb-1.5 object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_10.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_11.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_12.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_13.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_14.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_15.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_16.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_17.png"
                  alt="3drenderingba"
                  className="w-[9%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_60x27.png"
                  alt="3drenderingba"
                  className="w-[4%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
              </div>
            </div>
            <Img
              src="images/img_group_150x207.svg"
              alt="image"
              className="h-[164px] left-[10%] top-0 m-auto absolute"
            />
            <div className="flex flex-col items-center justify-start w-[35%] left-[11%] top-[17%] m-auto absolute">
              <Img
                src="images/img_imockup_iphone_1.png"
                alt="imockupiphone"
                className="w-full md:h-[1217px] object-cover"
              />
              <div className="flex flex-col items-center justify-start h-[142px] w-[142px] mt-[-71px]">
                <div className="h-[142px] w-[142px] p-2.5 bg-white-A700 shadow-xl relative rounded-[50%]">
                  <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                    <Heading size="5xl" as="h2" className="!text-white-A700 z-[1]">
                      2
                    </Heading>
                    <div className="h-[110px] w-[110px] mt-[-90px] bg-purple-400 shadow-xl rounded-[50%]" />
                  </div>
                  <a href="#" className="w-max bottom-[24%] right-0 left-0 m-auto absolute">
                    <Heading size="s" as="h3" className="!text-white-A700">
                      Sign Up
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[35%] right-[17%] top-[30%] m-auto absolute">
              <Img
                src="images/img_imockup_iphone_2.png"
                alt="imockupiphone"
                className="w-full md:h-[1217px] object-cover"
              />
              <div className="flex flex-col items-center justify-start h-[142px] w-[142px] mt-[-71px]">
                <div className="h-[142px] w-[142px] p-[11px] bg-white-A700 shadow-xl relative rounded-[50%]">
                  <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                    <Heading size="5xl" as="h4" className="!text-white-A700 z-[1]">
                      3
                    </Heading>
                    <div className="h-[110px] w-[110px] mt-[-91px] bg-purple-400 shadow-xl rounded-[50%]" />
                  </div>
                  <Heading
                    size="s"
                    as="h5"
                    className="w-max bottom-[26%] right-0 left-0 m-auto !text-white-A700 absolute"
                  >
                    Create Pin
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[35%] bottom-[28%] left-[11%] m-auto absolute">
              <Img
                src="images/img_imockup_iphone_3.png"
                alt="imockupiphone"
                className="w-full md:h-[1217px] object-cover"
              />
              <div className="flex flex-col items-center justify-start h-[142px] w-[142px] mt-[-71px]">
                <div className="h-[142px] w-[142px] p-[11px] bg-white-A700 shadow-xl relative rounded-[50%]">
                  <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                    <Heading size="5xl" as="h6" className="!text-white-A700 z-[1]">
                      4
                    </Heading>
                    <div className="h-[110px] w-[110px] mt-[-91px] bg-purple-400 shadow-xl rounded-[50%]" />
                  </div>
                  <Heading
                    size="s"
                    as="p"
                    className="w-max bottom-[26%] right-0 left-0 m-auto !text-white-A700 absolute"
                  >
                    Your Profile
                  </Heading>
                </div>
              </div>
            </div>
            <div className="h-[1217px] w-[37%] md:w-full bottom-[17%] right-[16%] m-auto absolute">
              <Img
                src="images/img_imockup_iphone_4.png"
                alt="imockupiphone"
                className="h-[1217px] w-[94%] sm:w-full left-0 bottom-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-start h-[142px] w-[142px] bottom-0 right-0 m-auto absolute">
                <div className="h-[142px] w-[142px] p-[11px] bg-white-A700 shadow-xl relative rounded-[50%]">
                  <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                    <Heading size="5xl" as="h1" className="!text-white-A700 z-[1]">
                      5
                    </Heading>
                    <div className="h-[110px] w-[110px] mt-[-91px] bg-purple-400 shadow-xl rounded-[50%]" />
                  </div>
                  <Heading
                    size="xs"
                    as="p"
                    className="w-[60%] bottom-[18%] right-0 left-0 m-auto !text-white-A700 text-center absolute"
                  >
                    <>
                      KYC <br />
                      VERIFICATION
                    </>
                  </Heading>
                </div>
              </div>
            </div>
            <div className="h-[1217px] w-[36%] md:w-full bottom-0 left-[11%] m-auto absolute">
              <Img
                src="images/img_imockup_iphone_5.png"
                alt="imockupiphone"
                className="justify-center h-[1217px] w-[97%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-start h-[142px] w-[142px] bottom-0 right-0 m-auto absolute">
                <div className="h-[142px] w-[142px] p-[11px] bg-white-A700 shadow-xl relative rounded-[50%]">
                  <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                    <Heading size="5xl" as="h1" className="!text-white-A700 z-[1]">
                      6
                    </Heading>
                    <div className="h-[110px] w-[110px] mt-[-91px] bg-purple-400 shadow-xl rounded-[50%]" />
                  </div>
                  <Heading
                    size="s"
                    as="p"
                    className="w-max bottom-[26%] right-0 left-0 m-auto !text-white-A700 absolute"
                  >
                    Overview
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[37%] gap-8 bottom-[3%] right-[16%] m-auto absolute">
              <div className="flex flex-row justify-start items-start h-[518px] w-full md:h-auto pb-[30px] sm:pb-5 border-gray-900_04 border border-solid bg-gradient6 bg-[url(/public/images/img_cta_section.png)] bg-cover bg-no-repeat rounded-[20px]  bg-black-900_02">
                <div className="flex flex-col items-end justify-start w-[96%] mb-[111px] gap-6">
                  <div className="h-[290px] w-full relative">
                    <Img
                      src="images/img_abstract_design_298x283.png"
                      alt="abstractdesign"
                      className="h-[151px] w-[24%] sm:w-full left-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="h-[149px] w-[95%] sm:w-full bottom-0 right-0 m-auto absolute">
                      <div className="flex flex-col items-center justify-center w-full h-full gap-3.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Text size="7xl" as="p" className="!text-white-A700 text-center">
                          <span className="text-white-A700">Start your financial journey with </span>
                          <span className="text-white-A700">TedFinance Today!</span>
                        </Text>
                        <Text size="3xl" as="p" className="!text-purple-400 text-center">
                          Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit.
                          Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-center w-[55%] h-max left-[6%] bottom-0 top-0 m-auto absolute">
                        <Img
                          src="images/img_vector_46x36.png"
                          alt="vector_one"
                          className="w-[13%] md:h-auto object-cover"
                        />
                        <Img src="images/img_vector.svg" alt="vector_three" className="h-[48px]" />
                      </div>
                    </div>
                  </div>
                  <Button
                    color="white_A700"
                    size="4xl"
                    rightIcon={<Img src="images/img_arrowright.svg" alt="arrow-right" />}
                    className="mr-48 gap-2.5 md:mr-5 font-poppins font-bold min-w-[184px] rounded-[30px] sm:min-w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-[83%] md:w-full gap-[25px] sm:gap-5">
                <div className="flex flex-row justify-end w-[48%] sm:w-full p-[19px] bg-gray-900_02 rounded-[11px]">
                  <div className="flex flex-col items-start justify-start w-[55%] mb-[3px] mr-[38px] gap-0.5 sm:mr-5">
                    <Text size="xl" as="p" className="!text-white-A700 !font-inter">
                      Get it on
                    </Text>
                    <Text size="5xl" as="p" className="!text-white-A700 !font-inter !font-normal">
                      Google Play
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center w-[48%] sm:w-full gap-[3px] p-[18px] bg-gray-900_02 rounded-[11px]">
                  <Text size="xl" as="p" className="mt-1 mr-[50px] md:mr-5 !text-white-A700 !font-inter">
                    Download on the
                  </Text>
                  <Text size="5xl" as="p" className="mr-[35px] sm:mr-5 !text-white-A700 !font-inter !font-normal">
                    Apple Store
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start h-[142px] w-[142px] top-1/4 right-0 left-0 m-auto absolute">
              <div className="h-[142px] w-[142px] p-[11px] bg-white-A700 shadow-xl relative rounded-[50%]">
                <div className="flex flex-col items-center justify-start w-[78%] top-[8%] right-0 left-0 m-auto absolute">
                  <Heading size="5xl" as="h1" className="!text-white-A700 z-[1]">
                    1
                  </Heading>
                  <div className="h-[110px] w-[110px] mt-[-91px] bg-purple-400 shadow-xl rounded-[50%]" />
                </div>
                <Heading size="s" as="p" className="w-max bottom-1/4 right-0 left-0 m-auto !text-white-A700 absolute">
                  Get Started
                </Heading>
              </div>
            </div>
            <header className="flex flex-row md:flex-col justify-between items-center w-[53%] right-[11%] top-0 m-auto md:gap-10 absolute">
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
            </header>
          </div>
          <footer className="flex justify-center items-center w-full p-[50px] md:p-5 bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[49px]">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <Img src="images/img_group_white_a700.svg" alt="image_one" className="h-[121px]" />
                <div className="flex flex-col items-center justify-start w-full gap-[50px]">
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
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                  <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_one" className="h-[24px] w-[24px]" />
                  <Text as="p">Info@tedfinance.co</Text>
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
          </footer>
        </div>
      </div>
    </>
  );
}
