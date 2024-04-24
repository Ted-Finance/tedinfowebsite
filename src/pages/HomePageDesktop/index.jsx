/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, ProductDropDown, HambugerMenu } from "../../components";
import { Link } from "react-router-dom";

export default function HomePageDesktopPage() {

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 2; // Assuming you have 3 divs with w-[29%]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[6500px] w-full bg-gradient2 relative overflow-x-hidden">
        <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
          <Img src="images/img_group_1.png" alt="image" className="w-full h-auto object-cover" />
          <Img
            src="images/img_rectangle_1.png"
            alt="image_one"
            className="2xl:w-full mt-[-319px] object-cover"
          />
        </div>
        <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-start w-[40%] 2xl:gap-7 left-[7%] lg:top-[13%] xl:top-[12%] 2xl:top-[11%] top-[8%] m-auto gap-5 absolute lg:ml-[1rem] xl:ml-[0] 2xl:ml-[0] ml-[5.2rem]">
          <Button
            color="white_A700"
            size="4xl"
            rightIcon={<Img src="images/img_arrowright.svg" alt="arrow-right" />}
            className="sm:ml-[9rem] sm:mt-[-4rem] 2xl:mt-[1.5rem] gap-2.5 mt-0 font-poppins h-[50px] font-bold min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white 2xl:ml-[0rem] ml-[1.1rem]  text-[14px] 2xl:ml-[3rem"
          >
            Get Started
          </Button>
          <div className="w-[390px] relative mt-[15rem] ml-[-5rem]">
            <Img
              src="images/phone-mobile.svg"
              alt="image_phone"
              className="w-[390px] 2xl:hidden block h-[430px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px] xl:hidden lg:hidden sm:ml-[9rem] z-[1]"
            />
          </div>
          <div className="sm:ml-[6rem] flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start 2xl:w-[70%] w-full 2xl:gap-[23px] gap-5 mt-[13rem] ml-[1.8rem] 2xl:mt-[1rem] 2xl:ml-[0rem] 2xl:mr-[7rem]  xl:mt-[-0.5rem] xl:ml-[0rem] xl:mr-[-4rem]  lg:mt-[5rem] lg:ml-[-30rem] lg:mr-[0]">
            <Button
              color="gray_900_02"
              size="6xl"
              leftIcon={<Img src="images/google-logo.png" alt="Vector" />}
              className="gap-[19px] pr-5 font-inter min-w-[170px] rounded-[11px] h-[70px] sm:h-[80px]"
            />

            <Button
              color="gray_900_02"
              size="7xl"
              leftIcon={<Img src="images/apple-logo.png" alt="Vector" />}
              className="gap-[23px] pr-5 font-inter min-w-[170px] rounded-[11px] h-[70px] lg:ml-[1rem] sm:h-[80px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-end justify-start w-full px-5 max-w-[1713px]">
              <div className="h-[712px] w-full relative">

                <div className="h-[467px] 2xl:w-[40%] w-full bottom-[3%] right-0 m-auto absolute">
                  <Img
                    src="images/img_abstract_design.svg"
                    alt="abstractdesign"
                    className="h-[382px] bottom-0 right-0 m-auto absolute"
                  />
                  <div className="flex flex-row justify-start 2xl:w-[54%] xl:w-[30%] lg:w-[35%] w-[80%] sm:w-[40%] lg:left-[55%] xl:left-[59%]  2xl:left-0 2xl:top-0 lg:top-[-11%] xl:top-[-10%] m-auto absolute top-[-44%] left-[8%] sm:left-[30%]">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px] p-1 bg-white-A700 shadow-xs rounded-[45px] lg:mt-0 mt-[-2rem]">
                      <div className="flex flex-row justify-start items-center h-[40px] w-[40px] lg:h-[81px] lg:w-[82px] ml-[7px] shadow-sm rounded-[50%]">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="lg:h-[81px] lg:w-[82px] h-[40px] w-[40px] rounded-[50%]"
                        />
                      </div>
                      <Heading size="lg" as="h1" className="text-center font-semibold lg:!font-extrabold xl:ml-[1rem] lg:ml-[1rem]">
                        Naira Account (NGN)
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[90%] h-full left-0 bottom-0 top-0 m-auto absolute">
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-start w-full gap-5">
                    <div className="h-[498px] w-[44%] z-[1] relative">
                      <Img
                        src="images/img_abstract_design_498x689.png"
                        alt="abstractdesign"
                        className="justify-center h-[498px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="images/img_group_150x207.svg"
                        alt="image_two"
                        className="2xl:h-[100px] lg:h-[100px] left-[0] lg:top-[75px] lg:left-[13%] top-[-20%] m-auto absolute 2xl:top-[75px] 2xl:left-[13%] h-[60px]"
                      />
                      <Button
                        color="light_blue_300"
                        size="4xl"
                        rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
                        className="bg-light_blue-300 cursor-pointer rounded-[27px] relative 2xl:hidden block top-[-22%] left-[20rem] sm:left-[41rem] xl:hidden lg:hidden"
                        onClick={toggleHambugerMenu}
                      />
                    </div>

                    {isOpenHam && (
                      <div
                        ref={mambugerRef}
                        className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                        style={{ marginTop: '-53rem', width: '100vw', height: '70vh', marginLeft: '-1.3rem' }}
                      >
                        <HambugerMenu toggleMenu={toggleHambugerMenu} />
                      </div>
                    )}

                    <header className="2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center 2xl:w-[59%] w-full 2xl:mt-[70px] 2xl:ml-[-56px] gap-10 ml-0 mt-0 z-[1] relative xl:block 2xl:block hidden lg:block lg:w-[59%] lg:mt-[70px] lg:ml-[2rem] xl:w-[59%] xl:mt-[70px] xl:ml-[-56px]">
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center 2xl:w-full lg:w-full xl:w-full">
                        <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between 2xl:w-[60%] w-full gap-10 lg:gap-[1rem] xl:gap-10 lg:w-[70%] xl:w-[70%]">
                          <a
                            href="/"
                            className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 cursor-pointer bg-purple-400 rounded-[25px]"
                          >
                            <p className="!text-white-A700">Home</p>
                          </a>
                          <div
                            className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 cursor-pointer bg-purple-400 rounded-[25px]"
                            onClick={toggleMenu}
                          >
                            <p className="!text-white-A700">Products</p>
                          </div>
                          <div className="flex flex-row justify-center p-[13px] bg-purple-400 rounded-[25px]">
                            <p className="!text-white-A700 cursor-pointer">Learn</p>
                          </div>
                          <Link to="/about">
                            <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
                              <p className="mt-1 !text-white-A700 cursor-pointer">Company</p>
                            </div>
                          </Link>
                        </div>

                        <div className="ml-[4rem] mr-[-4rem] lg:ml-[4rem] lg:mr-[-4rem]">
                          <ul className="flex flex-row justify-start items-center gap-[30px]">
                            <li>
                              <a href="#" className="cursor-pointer hover:bg-light_blue-300 lg:w-[70px]">
                                <p className="!text-white-A700">Sign Up</p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex justify-center items-center  w-[110px] h-[55px] px-[30px] py-4  bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-white-A700 hover:font-normal"
                              >
                                <p className="!text-gray-900_05 !font-medium">Login</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {isOpen && (
                          <div
                            ref={dropdownRef}
                            className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                            style={{ marginTop: '5px', width: '399px', height: '411px' }}
                          >
                            <ProductDropDown toggleMenu={toggleMenu} />
                          </div>
                        )}
                      </div>
                    </header>
                  </div>
                  <div className="flex flex-row justify-start 2xl:w-[48%] xl:w-[62%] lg:w-[78%] w-full  2xl:ml-[122px] ml-5 lg:ml-[80px] xl:ml-[110px]">
                    <div className="flex flex-col items-start justify-start 2xl:w-full 2xl:gap-5 lg:w-full lg:gap-5 xl:w-full xl:gap-5">
                      <Input
                        shape="round"
                        name="container_one"
                        placeholder="Approved & Fully Licensed By CBN"
                        prefix={<Img src="images/img_icon.svg" alt="Icon" />}
                        className="2xl:w-[52%] w-[99%] mt-[-27rem] 2xl:mt-[-10rem] lg:mt-[-10rem] lg:w-[52%] xl:w-[52%] ml-[-1rem] lg:ml-0 sm:w-[53%] sm:ml-[10rem]"
                      />
                      <div className="flex flex-col items-center justify-start gap-3.5 w-[90vw] 2xl:w-[40vw] lg:w-[40vw] xl:w-[40vw]">
                        <Heading as="h2" className="!text-gray-900_01 text-[28px] font-semibold 2xl:text-[30px] 2xl:font-extrabold lg:text-[30px] lg:font-extrabold xl:text-[30px] xl:font-extrabold leading-[150%]  text-center text-align-center mr-[1.5rem] 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Welcome to TedFinance <br className="hidden 2xl:block xl:block lg:block" />
                            Your Secure, Streamlined Global Financial access.
                          </>
                        </Heading>
                        <Heading size="md" as="h3" className="!text-gray-900_03 leading-[150%] text-center text-align-center mr-[1.5rem] font-bold text-[14px] 2xl:text-left lg:text-left xl:text-left 2xl:font-normal 2xl:text-[18px]">
                          A mobile application designed to empower you with the freedom and flexibility to manage your
                          finances effortlessly all over the globe.
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-[1] 2xl:w-[35%] lg:w-[35%] xl:w-[35%] w-full 2xl:mt-[-340px] lg:mt-[-440px] xl:mt-[-440px] lg:mr-[5rem] xl:mr-[5rem] 2xl:mr-[9rem] hidden 2xl:block xl:block lg:block">
                <Img src="images/three-iphone.png" alt="phone" />
              </div>
              <div className="flex-col items-center justify-start w-[43%] md:w-full mt-[-340px] mr-[70px] md:mr-5 z-[1] hidden">
                <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-center items-center w-full gap-5">
                  <div className="flex flex-col items-center justify-start 2xl:w-[48%] w-full z-[1]">
                    <div className="h-[650px] w-full relative">
                      <Img
                        src="images/img_shadow.png"
                        alt="shadow_one"
                        className="justify-center h-[650px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                      />
                      <div className="h-[592px] 2xl:w-[85%] w-full left-[1%] top-[1%] m-auto absolute">
                        <Img
                          src="images/img_main.png"
                          alt="main_one"
                          className="justify-center h-[592px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <Img
                          src="images/img_iphone_13_mockup.png"
                          alt="iphonethirteen"
                          className="justify-center h-[566px] 2xl:w-[90%] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-center items-center 2xl:w-[84%] w-full 2xl:ml-[-221px] ml-0 gap-5">
                    <div className="flex flex-col items-center justify-start 2xl:w-[72%] w-full z-[1]">
                      <div className="h-[805px] w-full relative">
                        <Img
                          src="images/img_shadow.png"
                          alt="shadow_three"
                          className="justify-center h-[805px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                        />
                        <div className="flex flex-col items-center justify-start w-[85%] top-[1%] right-0 left-0 m-auto absolute">
                          <div className="h-[734px] w-full relative">
                            <Img
                              src="images/img_main.png"
                              alt="main_three"
                              className="justify-center h-[734px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Img
                              src="images/img_iphone_13_mockup_700x325.png"
                              alt="iphonethirteen"
                              className="justify-center h-[700px] 2xl:w-[90%] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start 2xl:w-[58%] w-full 2xl:ml-[-171px] ml-0">
                      <div className="h-[650px] w-full relative">
                        <Img
                          src="images/img_shadow.png"
                          alt="shadow_five"
                          className="justify-center h-[650px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                        />
                        <div className="h-[592px] 2xl:w-[85%] w-full left-[1%] top-[1%] m-auto absolute">
                          <Img
                            src="images/img_main.png"
                            alt="main_five"
                            className="justify-center h-[592px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Img
                            src="images/img_iphone_13_mockup_566x262.png"
                            alt="iphonethirteen"
                            className="justify-center h-[566px] 2xl:w-[90%] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[5601px] w-full mt-[-94px] z-[1] relative  lg:mt-[94px] 2xl:lg:mt-[-94px]">
              <Img
                src="images/img_group_2.png"
                alt="image_three"
                className="justify-center h-[6601px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-[82%] 2xl:top-[2%] xl:top-[2%] lg:top-[6%] top-[9%] right-0 left-0 m-auto absolute">
                <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full gap-10">
                  <div className="flex flex-col items-start justify-start 2xl:w-[52%] w-full gap-[19px]">
                    <Text size="12xl" as="p" className="!text-purple-400 md:w-full 2xl:text-[30px] lg:text-[30px] xl:text-[30px] text-[28px]  font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                      Manage Your World Finances with Ease: Introducing Multicurrency Virtual Accounts
                    </Text>
                    <Text size="5xl" as="p" className="!text-gray-900_01 2xl:text-[17px] text-center text-align-center text-[14px] font-normal 2xl:text-left lg:text-left xl:text-left">
                      <>
                        Get Virtual Accounts in USD, EUR, GBP, & NGN to receive payments from anyone, anywhere. A Virtual Account works just like a regular bank account.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center 2xl:w-[28%] w-full p-3.5 border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                    <Button color="light_blue_300" size="xl" shape="round" className="px-5 min-w-[181px] w-full 2xl:text-[17px] text-[14px] font-normal">
                      For Individuals
                    </Button>

                    <Text as="p" className="!text-white-A700 text-center text-[14px] 2xl:text-[17px] font-normal flex flex-row justify-center p-[15px] w-full">
                      For Businesses
                    </Text>

                  </div>
                </div>
                <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col items-center w-full mt-[41px] 2xl:gap-[100px] gap-[25px]">
                  <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%] lg:mb-[1rem]">
                        <Img
                          src="images/img_icon_34x34.png"
                          alt="icon_one"
                          className="w-[34px] h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center text-[18px] 2xl:text-[18px] font-normal lg:mb-[1rem]">
                        Send & Receive Money from all Countries{" "}
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-[14px] 2xl:text-[14px] font-medium">
                        At TedFinance, we understand the importance of staying connected with loved ones across borders.
                        That&#39;s why we offer a convenient, secure, and affordable way to send & receive money
                        directly to individuals and businesses in almost any country.
                      </Text>
                    </div>
                  </div>
                  <div className="2xl:w-px 2xl:h-[350px] bg-gray-900_04 w-[340px] h-[1px] lg:w-px lg:h-[390px] lg:mx-[1.5rem]" />
                  <div className="flex flex-col items-center justify-start 2xl:w-[29%] mw-full mb-1.5 gap-8 lg:w-[90%]">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%] lg:mb-[1rem]">
                        <Img src="images/img_icon_1.png" alt="icon_one" className="w-[34px] h-auto object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center text-[18px] 2xl:text-[18px] font-normal lg:mb-[1rem]">
                        Investment in stock
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-[14px] 2xl:text-[14px] font-medium">
                        At TedFinance, we believe everyone deserves the opportunity to invest and build their financial
                        future. We&#39;re passionate about empowering individuals of all levels, from seasoned investors
                        to curious beginners, to make informed decisions about their financial well-being.
                      </Text>
                    </div>
                  </div>
                  <div className="2xl:w-px 2xl:h-[350px] bg-gray-900_04 w-[340px] h-[1px] lg:w-px lg:h-[390px] lg:mx-[1.5rem]" />
                  <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full mb-9 gap-9">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%] lg:mb-[1rem]">
                        <Img src="images/img_icon_2.png" alt="icon_one" className="w-[34px] h-auto object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center text-[18px] 2xl:text-[18px] font-normal lg:mb-[1rem]">
                        Cryptocurrency{" "}
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-[14px] 2xl:text-[14px] font-medium">
                        At TedFinance, we believe the future of finance is decentralized, accessible, and empowering.
                        We&#39;re passionate about cryptocurrency and its potential to transform how we manage our
                        money, invest in opportunities, and interact with the global financial system.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full 2xl:mt-[97px] mt-[40px] gap-5 px-5 max-w-[1104px]">
                  <Text size="12xl" as="p" className="!text-purple-400 text-[28px] 2xl:text-[30px] lg:text-[30px] xl:text-[30px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left sm:ml-[6rem] lg:ml-0">
                    Our Virtual USD Dollar Card
                  </Text>

                  <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-align-center text-[14px] 2xl:text-[14px] font-normal 2xl:text-left lg:text-left xl:text-left">
                    TedFinance empowers you to experience the world of international finance with ease and convenience.
                    Our flagship offering, the Virtual USD Dollar Card, unlocks a world of possibilities and unlimited
                    global access.{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[86px] gap-[60px]">
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full gap-10">
                    <div className="flex flex-row justify-center 2xl:w-[38%] w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="sm:h-[380px] lg:h-[22px] xl:h-[300px] 2xl:h-[341px] h-[200px] w-full relative lg:mb-[3rem] xl:mb-[8rem]">
                          <Img
                            src="images/master-card.svg"
                            alt="pngwingfive_one"
                            className="justify-center h-[200px] sm:h-[380px]  lg:h-[221px] xl:h-[261px] 2xl:h-[341px] w-[100%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />

                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start 2xl:w-[56%] lg:w-[56%] w-full gap-[62px]">
                      <div className="flex flex-col items-start justify-start w-full gap-3.5">
                        <Text size="9xl" as="p" className="!text-purple-400 text-[20px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left sm:ml-[6rem]">
                          Make seamless international payments
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-align-center text-[14px] font-medium 2xl:text-left lg:text-left xl:text-left">
                          Shop online, pay for subscriptions, and enjoy global services directly in USD, eliminating
                          the hassle of currency conversions and transaction fees.
                        </Text>
                      </div>
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-start w-full 2xl:gap-[26px] gap-5">
                        <div className="flex flex-row justify-start 2xl:w-[29%] lg:w-[29%] w-full">
                          <div className="flex flex-row justify-start items-center w-full gap-px">
                            <div className="flex flex-col items-start justify-start w-full gap-2.5 2xl:mt-[2rem] lg:mt-[2rem]">
                              <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full xl:lg:text-[58px] lg:text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                                99.9%
                              </Text>
                              <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                                seamless international payments
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="2xl:h-[182px] 2xl:w-px bg-gray-900_04  w-[340px] h-[1px] lg:h-[182px] lg:w-px sm:ml-[9rem]" />
                        <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col items-center 2xl:w-[69%] lg:w-[69%] w-full 2xl:mt-2 2xl:gap-[54px] lg:mt-2 lg:gap-[54px] gap-[13.5px] mt-0">
                          <div className="flex flex-col items-start justify-start 2xl:w-[45%] lg:w-[45%] w-full gap-2.5">
                            <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full lg:text-[40px] text-[40px] font-medium text-center text-align-center">
                              99.9%
                            </Text>
                            <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center">
                              Manageable Debt Consolidation
                            </Text>
                          </div>
                          <div className="2xl:w-px 2xl:h-[182px] lg:w-px lg:h-[182px] bg-gray-900_04 w-[340px] h-[1px]" />
                          <div className="flex flex-col items-start justify-start 2xl:w-[45%] lg:w-[45%] w-full gap-2.5 2xl:mt-[-1rem]">
                            <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] lg:text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                              99.9%
                            </Text>
                            <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                              Reducing financial burdens
                            </Text>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[148px] h-[63px] 2xl:px-6 py-5 px-5 bg-purple-400 rounded-[31px] ml-[6.5rem] sm:ml-[15rem]"
                      >
                        <Text as="p" className="!text-white-A700 text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Learn More
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full gap-10">
                    <div className="flex-col items-start justify-start 2xl:w-[47%] w-full gap-[62px] hidden 2xl:block xl:block lg:block">
                      <div className="flex flex-col justify-start gap-3.5">
                        <Text size="9xl" as="p" className="!text-purple-400 text-[18px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Enjoy greater control & Experience enhanced security
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01 text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Manage your spending effortlessly with real-time transaction notifications and the ability to
                          instantly block or unblock your card including Benefit from advanced security features like
                          two-factor authentication and in-app card controls to safeguard your financial information.
                        </Text>
                      </div>
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full gap-10 2xl:mt-[1.5rem]">
                        <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5 2xl:mt-[1rem]">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                            65%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                            Cash Flow Management
                          </Text>
                        </div>
                        <div className="2xl:h-[142px] 2xl:w-px w-full h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center">
                            70%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center">
                            Drive Business Expansion
                          </Text>
                        </div>
                        <div className="2xl:h-[142px] 2xl:w-px w-full h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                            45%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                            Streamline payroll processing
                          </Text>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[148px] h-[63px] 2xl:px-6 py-5 px-5 bg-purple-400 rounded-[31px] 2xl:mt-[2rem]"
                      >
                        <Text as="p" className="!text-white-A700 text-center text-[14px]">
                          Learn More
                        </Text>
                      </a>
                    </div>
                    <div className="2xl:h-[470px] h-[500px] 2xl:w-[47%] 2xl:pb-[50px] 2xl:pl-[50px] pb-5 pl-5 bg-gradient4 relative rounded-[20px] w-full">
                      <Img
                        src="images/img_abstract_design_224x213.png"
                        alt="abstractdesign"
                        className="h-[224px] 2xl:w-[33%] w-full 2xl:right-[10px] 2xl:top-[10px] right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="w-[85%] gap-5 grid-cols-2 bottom-[8%] left-[8%] m-auto grid absolute">
                        <div className="flex flex-col items-center justify-start w-full 2xl:gap-6 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                          <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                            <Button
                              color="purple_A100_03"
                              size="2xl"
                              shape="circle"
                              className="w-[58px] border-purple-A100_07 border border-solid"
                            >
                              <Img src="images/img_icon_58x58.png" />
                            </Button>
                          </div>
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                            Startups and Entrepreneurs
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-6 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                          <Img
                            src="images/img_icon_container.png"
                            alt="iconcontainer"
                            className="w-[78px] h-auto object-cover"
                          />
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                            Cash Flow Management
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-7 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                          <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                            <Button
                              color="purple_A100_06"
                              size="2xl"
                              shape="circle"
                              className="w-[58px] border border-solid lime_500_33_lime_500_33_border"
                            >
                              <Img src="images/img_icon_3.png" />
                            </Button>
                          </div>
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                            Business Expansion
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[29px] 2xl:p-[29px] p-5 bg-purple-500 rounded-[16px]">
                          <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                            <Button
                              color="purple_A100_04"
                              size="2xl"
                              shape="circle"
                              className="w-[58px] border border-solid lime_500_33_lime_500_33_border"
                            >
                              <Img src="images/img_icon_4.png" />
                            </Button>
                          </div>
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                            Payment Solutions
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col items-start justify-start 2xl:w-[47%] w-full gap-[62px] 2xl:hidden block xl:hidden lg:hidden">
                    <div className="flex flex-col items-center justify-start gap-3.5">
                      <Text size="9xl" as="p" className="!text-purple-400 text-[20px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                        Enjoy greater control & Experience enhanced security
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                        Manage your spending effortlessly with real-time transaction notifications and the ability to
                        instantly block or unblock your card including Benefit from advanced security features like
                        two-factor authentication and in-app card controls to safeguard your financial information.
                      </Text>
                    </div>
                    <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full gap-10 mt-[2rem]">
                      <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5">
                        <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          65%
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01  w-full text-[14px] font-light text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Cash Flow Management
                        </Text>
                      </div>
                      <div className="2xl:h-[182px] 2xl:w-px w-full h-px bg-gray-900_04 mt-[-1rem]" />
                      <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5">
                        <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          70%
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01  w-full text-[14px] font-light text-center text-align-center 2xl:text-left lg:text-left xl:text-left" >
                          Drive Business Expansion
                        </Text>
                      </div>
                      <div className="2xl:h-[182px] 2xl:w-px w-full h-px bg-gray-900_04 mt-[-1rem]" />
                      <div className="flex flex-col items-start justify-start 2xl:w-[24%] w-full gap-2.5">
                        <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text w-full text-[40px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          45%
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01  w-full text-[14px] font-light text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Streamline payroll processing
                        </Text>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[148px] h-[63px] 2xl:px-6 py-5 px-5 bg-purple-400 rounded-[31px] mt-[2rem] ml-[6rem] sm:ml-[15rem]"
                    >
                      <Text as="p" className="!text-white-A700 text-[14px] w-full text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                        Learn More
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full 2xl:mt-[81px] gap-[18px] px-5 max-w-[1104px] mt-[50px]">
                  <Text size="12xl" as="p" className="!text-lime-500 w-full text-center text-align-center lg:text-left">
                    <span className="text-purple-400 2xl:text-[30px] lg:text-[30px] xl:text-[30px] text-[20px] font-medium text-center text-align-center">Our Features</span>
                  </Text>
                  <Text size="5xl" as="p" className="!text-gray-900_01 full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                    Experience a host of powerful features at TedFinance, including seamless online banking, secure
                    transactions, and personalized financial insights, all designed to enhance your banking experience
                  </Text>
                </div>
                <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-start w-full 2xl:mt-20 mt-14 2xl:gap-[30px] gap-5">
                  <div className="flex flex-col items-center justify-start 2xl:w-[22%] w-full gap-6 2xl:p-[50px] md:p-5 bg-purple-400 rounded-[12px]">
                    <Button
                      color="light_blue_300"
                      size="4xl"
                      className="w-full px-5 !text-purple-400 border border-solid purple_400_light_blue_300_border rounded-[31px] text-[18px] font-normal"
                    >
                      Online Banking
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px] text-[18px] font-normal"
                    >
                      Financial Tools
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px] text-[18px] font-normal"
                    >
                      Customer Support
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start 2xl:w-[76%] w-full">
                    <div className="justify-center w-full 2xl:gap-[30px] 2xl:grid-cols-2 grid-cols-1 gap-5 grid">
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] 2xl:p-[50px] p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01 text-[18px] font-normal">
                            24/7 Account Access
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="247_account" className="2xl:h-[34px] 2xl:w-[34px] h-[24px] w-[24px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 tracking-[-0.12px] text-[14px] font-light">
                          Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online
                          banking platform. Check balances, transfer funds, and pay bills with ease.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] 2xl:p-[50px] p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01 text-[18px] font-normal">
                            Mobile Banking App
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="2xl:h-[34px] 2xl:w-[34px] h-[24px] w-[24px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-purple-400 tracking-[-0.12px] text-[14px] font-light">
                          Stay connected to your finances on the go with our user-friendly mobile banking app. Easily
                          manage your accounts, deposit checks, and make payments from your smartphone or tablet.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] 2xl:p-[50px] p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01 text-[18px] font-normal">
                            Secure Transactions
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="2xl:h-[34px] 2xl:w-[34px] h-[24px] w-[24px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-purple-400 tracking-[-0.12px] text-[14px] font-light">
                          Rest assured knowing that your transactions are protected by industry-leading security
                          measures. We employ encryption and multi-factor authentication to safeguard your financial
                          information.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] 2xl:p-[50px] p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01 text-[18px] font-normal">
                            Bill Pay and Transfers
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="2xl:h-[34px] 2xl:w-[34px] h-[24px] w-[24px]" />
                        </div>
                        <Text size="5xl" as="p" className="mb-[30px] !text-white-A700 tracking-[-0.12px] text-[14px] font-light">
                          Save time and avoid late fees with our convenient bill pay service. Set up recurring payments
                          or make one-time transfers between your accounts with just a few clicks.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-10 gap-5 sm:ml-[5rem] lg:ml-0">
                  <Text size="12xl" as="p" className="!text-lime-500 text-center text-align-center w-full 2xl:text-left lg:text-left xl:text-left">
                    <span className="text-purple-400 2xl:text-[30px] lg:text-[30px] xl:text-[30px]  text-[20px] font-medium text-center text-align-center">Frequently Asked Questions</span>
                  </Text>
                  <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-align-center w-full text-[14px] font-light text-align-center 2xl:text-left lg:text-left xl:text-left">
                    Still you have any questions? Contact our Team via Info@tedfinance.co
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-14 2xl:mt-20">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full 2xl:gap-[30px] 2xl:grid-cols-2 grid-cols-1 gap-5 grid">
                      <div className="flex flex-col items-start justify-center w-full gap-7 2xl:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                          How do I open an account with TedFinance?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                          Opening an account with TedFinance is easy. Simply visit our website and click on the
                          &quot;Open an Account&quot; button. Follow the prompts, provide the required information, and
                          complete the application process. If you have any questions or need assistance, our customer
                          support team is available to help.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[29px] 2xl:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                          What documents do I need to provide to Open and Account?
                        </Text>
                        <div className="h-px w-full bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400 text-[14px] font-normal">
                          The documents required for Generally, you will need to provide your BVN, National
                          identification documents (such as a NIN, passport or driver&#39;s license), For Business you
                          will need proof of income (such as pay stubs or tax returns).
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 2xl:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                          How can I access my accounts online?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                          Accessing your accounts online is simple and secure. Visit our website and click on the
                          &quot;Login&quot; button. Enter your username and password to access your accounts. If you
                          haven&#39;t registered for online banking, click on the &quot;Get Started&quot; button and
                          follow the registration process. If you need assistance, our customer support team is
                          available to guide you.
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 2xl:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                          Are my transactions and personal information secure?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                          At TedFinance, we prioritize the security of your transactions and personal information. We
                          employ industry-leading encryption and multi-factor authentication to ensure that your data is
                          protected. Additionally, we regularly update our security measures to stay ahead of emerging
                          threats. You can bank with confidence knowing that we have robust security systems in place.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="4xl"
                    rightIcon={<Img src="images/img_vector_9.svg" alt="Vector 9" />}
                    className="gap-1 sm:px-5 font-inter min-w-[193px] rounded-[31px] mt-4 text-[14px] font-normal"
                  >
                    Load All FAQ’s
                  </Button>
                </div>
                <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full mt-[130px] 2xl:gap-2 gap-5">
                  <div className="flex flex-col items-start justify-start 2xl:w-[76%] w-full gap-[15px]">
                    <Text size="12xl" as="p" className="!text-purple-400 w-full text-center text-align-center lg:text-left">
                      <span className="text-purple-400 text-[20px] 2xl:text-[30px] lg:text-[30px] xl:text-[30px]  font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">Our Security</span>
                    </Text>
                    <Text size="5xl" as="p" className="!text-gray-900_01 w-full text-[14px] font-medium text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                      Your Security is Our Priority at TedFinance, we understand the importance of safeguarding your
                      financial information and providing a secure environment for your financial transactions. We take
                      a comprehensive approach to security and employ several layers of protection to ensure your peace
                      of mind:
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center 2xl:w-[28%] w-full p-3.5 border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                    <Button color="light_blue_300" size="xl" shape="round" className="px-5 min-w-[181px] w-full 2xl:text-[17px] text-[14px] font-normal">
                      BVN/SELFIE
                    </Button>

                    <Text as="p" className="!text-white-A700 text-center text-[14px] 2xl:text-[17px] font-normal flex flex-row justify-center p-[15px] w-full">
                      National ID
                    </Text>

                  </div>

                </div>
                <div className="2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full mt-[100px] 2xl:gap-[50px] gap-5 hidden 2xl:block xl:block lg:block">
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center">
                    <Button size="3xl" shape="circle" className="w-[62px]">
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                    <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-start 2xl:w-[85%] w-full gap-10 m-[4rem]">
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_three"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h4" className="!text-purple-400 font-semibold text-[18px]">
                          Data Security{" "}
                        </Heading>
                        <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Encryption: We employ industry-standard encryption methods to protect your sensitive data,
                            both in transit and at rest. This means your information is scrambled and unreadable by
                            unauthorized individuals.
                            <br />
                            Secure Storage: Your data is stored in secure data centers with robust access controls and
                            monitoring systems.
                            <br />
                            Regular Security Audits: We regularly conduct independent security assessments to identify and
                            address any potential vulnerabilities.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_five"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h5" className="!text-purple-400 font-semibold text-[18px]">
                          Account Security
                        </Heading>
                        <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Multi-Factor Authentication (MFA): We offer multi-factor authentication as an additional layer
                            of security for your account. This requires not just your password, but also a verification
                            code sent to your phone or email, making it harder for unauthorized access.
                            <br />
                            Secure Login Practices: We enforce strong password requirements and recommend best practices
                            for creating and managing strong passwords.
                            <br />
                            Fraud Detection and Prevention: We utilize advanced fraud detection systems to monitor for
                            suspicious activity and prevent unauthorized transactions.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_seven"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h6" className="!text-purple-400 font-semibold text-[18px]">
                          Transparency and Communication
                        </Heading>
                        <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Privacy Policy: We have a clear and transparent privacy policy outlining how we collect, use,
                            and protect your data.
                            <br />
                            Regular Communication: We will promptly inform you of any security incidents that may impact
                            your information.
                          </>
                        </Text>
                      </div>
                    </div>
                    <Button size="3xl" shape="circle" className="w-[62px]">
                      <Img src="images/img_icon_white_a700.svg" />
                    </Button>
                  </div>
                </div>

                <div className="2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full mt-[100px] 2xl:gap-[50px] gap-5 2xl:hidden block xl:hidden lg:hidden">
                  <div className="flex flex-col items-center justify-start 2xl:w-[85%] w-full gap-10">
                    {/* Conditional rendering based on currentIndex */}
                    {currentIndex === 0 && (
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_three"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h4" className="!text-purple-400  text-[20px] font-semibold text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Data Security{" "}
                        </Heading>
                        <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Encryption: We employ industry-standard encryption methods to protect your sensitive data,
                            both in transit and at rest. This means your information is scrambled and unreadable by
                            unauthorized individuals.
                            <br />
                            Secure Storage: Your data is stored in secure data centers with robust access controls and
                            monitoring systems.
                            <br />
                            Regular Security Audits: We regularly conduct independent security assessments to identify and
                            address any potential vulnerabilities.
                          </>
                        </Text>
                      </div>
                    )}
                    {currentIndex === 1 && (
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_five"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h5" className="!text-purple-400 text-[20px] font-semibold text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Account Security
                        </Heading>
                        <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Multi-Factor Authentication (MFA): We offer multi-factor authentication as an additional layer
                            of security for your account. This requires not just your password, but also a verification
                            code sent to your phone or email, making it harder for unauthorized access.
                            <br />
                            Secure Login Practices: We enforce strong password requirements and recommend best practices
                            for creating and managing strong passwords.
                            <br />
                            Fraud Detection and Prevention: We utilize advanced fraud detection systems to monitor for
                            suspicious activity and prevent unauthorized transactions.
                          </>
                        </Text>
                      </div>
                    )}
                    {currentIndex === 2 && (
                      <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_seven"
                          className="w-full h-[60px] object-cover"
                        />
                        <Heading size="md" as="h6" className="!text-purple-400 text-[20px] font-semibold text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          Transparency and Communication
                        </Heading>
                        <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                          <>
                            Privacy Policy: We have a clear and transparent privacy policy outlining how we collect, use,
                            and protect your data.
                            <br />
                            Regular Communication: We will promptly inform you of any security incidents that may impact
                            your information.
                          </>
                        </Text>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center mt-[2rem]">
                    <Button size="3xl" shape="circle" className="w-[62px] mr-2" onClick={handlePrevious}>
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                    <Button size="3xl" shape="circle" className="w-[62px] ml-2" onClick={handleNext}>
                      <Img src="images/img_icon_white_a700.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full 2xl:mt-[306px] xl:mt-[306px] lg:mt-[50px] 2xl:pb-14 xl:pb-14 lg:pb-14 pb-5 border border-solid lime_500_33_lime_500_33_border bg-gray-900_05 2xl:bg-purple-400 lg:bg-purple-400 rounded-[20px] mt-[5rem]">
                  <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full mx-auto gap-10 px-5 max-w-[1324px]">
                    <div className="flex flex-row justify-center 2xl:w-[75%] xl:w-[75%] lg:w-[75%] w-full">
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-center items-center w-full gap-5">
                        <Img
                          src="images/img_abstract_design_298x283.png"
                          alt="abstractdesign"
                          className="2xl:w-[29%] xl:w-[29%] w-full h-[298px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start 2xl:w-[92%] xl:w-[92%] lg:w-[92%] w-full lg:ml-[-550px] xl:ml-[-250px] 2xl:ml-[-250px] gap-3.5 ml-0 mt-[-19rem] 2xl:mt-0 xl:mt-0 lg:mt-0">
                          <Text size="11xl" as="p" className="!text-light_blue-300 leading-[150%] w-full">
                            <span className="text-light_blue-300 2xl:block xl:block lg:block hidden">Start your financial journey with </span>
                            <span className="text-white-A700 2xl:block xl:block lg:block  hidden">TedFinance today!</span>
                            <span className="text-white-A700  text-center  text-align-center text-[28px] font-normal lg:hidden xl:hidden 2xl:hidden block">Start your financial journey with TedFinance today!</span>
                          </Text>
                          <Text size="5xl" as="p" className="2xl:!text-light_blue-300 lg:!text-light_blue-300 w-full text-[14px] font-light text-center text-align-center 2xl:text-left lg:text-left xl:text-left !text-purple-400 mt-[1rem] 2xl:mt-0 xl:mt-0">
                            Ready to take control of your finances? Join YourBank now, and let us help you achieve your
                            financial goals with our tailored solutions and exceptional customer service
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button color="white_A700" size="4xl" className="px-5 2xl:font-medium xl:font-medium min-w-[185px] rounded-[31px] font-bold text-[20px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
                      Open Account
                    </Button>
                  </div>
                </div>
                <footer className="justify-center items-center w-full mt-[40px] 2xl:p-[50px] xl:p-[50px] p-5 z-[1] bg-gray-900_05 2xl:hidden lg:hidden xl:hidden">
                  <div className="flex flex-col items-center justify-center 2xl:w-[87%] xl:w-[87%] w-full mt-[50px] gap-[50px]">
                    <Img src="images/img_group_150x207.svg" alt="image_six" className="h-[121px]" />
                    <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                      <div className="flex flex-row justify-center w-full">
                        <ul className="flex flex-row justify-between sm:w-[50%] 2xl:w-[24%] xl:w-[24%] w-[90%] font-normal text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
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
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full pr-14 gap-5 px-5">
                        <div className="flex flex-row w-full sm:ml-[20rem]">
                          <div className="flex flex-row justify-start items-center 2xl:w-[22%] xl:w-[22%] w-full gap-1.5 sm:w-[40%]">
                            <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[10px] w-[10px]" />
                            <Text as="p" className="text-center text-align-center font-extralight text-[10px]">Info@tedfinance.co</Text>
                          </div>
                          <div className="flex flex-row justify-start items-center 2xl:w-[19%] xl:w-[19%] w-full gap-1.5">
                            <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[10px] w-[10px] ml-[9px]" />
                            <Text as="p" className="text-center text-align-center font-extralight text-[10px]">+234 812 235 7728</Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center 2xl:w-[31%] xl:w-[31%] w-full gap-1.5 sm:ml-[15rem]">
                          <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[10px] w-[10px] mt-[-1rem] sm:mt-0" />
                          <Text as="p" className="w-[100%] text-center text-align-center font-extralight text-[10px] sm:w-[60%]">
                            <>
                              23, Science Road, Unilag Estate,
                              Magodo GRA 1, Lagos State.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-900_04" />
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full p-4 gap-10 border-gray-900_04 border border-solid bg-gray-900 rounded-[42px]">
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
                        <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light font-normal text-[15px]">
                          TedFinance All Rights Reserved
                        </Text>
                        <div className="flex flex-row justify-start items-center 2xl:w-[21%] xl:w-[21%] w-full 2xl:mr-3.5 xl:mr-3.5 mr-[-3rem] gap-3 sm:ml-[16rem]">
                          <a href="#">
                            <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light text-center text-align-center w-full font-normal text-[15px] 2xl:text-left lg:text-left xl:text-left">
                              Privacy Policy
                            </Text>
                          </a>
                          <div className="h-[27px] w-px bg-gray-400" />
                          <a href="#">
                            <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light 2xl:text-left lg:text-left xl:text-left text-center text-align-center w-full font-normal text-[15px]">
                              Terms of Service
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
              <div className="2xl:mt-[340rem] xl:mt-[370rem] lg:mt-[400rem]">
                <footer className="justify-center items-center w-full mt-[40px] 2xl:p-[50px] xl:p-[50px] p-5 z-[1] bg-gray-900_05 2xl:block hidden lg:block xl:block">
                  <div className="flex flex-col items-center justify-center 2xl:w-[87%] xl:w-[87%] w-full mt-[50px] gap-[50px] 2xl:ml-[9rem] xl:ml-[5rem]">
                    <Img src="images/img_group_150x207.svg" alt="image_six" className="h-[121px]" />
                    <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                      <div className="flex flex-row justify-center w-full">
                        <ul className="flex flex-row justify-between 2xl:w-[24%] xl:w-[34%] lg:w-[50%] w-[90%] font-normal text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
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
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full xl:pl-[150px] xl:pr-0 lg:pl-[56px]  pl-[326px] pr-14 gap-5 px-5 xl:gap-[4.25rem]">
                        <div className="flex flex-row justify-start items-center 2xl:w-[22%] xl:w-[22%] w-full gap-1.5">
                          <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                          <Text as="p" className="text-center text-align-center font-normal text-[15px]">Info@tedfinance.co</Text>
                        </div>
                        <div className="flex flex-row justify-start items-center 2xl:w-[19%] xl:w-[19%] w-full gap-1.5">
                          <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                          <Text as="p" className="text-center text-align-center font-normal text-[15px]">+234 812 235 7728</Text>
                        </div>
                        <div className="flex flex-row justify-start items-center 2xl:w-[31%] xl:w-[31%] w-full gap-1.5">
                          <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[24px] w-[24px]" />
                          <Text as="p" className="w-[100%] text-center text-align-center font-normal text-[15px]">
                            <>
                              23, Science Road, Unilag Estate,
                              Magodo GRA 1, Lagos State.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-900_04" />
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center w-full p-4 gap-10 border-gray-900_04 border border-solid bg-gray-900 rounded-[42px]">
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
                        <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light font-normal text-[15px]">
                          TedFinance All Rights Reserved
                        </Text>
                        <div className="flex flex-row justify-start items-center 2xl:w-[21%] xl:w-[25%] w-full 2xl:mr-3.5 xl:mr-3.5 lg:mr-[-42rem] mr-[-3rem] gap-3">
                          <a href="#">
                            <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light  text-center text-align-center w-full font-normal text-[15px] 2xl:text-left lg:text-left xl:text-left">
                              Privacy Policy
                            </Text>
                          </a>
                          <div className="h-[27px] w-px bg-gray-400" />
                          <a href="#">
                            <Text as="p" className="!text-gray-400 2xl:!font-light xl:!font-light 2xl:text-left lg:text-left xl:text-left text-center text-align-center w-full font-normal text-[15px]">
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
          </div>

        </div>
      </div >
    </>
  );
}
