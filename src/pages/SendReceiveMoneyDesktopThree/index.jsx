import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, ProductDropDown } from "../../components";
import { Link } from "react-router-dom"

export default function SendReceiveMoneyDesktopThreePage() {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
              <Img src="images/Logo-one-white.svg" alt="image" className="h-[164px] mt-10" />
              <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[-160px] ml-[30rem] md:gap-10 md:ml-0 md:mt-0 z-[1] relative">
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
                  <Heading size="3xl" as="h1" className="w-[96%] ml-px md:ml-0 !font-bold">
                    <>
                      Investment, Ultimate
                      <br />
                      way of Growing your <br />
                      Wealth
                    </>
                  </Heading>
                  <Text size="8xl" as="p" className="ml-px md:ml-0 !text-black-900_02 !font-poppins">
                    <>
                      Incredible Platforms you can invest your funds, <br />
                      and automatically grow your wealth
                    </>
                  </Text>
                  <Button
                    size="5xl"
                    rightIcon={
                      <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                    }
                    className="mt-11 gap-[30px] sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-full"
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
            <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
                <div className="flex flex-row md:flex-col justify-start w-[47%] md:w-full mt-[703px] gap-5 md:mt-0 animate-horizontal">
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
                  className="w-[98%] md:w-full md:h-[1581px]  md:ml-0 object-cover ml-[10rem] cursor-pointer"
                />
              </div>
              <Text size="7xl" as="p" className="w-[82%] mt-[-36px] !text-gray-900_01 !font-poppins text-center">
                Stock investment, also known as equity investing, allows you to become a partial owner in companies. By
                purchasing shares of publicly traded companies, you gain the opportunity to profit from their growth.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start gap-9 bottom-[5%] left-[9%] m-auto absolute">
              <div className="flex flex-col items-center justify-start w-[51%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading as="h2" className="md:ml-0 sm:ml-5 ml-[0.5rem]">
                    Investment in Stock
                  </Heading>
                  <div className="h-[561px] w-full relative">
                    <Img
                      src="images/img_currency_exchan.png"
                      alt="currencyexchan"
                      className="h-[561px] w-[560px] sm:w-full left-0 bottom-0 top-0 m-auto object-cover absolute rounded-[20px]"
                    />
                    <Text
                      size="8xl"
                      as="p"
                      className="w-[96%] top-[3%] right-0 left-0 m-auto !text-black-900_02 !font-poppins absolute"
                    >
                      <>
                        Shop online & Pay easily with your TedFinance Smart Virtual <br />
                        US Dollar Card
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Heading size="xl" as="h3" className="ml-[203px] md:ml-5 text-center">
                Unleash the Potential of Your Money: Explore Stock Investment
              </Heading>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center w-full mt-6 md:gap-5 md:px-5 max-w-[1365px]">
            <Text size="7xl" as="p" className="w-[30%] !text-gray-900_01 !font-poppins">
              <span className="text-gray-900_01 font-semibold">
                <>
                  Why Invest in Stocks?
                  <br />
                  Potential for High Returns:
                </>
              </span>
              <span className="text-gray-900_01">
                <>
                  Stocks have the potential to outperform other investments over the long term.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">Share in Company Success:</span>
              <span className="text-gray-900_01">
                <>
                  As a shareholder, you benefit when a company does well. Your share price can increase, and you may
                  receive dividend payments from a portion of the company&#39;s profits.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">Diversification: </span>
              <span className="text-gray-900_01">
                Owning stocks in a variety of companies can help spread out your risk and protect your portfolio from
                market downturns.
              </span>
            </Text>
            <div className="h-[686px] w-[3px] md:w-full md:h-[3px] ml-[33px] md:ml-0 sm:ml-5 bg-gray-900_01 rounded-[1px]" />
            <Text size="7xl" as="p" className="w-[30%] mb-[23px] ml-9 md:ml-0 sm:ml-5 !text-gray-900_01 !font-poppins">
              <span className="text-gray-900_01">
                <>
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">Building Wealth: </span>
              <span className="text-gray-900_01">
                <>
                  Stock investment can be a powerful tool for building wealth over time, especially for long-term goals
                  like retirement.
                  <br />
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">
                <>
                  Before You Dive In:
                  <br />
                  Understand the Risks:
                </>
              </span>
              <span className="text-gray-900_01">
                <>
                  Stock markets can be volatile, and there&#39;s always the chance of losing money.
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">Invest for the Long Term:</span>
              <span className="text-gray-900_01">
                <>
                  Don&#39;t expect to get rich quick. Stocks are well-suited for long-term investment horizons.
                  <br />
                </>
              </span>
              <span className="text-gray-900_01 font-semibold">Do Your Research: </span>
              <span className="text-gray-900_01">
                Educate yourself about different industries, companies, and investment strategies before making any
                decisions.
              </span>
            </Text>
            <div className="h-[686px] w-[3px] md:w-full md:h-[3px] ml-[51px] md:ml-5 bg-gray-900_01 rounded-[1px]" />
            <div className="flex flex-col items-start justify-start w-[30%] md:w-full ml-[31px] md:ml-0 sm:ml-5">
              <Heading as="h2">Magnificent Trading </Heading>
              <Text size="8xl" as="p" className="w-[90%] mt-px !text-gray-900_01 !font-poppins text-center">
                Giving you the extravagant access to any Stock market of you choice
              </Text>
              <Img
                src="images/img_3d_rendering_ba_506x400.png"
                alt="3drenderingba"
                className="w-[99%] md:w-full md:h-[506px] mt-5 ml-2 md:ml-0 object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start w-full pb-14 md:pb-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 max-w-[1404px] rounded-[20px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-[95%] md:gap-10">
              <div className="flex flex-row justify-center w-[75%] md:w-full">
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                  <Img
                    src="images/img_abstract_design_298x283.png"
                    alt="abstractdesign"
                    className="w-[29%] md:w-full md:h-[298px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-203px] gap-3.5 md:ml-0">
                    <Text size="11xl" as="p" className="!text-light_blue-300 leading-[150%]">
                      <span className="text-light_blue-300">Start your financial journey with </span>
                      <span className="text-white-A700">TedFinance today!</span>
                    </Text>
                    <Text size="5xl" as="p" className="!text-light_blue-300">
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
          </footer>
        </div>
      </div>
    </>
  );
}
