import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, ProductDropDown, HambugerMenu } from "../../components";
import { Link } from "react-router-dom"

export default function SendReceiveMoneyDesktopThreePage() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHam, setIsOpenHam] = useState(false);
  const dropdownRef = useRef(null);
  const mambugerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mambugerRef.current && !mambugerRef.current.contains(event.target)) {
        setIsOpenHam(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleHambugerMenu = () => {
    setIsOpenHam(!isOpenHam);
  };
  console.log("count", isOpenHam)
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[23px] sm:pt-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1617px] w-full md:px-5 relative max-w-[1710px]">
            <div className="flex flex-col items-start justify-start w-[92%] right-0 top-0 m-auto absolute">
              <Img src="images/Logo-one-white.svg" alt="image" className="h-[164px] mt-10 md:h-[60px]" />
              <Button
                color="light_blue_300"
                size="4xl"
                rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
                className="bg-light_blue-300 cursor-pointer rounded-[27px] relative hidden md:block md:left-[78%] md:mt-[-4rem]"
                onClick={toggleHambugerMenu}
              />
              {isOpenHam && (
                <div
                  ref={mambugerRef}
                  className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                  style={{ marginTop: '-55rem', width: '100vw', height: '100vh' }}
                >
                  <HambugerMenu toggleMenu={toggleHambugerMenu} />
                </div>
              )}
              <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[-160px] ml-[30rem] md:gap-10 md:ml-0 md:mt-0 z-[1] relative md:hidden">
                <div className="flex flex-row sm:flex-col justify-between w-[60%] md:w-full sm:gap-10">
                  <a
                    href="/"
                    className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 sm:px-5 cursor-pointer bg-purple-400 rounded-[25px]"
                  >
                    <p className="!text-white-A700">Home</p>
                  </a>
                  <div
                    className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 sm:px-5 cursor-pointer bg-purple-400 rounded-[25px]"
                    onClick={toggleMenu}
                  >
                    <p className="!text-white-A700">Products</p>
                  </div>
                  <div className="flex flex-row justify-center p-[13px] bg-purple-400 rounded-[25px]">
                    <p className="!text-white-A700 cursor-pointer">Learn</p>
                  </div>
                  <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
                    <Link to="/about">
                      <p className="mt-1 !text-white-A700 cursor-pointer">Company</p>
                    </Link>
                  </div>

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
                      className="flex justify-center items-center w-[110px] h-[55px] px-[30px] py-4 sm:px-5 bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-white-A700 hover:font-normal"
                    >
                      <p className="!text-gray-900_05 !font-medium">Login</p>
                    </a>
                  </li>
                </ul>
                {isOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                    style={{ marginTop: '5px', width: '399px', height: '411px' }}
                  >
                    <ProductDropDown toggleMenu={toggleMenu} />
                  </div>
                )}
              </header>
              <div className="flex flex-row md:flex-col justify-between items-start w-full mt-[-4px] md:gap-10">

                <div className="flex flex-col items-start justify-start w-[38%] md:w-full mt-[130px] md:mt-0">
                  <Heading size="3xl" as="h1" className="w-[96%] ml-px md:ml-0 !font-bold md:text-[30px] md:mt-[4rem]">
                    <>
                      Investment, Ultimate
                      <br className="md:hidden" />
                      way of Growing your <br className="md:hidden" />
                      Wealth
                    </>
                  </Heading>
                  <Text size="8xl" as="p" className="ml-px md:ml-0 !text-black-900_02 !font-poppins md:w-full md:font-normal md:text-[12px] ">
                    <>
                      Incredible Platforms you can invest your funds, <br className="md:hidden" />
                      and automatically grow your wealth
                    </>
                  </Text>
                  <div className="hidden md:block mt-8">
                    <div class="flex items-center gap-5 animate-horizontal">
                      <Img src="images/img_3d_rendering_ba_9.png" alt="3drenderingba" class="w-[6%] md:h-[24px] object-cover rounded-[1px]" />
                      <Img
                        src="images/img_3d_rendering_ba_10.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_11.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_12.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_13.png"
                        alt="3drenderingba"
                        className="w-[6%]  md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_14.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_15.png"
                        alt="3drenderingba"
                        className="w-[6%]  md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_16.png"
                        alt="3drenderingba"
                        className="w-[6%]  md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_17.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                      <Img
                        src="images/img_3d_rendering_ba_60x27.png"
                        alt="3drenderingba"
                        className="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                      />
                    </div>
                  </div>
                  <Button
                    size="5xl"
                    rightIcon={
                      <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                    }
                    className="mt-11 gap-[30px] sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-[90%] md:mt-[39rem]"
                  >
                    Get Started Now
                  </Button>
                </div>

                <Img
                  src="images/img_abstract_design_purple_400.png"
                  alt="abstractdesign"
                  className="w-[26%] md:w-full md:h-[382px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute md:top-[13rem]">
              <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
                <div className="flex flex-row md:flex-col justify-start w-[47%] md:w-full mt-[703px] gap-5 md:mt-0 animate-horizontal md:hidden">
                  <Img
                    src="images/img_3d_rendering_ba_9.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_10.png"
                    alt="3drenderingba"
                    className="w-[40%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_11.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_12.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_13.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_14.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_15.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_16.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_17.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_60x27.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_9.png"
                    alt="3drenderingba"
                    className="w-[43%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                  />
                </div>

                <Img
                  src="images/img_mockup.png"
                  alt="mockup_one"
                  className="w-[98%] md:w-full md:h-[640px] md:mt-[-26rem]  md:ml-[-5.5rem] object-cover ml-[10rem] cursor-pointer"
                />
              </div>
              <Text size="7xl" as="p" className="w-[82%] mt-[-36px] !text-gray-900_01 !font-poppins text-center md:hidden">
                Stock investment, also known as equity investing, allows you to become a partial owner in companies. By
                purchasing shares of publicly traded companies, you gain the opportunity to profit from their growth.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start gap-9 bottom-[5%] left-[9%] m-auto absolute md:top-[70rem]">
              <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading as="h2" className="md:ml-0 md:text-[26px]  md:w-full ml-[0.5rem]">
                    Investment in Stock
                  </Heading>
                  <div className="h-[561px] w-full relative">
                    <Img
                      src="images/img_currency_exchan.png"
                      alt="currencyexchan"
                      className="h-[561px] w-[560px] sm:w-[90%] left-0 bottom-0 top-0 m-auto object-cover absolute rounded-[20px]"
                    />
                    <Text
                      size="8xl"
                      as="p"
                      className="w-[96%] top-[3%] right-0 left-0 m-auto !text-black-900_02 !font-poppins absolute md:w-[85%] md:font-normal md:text-[12px]"
                    >
                      <>
                        Shop online & Pay easily with your TedFinance Smart Virtual <br className="md:hidden" />
                        US Dollar Card
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Heading size="xl" as="h3" className="ml-[203px] md:ml-[-1rem] text-center md:font-bold md:text-[26px] md:w-full">
                Unleash the Potential of Your Money: Explore Stock Investment
              </Heading>
              <Text size="7xl" as="p" className="w-[82%] mt-[-36px] !text-gray-900_01 !font-poppins text-center md:block hidden md:w-[85%] md:font-normal md:text-[12px] md:text-left md:mt-[0]">
                Stock investment, also known as equity investing, allows you to become a partial owner in companies. By
                purchasing shares of publicly traded companies, you gain the opportunity to profit from their growth.
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center w-full mt-6 md:px-5 max-w-[1365px] md:mt-[27rem]">
            <Text size="7xl" as="p" className="w-[30%] !text-gray-900_01 !font-poppins md:w-full">
              <span className="text-gray-900_01 font-semibold md:hidden">
                <>
                  Why Invest in Stocks?
                  <br />
                  Potential for High Returns:
                </>
              </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px] md:hidden">
                <>
                  Stocks have the potential to outperform other investments over the long term.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[14px] hidden md:block">
                <>
                  Why Invest in Stocks?
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px] hidden md:block">
                Potential for High Returns:
              </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                <>
                  Stocks have the potential to outperform other investments over the long term.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px]">Share in Company Success: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                <>
                  As a shareholder, you benefit when a company does well. Your share price can increase, and you may
                  receive dividend payments from a portion of the company&#39;s profits.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px]">Diversification: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                Owning stocks in a variety of companies can help spread out your risk and protect your portfolio from
                market downturns.
              </span>
            </Text>
            <div className="h-[686px] w-[3px] md:w-full md:h-[3px] ml-[33px] md:ml-0 sm:ml-5 bg-gray-900_01 rounded-[1px] md:hidden" />
            <Text size="7xl" as="p" className="w-[30%] mb-[23px] ml-9 md:ml-0 sm:ml-5 !text-gray-900_01 !font-poppins md:w-full">
              <span className="text-gray-900_01">
                <>
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px]">Building Wealth: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                <>
                  Stock investment can be a powerful tool for building wealth over time, especially for long-term goals
                  like retirement.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:hidden">
                <>
                  Before You Dive In:
                  <br />
                  Understand the Risks:
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[14px] hidden md:block">
                <>
                  Before You Dive In:
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px] hidden md:block">Understand the Risks: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                <>
                Stock markets can be volatile, and there&#39;s always the chance of losing money.
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px]">Invest for the Long Term: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                <>
                  Don&#39;t expect to get rich quick. Stocks are well-suited for long-term investment horizons.
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold md:text-[12px]">Do Your Research: </span>
              <span className="text-gray-900_01 md:font-normal md:text-[12px]">
                Educate yourself about different industries, companies, and investment strategies before making any
                decisions.
              </span>
            </Text>
            <div className="h-[686px] w-[3px] md:w-full md:h-[3px] ml-[51px] md:ml-5 bg-gray-900_01 rounded-[1px] md:hidden" />
            <div className="flex flex-col items-start justify-start w-[30%] md:w-full ml-[31px] md:ml-0 sm:ml-0">
              <Heading as="h2" className="text-center md:font-bold md:text-[26px]">Magnificent Trading </Heading>
              <Text size="8xl" as="p" className="w-[90%] mt-px !text-gray-900_01 !font-poppins text-center md:font-normal md:text-[12px] md:text-left md:mt-[0]">
                Giving you the extravagant access to any Stock market of you choice
              </Text>
              <Img
                src="images/img_3d_rendering_ba_506x400.png"
                alt="3drenderingba"
                className="w-[99%] md:w-[90%] md:h-[506px] mt-5 ml-2 md:ml-0 object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start w-full pb-14 md:pb-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 max-w-[1404px] rounded-[20px] md:bg-gray-900_05">
            <div className="flex flex-row md:flex-col justify-between items-center w-[95%] md:gap-10">
              <div className="flex flex-row justify-center w-[75%] md:w-full">
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                  <Img
                    src="images/img_abstract_design_298x283.png"
                    alt="abstractdesign"
                    className="w-[29%] md:w-full md:h-[298px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-203px] gap-3.5 md:ml-0 md:mt-[-19rem] ">
                    <Text size="11xl" as="p" className="!text-light_blue-300 leading-[150%]">
                      <span className="text-light_blue-300 md:hidden">Start your financial journey with </span>
                      <span className="text-white-A700 md:hidden">TedFinance today!</span>
                      <span className="text-white-A700  md:text-center md:text-align-center md:text-3xl hidden md:block md:ml-[1rem]">Start your financial journey with TedFinance today!</span>
                    </Text>
                    <Text size="5xl" as="p" className="!text-light_blue-300 md:text-center md:text-align-center md:!text-purple-400 md:mt-[1rem] md:ml-[1rem]">
                      Ready to take control of your finances? Join YourBank now, and let us help you achieve your
                      financial goals with our tailored solutions and exceptional customer service
                    </Text>
                  </div>
                </div>
              </div>
              <Button color="white_A700" size="4xl" className="sm:px-5 font-medium min-w-[185px] rounded-[31px]">
                Open Account
              </Button>
            </div>
          </div>
          <footer className="flex justify-center items-center w-full mt-[123px] p-[50px] md:p-5 bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[49px]">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <Img src="images/img_group_white_a700.svg" alt="image_one" className="h-[121px]" />
                <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                  <div className="flex flex-row justify-center w-full">
                    <ul className="flex flex-row justify-between w-[24%] md:w-[90%] md:font-normal md:text-[14px] md:text-center md:text-align-center">
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
                  <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">Info@tedfinance.co</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                  <Img src="images/img_icon_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">+234 812 235 7728</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                  <Img src="images/img_icon_5.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                  <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px] md:w-[70%] w-[91%]">
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
                <div className="flex flex-row justify-start items-center w-[21%] md:w-full mr-3.5 gap-3 md:mr-[-5rem]">
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
