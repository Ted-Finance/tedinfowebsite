import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, ProductDropDown, HambugerMenu } from "../../components";
import { Link } from "react-router-dom"

export default function ExchangeDesktopPage() {
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
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[23px] sm:pt-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[2033px] w-full md:px-5 relative max-w-[1660px]">
            <Img
              src="images/img_abstract_design_purple_400.png"
              alt="abstractdesign"
              className="h-[382px] w-[25%] sm:w-full right-0 top-[11%] m-auto object-cover absolute"
            />
            <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="h-[1581px] w-full relative">
                <Img
                  src="images/img_mockup_2.png"
                  alt="mockup_one"
                  className="justify-center h-[1581px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute ml-[10rem] md:ml-[-6rem]  md:bottom-[-10rem] md:h-[581px]"
                />
                <Img src="images/Logo-one-white.svg" alt="image" className="h-[150px] md:ml-[3rem] ml-[6rem] mt-10 md:h-[60px]" />
                <Button
                  color="light_blue_300"
                  size="4xl"
                  rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
                  className="bg-light_blue-300 cursor-pointer rounded-[27px] relative hidden md:block md:left-[72%] md:mt-[-4rem]"
                  onClick={toggleHambugerMenu}
                />
                {isOpenHam && (
                  <div
                    ref={mambugerRef}
                    className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                    style={{ marginTop: '-70rem', width: '100vw', height: '100vh' }}
                  >
                    <HambugerMenu toggleMenu={toggleHambugerMenu} />
                  </div>
                )}
                <div className="flex flex-col items-start justify-start w-[83%] left-[6%] top-0 m-auto absolute md:top-[15rem]">
                  <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[70px] ml-[38rem] md:gap-10 md:ml-0 md:mt-0 z-[1] relative md:hidden">
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
                  <Heading size="3xl" as="h1" className="w-[42%] mt-[195px] ml-0.5 md:ml-0 md:font-bold md:text-[30px]  md:mt-[-6rem] md:w-full">
                    Currency Exchange To all Currencies Now Made Easy
                  </Heading>
                  <Text size="10xl" as="p" className="w-[47%] mt-[25px] !text-black-900_02 !font-poppins md:w-full md:font-normal md:text-[12px]">
                    <>
                      Convert your currency to over 5 foreign <br className="md:hidden" />
                      currencies without additional charges
                    </>
                  </Text>
                  <Button
                    size="5xl"
                    rightIcon={
                      <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                    }
                    className="mt-[66px] md:mt-[35rem] ml-0.5 gap-[30px] md:ml-0 sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-full"
                  >
                    Get Started Now
                  </Button>
                  <Heading size="xl" as="h2" className="w-[22%] mt-[108px] mb-[20px] ml-6 md:ml-0 sm:ml-5 z-[1] md:font-bold md:text-[30px]  md:mt-[39rem] md:w-full">
                    <>
                      Conversion <br className="md:hidden" />
                      Highly Secured
                    </>
                  </Heading>
                  <div className="h-[452px] w-[37%] md:w-full mt-[-5px] ml-[7px] md:ml-0 relative">
                    <Img
                      src="images/img_3d_rendering_ba_452x499.png"
                      alt="3drenderingba"
                      className="justify-center h-[452px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                    />
                    <Text
                      size="xl"
                      as="p"
                      className="left-[2%] top-[4%] m-auto !text-black-900_02 !font-poppins absolute md:w-full md:font-normal md:text-[12px]"
                    >
                      Your conversion is Highly secured with a backend encrypted{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-[30px] mr-[-9rem]">
                    <div className="flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%] hidden md:block mt-12">
                      <div className="flex flex-col items-center justify-start h-[74px] w-[74px] p-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 rounded-[50%]">
                        <Img src="images/img_icon_34x34.png" alt="icon_one" className="w-[34px] md:h-auto object-cover" />
                      </div>
                    </div>
                    <div className="flex-col items-center justify-start w-full pt-[5px] gap-5 hidden md:block">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center">
                        Effortless Money Management, Anywhere in the World
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center">
                        At TedFinance, we believe finances shouldn&#39;t be confined by borders. Our innovative wallet app
                        empowers you to send, receive, and manage your money globally with ease. We understand the
                        complexities of navigating currency exchange, and that&#39;s why we offer a solution that
                        simplifies the process.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-start w-[79%] md:w-full md:mb-[30rem] mt-[-66px] ml-[103px] md:gap-10 md:ml-5 z-[1]">
                <div className="h-[499px] w-[39%] md:w-[85%] mt-[19px] md:mt-0 relative">
                  <Img
                    src="images/img_currency_exchan_499x497.png"
                    alt="currencyexchan"
                    className="justify-center h-[499px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                  />
                  <div className="flex flex-col items-center justify-start w-[53%] gap-[13px] left-[3%] top-[2%] m-auto absolute md:w-full">
                    <Heading size="xl" as="h3" className="md:text-[30px]  md:mt-[1rem] md:w-full">
                      Swift Conversion
                    </Heading>
                    <Text size="xl" as="p" className="!text-black-900_02 !font-poppins md:w-full md:font-normal md:text-[12px]">
                      Convert your Currency in a blink of an eye
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-[30px] mr-[-9rem]  md:hidden">
                  <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                    <div className="flex flex-col items-center justify-start h-[74px] w-[74px] p-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 rounded-[50%]  md:mt-[39rem]">
                      <Img src="images/img_icon_34x34.png" alt="icon_one" className="w-[34px] md:h-auto object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-5">
                    <Text size="7xl" as="p" className="!text-purple-400 text-center">
                      Effortless Money Management, Anywhere in the World
                    </Text>
                    <Text size="5xl" as="p" className="!text-gray-900_01 text-center">
                      At TedFinance, we believe finances shouldn&#39;t be confined by borders. Our innovative wallet app
                      empowers you to send, receive, and manage your money globally with ease. We understand the
                      complexities of navigating currency exchange, and that&#39;s why we offer a solution that
                      simplifies the process.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-[89px] pb-14 md:pb-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 max-w-[1404px] rounded-[20px] md:bg-gray-900_05 md:mt-[49rem]">
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
          <footer className="flex justify-center items-center w-full mt-[172px] p-[50px] md:p-5 bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
              <Img src="images/img_group_white_a700.svg" alt="image_one" className="h-[121px]" />
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
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
                <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                    <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                    <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">info@tedfinance.com</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                    <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                    <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">+234 812 235 7728</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                    <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[24px] w-[24px]" />
                    <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">
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
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
