/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Img,
  Heading,
  // Input,
  ProductDropDown,
  HambugerMenu,
} from "../../components";
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mambugerRef.current && !mambugerRef.current.contains(event.target)) {
        setIsOpenHam(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="h-[8066px] md:h-[7500px] w-full bg-gradient2 relative">
        <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
          <Img
            src="images/img_group_1.png"
            alt="image"
            className="w-full md:h-auto sm:w-full object-cover"
          />
          <Img
            src="images/img_rectangle_1.png"
            alt="image_one"
            className="w-full md:h-[6323px] mt-[-319px] object-cover"
          />
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start w-[40%] gap-7 left-[7%] top-[10%] md:top-[8%] m-auto md:gap-5 absolute md:ml-[5.2rem]">
          <Button
            color="white_A700"
            size="4xl"
            rightIcon={
              <Img src="images/img_arrowright.svg" alt="arrow-right" />
            }
            className="mt-[5px] gap-2.5 md:mt-0 font-poppins font-bold min-w-[184px] rounded-[30px] cursor-pointer md:bg-purple-400 md:text-white-A700 md:ml-[1.1rem] md:font-bold md:text-[20px]"
          >
            Get Started
          </Button>
          <div className="w-[100px] md:w-[390px] relative mt-[15rem] ml-[-5rem]">
            <Img
              src="images/phone-mobile.svg"
              alt="image_phone"
              className="max-w-[390px] hidden md:block h-[430px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
            />
          </div>
          <div className="flex flex-row sm:flex-col justify-start w-[70%] md:w-full gap-[23px] sm:gap-5 md:mt-[13rem] md:ml-[-1rem]">
            <Button
              color="gray_900_02"
              size="6xl"
              leftIcon={<Img src="images/google-logo.png" alt="Vector" />}
              className="gap-[19px] sm:pr-5 font-inter min-w-[227px] rounded-[11px]"
            />

            <Button
              color="gray_900_02"
              size="7xl"
              leftIcon={<Img src="images/apple-logo.png" alt="Vector" />}
              className="gap-[23px] sm:pr-5 font-inter min-w-[227px] rounded-[11px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute ">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-end justify-start w-full md:px-5 max-w-[1713px]">
              <div className="h-[712px] w-full relative">
                <div className="h-[467px] w-[40%] md:w-full bottom-[3%] right-0 m-auto absolute">
                  <Img
                    src="images/img_abstract_design.svg"
                    alt="abstractdesign"
                    className="h-[382px] bottom-0 right-0 m-auto absolute"
                  />
                  <div className="flex flex-row justify-start w-[54%] md:w-[80%] left-0 top-0 m-auto absolute md:top-[-44%] md:left-[8%]">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px] p-1 bg-white-A700 shadow-xs rounded-[45px]">
                      <div className="flex flex-row justify-start items-center h-[81px] w-[82px] ml-[7px] shadow-sm rounded-[50%]">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[81px] w-[82px] md:h-auto sm:w-full rounded-[50%]"
                        />
                      </div>
                      <Heading
                        size="lg"
                        as="h1"
                        className="text-center !font-extrabold"
                      >
                        Naira Account (NGN)
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[90%] h-full left-0 bottom-0 top-0 m-auto absolute ">
                  <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
                    <div className="h-[498px] w-[44%] md:w-full z-[1] relative ">
                      <Img
                        src="images/img_abstract_design_498x689.png"
                        alt="abstractdesign"
                        className="justify-center h-[498px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="images/img_group_150x207.svg"
                        alt="image_two"
                        className="h-[150px] left-[19%] top-[14%] m-auto absolute md:top-[-20%] md:left-[3%] md:h-[60px]"
                      />
                      <Button
                        color="light_blue_300"
                        size="4xl"
                        rightIcon={
                          <Img
                            src="images/Hambuger-Button.svg"
                            alt="Hambuger Button"
                          />
                        }
                        className="bg-light_blue-300 cursor-pointer rounded-[27px] relative hidden md:block md:top-[-22%] md:left-[90%]"
                        onClick={toggleHambugerMenu}
                      />
                    </div>

                    {isOpenHam && (
                      <div
                        ref={mambugerRef}
                        className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                        style={{
                          marginTop: "-53rem",
                          width: "100vw",
                          height: "100vh",
                        }}
                      >
                        <HambugerMenu toggleMenu={toggleHambugerMenu} />
                      </div>
                    )}

                    <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[70px] ml-[-56px] md:gap-10 md:ml-0 md:mt-0 z-[1] relative md:hidden">
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
                          <p className="!text-white-A700 cursor-pointer">
                            Learn
                          </p>
                        </div>
                        <Link to="/about">
                          <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
                            <p className="mt-1 !text-white-A700 cursor-pointer">
                              Company
                            </p>
                          </div>
                        </Link>
                      </div>
                      <ul className="flex flex-row justify-start items-center gap-[30px]">
                        <li>
                          <a
                            href="/"
                            className="cursor-pointer hover:bg-light_blue-300"
                          >
                            <p className="!text-white-A700">Sign Up</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            className="flex justify-center items-center w-[110px] h-[55px] px-[30px] py-4 sm:px-5 bg-light_blue-300 cursor-pointer rounded-[27px] hover:text-white-A700 hover:font-normal"
                          >
                            <p className="!text-gray-900_05 !font-medium">
                              Login
                            </p>
                          </a>
                        </li>
                      </ul>
                      {isOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                          style={{
                            marginTop: "5px",
                            width: "399px",
                            height: "411px",
                          }}
                        >
                          <ProductDropDown toggleMenu={toggleMenu} />
                        </div>
                      )}
                    </header>
                  </div>
                  <div className="flex flex-row justify-start w-[48%] md:w-full mt-[-200px] ml-[122px] md:ml-5 ">
                    <div className="flex flex-col items-start justify-start w-full gap-5 ">
                      {/* <Input
                        shape="round"
                        name="container_one"
                        placeholder="Approved & Fully Licensed By CBN"
                        prefix={<Img src="images/img_icon.svg" alt="Icon" />}
                        className="w-[51%] sm:w-[104%] md:mt-[-10rem] "
                      /> */}
                      <div className="flex items-center gap-2  rounded-full px-4 py-2 md:w-fit md:mt-[-10rem] bg-purple-400">
                        <Img
                          src="images/img_icon.svg"
                          alt="Icon"
                          className="w-5 h-5"
                        />
                        <span className="text-white text-md md:text-base">
                          Approved & Fully Licensed By CBN
                        </span>
                      </div>

                      <div className="flex flex-col items-center justify-start gap-3.5 md:w-[90vw] ">
                        <Heading
                          as="h2"
                          className="!text-gray-900_01 md:text-[28px] md:font-semibold text-[38px] font-bold leading-[150%]  md:text-center md:text-align-center md:mr-[1.5rem]"
                        >
                          <>
                            Welcome to TedFinance <br className="md:hidden" />
                            Your Secure, Streamlined Global Financial access.
                          </>
                        </Heading>
                        {/* <Heading
                          size="md"
                          as="h3"
                          className="!text-gray-900_03 leading-[150%] md:text-center md:text-align-center md:mr-[1.5rem] md:font-bold md:text-[14px]"
                        >
                          A mobile application designed to empower you with the
                          freedom and flexibility to manage your finances
                          effortlessly all over the globe.
                        </Heading> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-[1] w-[43%] md:w-full mt-[-340px] mr-[70px] md:hidden">
                <Img src="images/three-iphone.png" alt="phone" />
              </div>
              <div className="flex flex-col items-center justify-start w-[43%] md:w-full mt-[-340px] mr-[70px] md:mr-5 z-[1] hidden">
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                  <div className="flex flex-col items-center justify-start w-[48%] md:w-full z-[1]">
                    <div className="h-[650px] w-full relative">
                      <Img
                        src="images/img_shadow.png"
                        alt="shadow_one"
                        className="justify-center h-[650px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                      />
                      <div className="h-[592px] w-[85%] sm:w-full left-[1%] top-[1%] m-auto absolute">
                        <Img
                          src="images/img_main.png"
                          alt="main_one"
                          className="justify-center h-[592px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <Img
                          src="images/img_iphone_13_mockup.png"
                          alt="iphonethirteen"
                          className="justify-center h-[566px] w-[90%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-center items-center w-[84%] md:w-full ml-[-221px] md:ml-0 sm:gap-5">
                    <div className="flex flex-col items-center justify-start w-[72%] sm:w-full z-[1]">
                      <div className="h-[805px] w-full relative">
                        <Img
                          src="images/img_shadow.png"
                          alt="shadow_three"
                          className="justify-center h-[805px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                        />
                        <div className="flex flex-col items-center justify-start w-[85%] top-[1%] right-0 left-0 m-auto absolute">
                          <div className="h-[734px] w-full relative">
                            <Img
                              src="images/img_main.png"
                              alt="main_three"
                              className="justify-center h-[734px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                            />
                            <Img
                              src="images/img_iphone_13_mockup_700x325.png"
                              alt="iphonethirteen"
                              className="justify-center h-[700px] w-[90%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[58%] sm:w-full ml-[-171px] sm:ml-0">
                      <div className="h-[650px] w-full relative">
                        <Img
                          src="images/img_shadow.png"
                          alt="shadow_five"
                          className="justify-center h-[650px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.7 object-cover absolute"
                        />
                        <div className="h-[592px] w-[85%] sm:w-full left-[1%] top-[1%] m-auto absolute">
                          <Img
                            src="images/img_main.png"
                            alt="main_five"
                            className="justify-center h-[592px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <Img
                            src="images/img_iphone_13_mockup_566x262.png"
                            alt="iphonethirteen"
                            className="justify-center h-[566px] w-[90%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[35px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[6601px] w-full mt-[-94px] z-[1] relative">
              <Img
                src="images/img_group_2.png"
                alt="image_three"
                className="justify-center h-[6601px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-start justify-start w-[82%] top-[2%] md:top-[9%] right-0 left-0 m-auto absolute">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[52%] md:w-full gap-[19px]">
                    <Text
                      size="12xl"
                      as="p"
                      className="!text-purple-400 md:w-full text-[48px] md:text-[28px]  font-medium md:text-center md:text-align-center"
                    >
                      About Wallet
                    </Text>
                    <Text
                      size="5xl"
                      as="p"
                      className="!text-gray-900_01 text-[20px] md:text-center md:text-align-center md:text-[14px] font-medium"
                    >
                      <>
                        TedFinance, the mobile wallet designed to streamline
                        your financial life,
                        <br className="md:hidden" />
                        easy, fast & accurate.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[28%] md:w-full p-3.5 border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                    <Button
                      color="light_blue_300"
                      size="xl"
                      shape="round"
                      className="sm:px-5 min-w-[181px] md:w-full text-[18px] md:text-[14px] font-normal"
                    >
                      For Individuals
                    </Button>
                    <div className="flex flex-row justify-center w-[50%] p-[15px] md:w-full">
                      <Text
                        as="p"
                        className="!text-white-A700 text-center md:text-[14px] text-[18px] font-normal"
                      >
                        For Businesses
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col items-center w-full mt-[41px] gap-[100px] md:gap-[25px]">
                  <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%]">
                        <Img
                          src="images/img_icon_34x34.png"
                          alt="icon_one"
                          className="w-[34px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-purple-400 text-center md:text-[20px] text-[24px] font-normal"
                      >
                        Send & Receive Money from all Countries{" "}
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="!text-gray-900_01 text-center md:text-[14px] text-[20px] font-medium"
                      >
                        At TedFinance, we understand the importance of staying
                        connected with loved ones across borders. That&#39;s why
                        we offer a convenient, secure, and affordable way to
                        send & receive money directly to individuals and
                        businesses in almost any country.
                      </Text>
                    </div>
                  </div>
                  <div className="w-px h-[500px] bg-gray-900_04 md:w-[340px] md:h-[1px]" />
                  <div className="flex flex-col items-center justify-start w-[29%] md:w-full mb-1.5 gap-8">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%]">
                        <Img
                          src="images/img_icon_1.png"
                          alt="icon_one"
                          className="w-[34px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-purple-400 text-center md:text-[20px] text-[24px] font-normal"
                      >
                        Investment in stock
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="!text-gray-900_01 text-center md:text-[14px] text-[20px] font-medium"
                      >
                        At TedFinance, we believe everyone deserves the
                        opportunity to invest and build their financial future.
                        We&#39;re passionate about empowering individuals of all
                        levels, from seasoned investors to curious beginners, to
                        make informed decisions about their financial
                        well-being.
                      </Text>
                    </div>
                  </div>
                  <div className="w-px h-[500px] bg-gray-900_04 md:w-[340px] md:h-[1px]" />
                  <div className="flex flex-col items-center justify-start w-[29%] md:w-full mb-9 gap-9">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%]">
                        <Img
                          src="images/img_icon_2.png"
                          alt="icon_one"
                          className="w-[34px] md:h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-purple-400 text-center md:text-[20px] text-[24px] font-normal"
                      >
                        Cryptocurrency{" "}
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="!text-gray-900_01 text-center md:text-[14px] text-[20px] font-medium"
                      >
                        At TedFinance, we believe the future of finance is
                        decentralized, accessible, and empowering. We&#39;re
                        passionate about cryptocurrency and its potential to
                        transform how we manage our money, invest in
                        opportunities, and interact with the global financial
                        system.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[97px] md:mt-[40px] gap-5 md:px-5 max-w-[1104px]">
                  <Text
                    size="12xl"
                    as="p"
                    className="!text-purple-400 md:text-[28px] text-[48px] font-medium md:text-center md:text-align-center"
                  >
                    Our Virtual USD Dollar Card
                  </Text>

                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_01 md:text-center md:text-align-center md:text-[14px] text-[20px] font-medium"
                  >
                    TedFinance empowers you to experience the world of
                    international finance with ease and convenience. Our
                    flagship offering, the Virtual USD Dollar Card, unlocks a
                    world of possibilities and unlimited global access.{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[86px] gap-[60px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row justify-center w-[38%] md:w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[341px] md:h-[200px] w-full sm:w-full relative">
                          <Img
                            src="images/master-card.svg"
                            alt="pngwingfive_one"
                            className="justify-center md:h-[200px] h-[341px] w-[100%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[56%] md:w-full gap-[62px]">
                      <div className="flex flex-col items-start justify-start w-full gap-3.5">
                        <Text
                          size="9xl"
                          as="p"
                          className="!text-purple-400 md:text-[20px] md:font-medium md:text-center md:text-align-center"
                        >
                          Make seamless international payments
                        </Text>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-gray-900_01 md:text-center md:text-align-center md:text-[14px] md:font-medium"
                        >
                          Shop online, pay for subscriptions, and enjoy global
                          services directly in USD, eliminating the hassle of
                          currency conversions and transaction fees.
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[26px] md:gap-5">
                        <div className="flex flex-row justify-start w-[29%] md:w-full">
                          <div className="flex flex-row justify-start items-center w-full gap-px">
                            <div className="flex flex-col items-start justify-start w-full gap-2.5">
                              <Text
                                size="13xl"
                                as="p"
                                className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center "
                              >
                                99.9%
                              </Text>
                              <Text
                                size="5xl"
                                as="p"
                                className="!text-gray-900_01 md:w-full md:text-[14px] md:font-medium md:text-center md:text-align-center"
                              >
                                seamless international payments
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="h-[182px] w-px bg-gray-900_04  md:w-[340px] md:h-[1px]" />
                        <div className="flex flex-row sm:flex-col items-center w-[69%] md:w-full mt-2 gap-[54px] md:gap-[13.5px] md:mt-0">
                          <div className="flex flex-col items-start justify-start w-[45%] md:w-full gap-2.5">
                            <Text
                              size="13xl"
                              as="p"
                              className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center"
                            >
                              99.9%
                            </Text>
                            <Text
                              size="5xl"
                              as="p"
                              className="!text-gray-900_01 md:w-full md:text-[14px] md:font-medium md:text-center md:text-align-center"
                            >
                              Manageable Debt Consolidation
                            </Text>
                          </div>
                          <div className="w-px h-[182px] bg-gray-900_04 md:w-[340px] md:h-[1px]" />
                          <div className="flex flex-col items-start justify-start w-[45%] md:w-full gap-2.5">
                            <Text
                              size="13xl"
                              as="p"
                              className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center"
                            >
                              99.9%
                            </Text>
                            <Text
                              size="5xl"
                              as="p"
                              className="!text-gray-900_01 md:w-full md:text-[14px] md:font-medium md:text-center md:text-align-center"
                            >
                              Reducing financial burdens
                            </Text>
                          </div>
                        </div>
                      </div>
                      <a
                        href="/"
                        className="flex justify-center items-center w-[148px] h-[63px] px-6 py-5 sm:px-5 bg-purple-400 rounded-[31px] md:ml-[6.5rem]"
                      >
                        <Text
                          as="p"
                          className="!text-white-A700 md:text-[14px] md:font-medium md:text-center md:text-align-center"
                        >
                          Learn More
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[62px] md:hidden">
                      <div className="flex flex-col items-center justify-start gap-3.5">
                        <Text size="9xl" as="p" className="!text-purple-400">
                          Enjoy greater control & Experience enhanced security
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01">
                          Manage your spending effortlessly with real-time
                          transaction notifications and the ability to instantly
                          block or unblock your card including Benefit from
                          advanced security features like two-factor
                          authentication and in-app card controls to safeguard
                          your financial information.
                        </Text>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text
                            size="13xl"
                            as="p"
                            className="!text-transparent bg-gradient4 bg-clip-text"
                          >
                            65%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Cash Flow Management
                          </Text>
                        </div>
                        <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text
                            size="13xl"
                            as="p"
                            className="!text-transparent bg-gradient4 bg-clip-text"
                          >
                            70%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Drive Business Expansion
                          </Text>
                        </div>
                        <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text
                            size="13xl"
                            as="p"
                            className="!text-transparent bg-gradient4 bg-clip-text"
                          >
                            45%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Streamline payroll processing
                          </Text>
                        </div>
                      </div>
                      <a
                        href="/"
                        className="flex justify-center items-center w-[148px] h-[63px] px-6 py-5 sm:px-5 bg-purple-400 rounded-[31px]"
                      >
                        <Text as="p" className="!text-white-A700 text-center">
                          Learn More
                        </Text>
                      </a>
                    </div>
                    <div className="h-[534px] md:h-[500px] w-[47%] pb-[50px] pl-[50px] md:pb-5 md:pl-5 bg-gradient4 relative rounded-[20px] md:w-full">
                      <Img
                        src="images/img_abstract_design_224x213.png"
                        alt="abstractdesign"
                        className="h-[224px] w-[33%] sm:w-full right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="w-[85%] gap-5 grid-cols-2 bottom-[9%] left-[8%] m-auto sm:grid-cols-2 sm:gap-5 grid absolute">
                        <div className="flex flex-col items-center justify-start w-full gap-6 p-[30px] sm:p-5 bg-purple-500 rounded-[16px]">
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
                          <Text
                            size="5xl"
                            as="p"
                            className="!text-white-A700 text-center !font-normal md:text-sm"
                          >
                            Startups and Entrepreneurs
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-6 p-[30px] sm:p-5 bg-purple-500 rounded-[16px]">
                          <Img
                            src="images/img_icon_container.png"
                            alt="iconcontainer"
                            className="w-[78px] md:h-auto object-cover"
                          />
                          <Text
                            size="5xl"
                            as="p"
                            className="!text-white-A700 text-center !font-normal md:text-sm"
                          >
                            Cash Flow Management
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-7 p-[30px] sm:p-5 bg-purple-500 rounded-[16px]">
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
                          <Text
                            size="5xl"
                            as="p"
                            className="!text-white-A700 text-center !font-normal md:text-sm"
                          >
                            Business Expansion
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-[29px] p-[29px] sm:p-5 bg-purple-500 rounded-[16px]">
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
                          <Text
                            size="5xl"
                            as="p"
                            className="!text-white-A700 text-center !font-normal md:text-sm"
                          >
                            Payment Solutions
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col items-start justify-start w-[47%] md:w-full gap-[62px] hidden md:block">
                    <div className="flex flex-col items-center justify-start gap-3.5">
                      <Text
                        size="9xl"
                        as="p"
                        className="!text-purple-400 md:text-[20px] md:font-medium md:text-center md:text-align-center"
                      >
                        Enjoy greater control & Experience enhanced security
                      </Text>
                      <Text
                        size="5xl"
                        as="p"
                        className="!text-gray-900_01 md:text-[14px] md:font-medium md:text-center md:text-align-center"
                      >
                        Manage your spending effortlessly with real-time
                        transaction notifications and the ability to instantly
                        block or unblock your card including Benefit from
                        advanced security features like two-factor
                        authentication and in-app card controls to safeguard
                        your financial information.
                      </Text>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10 md:mt-[2rem]">
                      <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                        <Text
                          size="13xl"
                          as="p"
                          className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center"
                        >
                          65%
                        </Text>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-gray-900_01  md:w-full md:text-[14px] md:font-light md:text-center md:text-align-center"
                        >
                          Cash Flow Management
                        </Text>
                      </div>
                      <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04 md:mt-[-1rem]" />
                      <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                        <Text
                          size="13xl"
                          as="p"
                          className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center"
                        >
                          70%
                        </Text>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-gray-900_01  md:w-full md:text-[14px] md:font-light md:text-center md:text-align-center"
                        >
                          Drive Business Expansion
                        </Text>
                      </div>
                      <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04 md:mt-[-1rem]" />
                      <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                        <Text
                          size="13xl"
                          as="p"
                          className="!text-transparent bg-gradient4 bg-clip-text md:w-full md:text-[40px] md:font-medium md:text-center md:text-align-center"
                        >
                          45%
                        </Text>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-gray-900_01  md:w-full md:text-[14px] md:font-light md:text-center md:text-align-center"
                        >
                          Streamline payroll processing
                        </Text>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="flex justify-center items-center w-[148px] h-[63px] px-6 py-5 sm:px-5 bg-purple-400 rounded-[31px] md:mt-[2rem] md:ml-[6rem]"
                    >
                      <Text
                        as="p"
                        className="!text-white-A700 md:text-[14px] md:w-full md:md:w-full md:text-center md:text-align-center "
                      >
                        Learn More
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[81px] gap-[18px] md:px-5 max-w-[1104px] md:mt-[50px]">
                  <Text
                    size="12xl"
                    as="p"
                    className="!text-lime-500 md:w-full "
                  >
                    <span className="text-purple-400 md:hidden">Our</span>
                    <span className="text-purple-400 md:hidden">Features</span>
                    <span className="text-purple-400 hidden md:block md:text-[28px] md:font-medium md:text-center md:text-align-center">
                      Our Features
                    </span>
                  </Text>
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_01 md:full md:text-[14px] md:font-medium md:text-center md:text-align-center"
                  >
                    Experience a host of powerful features at TedFinance,
                    including seamless online banking, secure transactions, and
                    personalized financial insights, all designed to enhance
                    your banking experience
                  </Text>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-start w-full mt-20 md:mt-14 gap-[30px] md:gap-5">
                  <div className="flex flex-col items-center justify-start w-[22%] md:w-full gap-6 p-[50px] md:p-5 bg-purple-400 rounded-[12px]">
                    <Button
                      color="light_blue_300"
                      size="4xl"
                      className="w-full sm:px-5 !text-purple-400 border border-solid purple_400_light_blue_300_border rounded-[31px] md:text-[18px] md:font-normal"
                    >
                      Online Banking
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px] md:text-[18px] md:font-normal"
                    >
                      Financial Tools
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px] md:text-[18px] md:font-normal"
                    >
                      Customer Support
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full">
                    <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text
                            size="6xl"
                            as="p"
                            className="!text-gray-900_01 md:text-[18px] md:font-normal"
                          >
                            24/7 Account Access
                          </Text>
                          <Img
                            src="images/img_icon_lime_500.svg"
                            alt="247_account"
                            className="h-[34px] w-[34px] md:h-[24px] md:w-[24px]"
                          />
                        </div>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-white-A700 tracking-[-0.12px] md:text-[14px] md:font-light"
                        >
                          Enjoy the convenience of accessing your accounts
                          anytime, anywhere through our secure online banking
                          platform. Check balances, transfer funds, and pay
                          bills with ease.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text
                            size="6xl"
                            as="p"
                            className="!text-gray-900_01 md:text-[18px] md:font-normal"
                          >
                            Mobile Banking App
                          </Text>
                          <Img
                            src="images/img_icon_lime_500.svg"
                            alt="icon_one"
                            className="h-[34px] w-[34px] md:h-[24px] md:w-[24px]"
                          />
                        </div>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 tracking-[-0.12px] md:text-[14px] md:font-light"
                        >
                          Stay connected to your finances on the go with our
                          user-friendly mobile banking app. Easily manage your
                          accounts, deposit checks, and make payments from your
                          smartphone or tablet.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text
                            size="6xl"
                            as="p"
                            className="!text-gray-900_01 md:text-[18px] md:font-normal"
                          >
                            Secure Transactions
                          </Text>
                          <Img
                            src="images/img_icon_lime_500.svg"
                            alt="icon_one"
                            className="h-[34px] w-[34px] md:h-[24px] md:w-[24px]"
                          />
                        </div>
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 tracking-[-0.12px] md:text-[14px] md:font-light"
                        >
                          Rest assured knowing that your transactions are
                          protected by industry-leading security measures. We
                          employ encryption and multi-factor authentication to
                          safeguard your financial information.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text
                            size="6xl"
                            as="p"
                            className="!text-gray-900_01 md:text-[18px] md:font-normal"
                          >
                            Bill Pay and Transfers
                          </Text>
                          <Img
                            src="images/img_icon_lime_500.svg"
                            alt="icon_one"
                            className="h-[34px] w-[34px] md:h-[24px] md:w-[24px]"
                          />
                        </div>
                        <Text
                          size="5xl"
                          as="p"
                          className="mb-[30px] !text-white-A700 tracking-[-0.12px] md:text-[14px] md:font-light"
                        >
                          Save time and avoid late fees with our convenient bill
                          pay service. Set up recurring payments or make
                          one-time transfers between your accounts with just a
                          few clicks.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-10 gap-5">
                  <Text
                    size="12xl"
                    as="p"
                    className="!text-lime-500 md:text-center md:text-align-center md:w-full"
                  >
                    <span className="text-purple-400 md:hidden">
                      Frequently
                    </span>
                    <span className="text-purple-400 md:hidden">
                      Asked Questions
                    </span>
                    <span className="text-purple-400 md:block hidden md:text-[28px] md:font-medium">
                      Frequently Asked Questions
                    </span>
                  </Text>
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_01 md:text-center md:text-align-center md:w-full md:text-[14px] md:font-light"
                  >
                    Still you have any questions? Contact our Team via
                    info@tedfinance.com
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full md:mt-14 mt-20">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 md:text-[18px] md:font-medium"
                        >
                          How do I open an account with TedFinance?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:text-[14px] md:font-normal"
                        >
                          Opening an account with TedFinance is easy. Simply
                          visit our website and click on the &quot;Open an
                          Account&quot; button. Follow the prompts, provide the
                          required information, and complete the application
                          process. If you have any questions or need assistance,
                          our customer support team is available to help.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[29px] p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 md:text-[18px] md:font-medium"
                        >
                          What documents do I need to provide to Open and
                          Account?
                        </Text>
                        <div className="h-px w-full bg-gradient4 max-w-[587px]" />
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:text-[14px] md:font-normal"
                        >
                          The documents required for Generally, you will need to
                          provide your BVN, National identification documents
                          (such as a NIN, passport or driver&#39;s license), For
                          Business you will need proof of income (such as pay
                          stubs or tax returns).
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 md:text-[18px] md:font-medium"
                        >
                          How can I access my accounts online?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:text-[14px] md:font-normal"
                        >
                          Accessing your accounts online is simple and secure.
                          Visit our website and click on the &quot;Login&quot;
                          button. Enter your username and password to access
                          your accounts. If you haven&#39;t registered for
                          online banking, click on the &quot;Get Started&quot;
                          button and follow the registration process. If you
                          need assistance, our customer support team is
                          available to guide you.
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text
                          size="5xl"
                          as="p"
                          className="!text-purple-400 md:text-[18px] md:font-medium"
                        >
                          Are my transactions and personal information secure?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:text-[14px] md:font-normal"
                        >
                          At TedFinance, we prioritize the security of your
                          transactions and personal information. We employ
                          industry-leading encryption and multi-factor
                          authentication to ensure that your data is protected.
                          Additionally, we regularly update our security
                          measures to stay ahead of emerging threats. You can
                          bank with confidence knowing that we have robust
                          security systems in place.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="4xl"
                    rightIcon={
                      <Img src="images/img_vector_9.svg" alt="Vector 9" />
                    }
                    className="gap-1 sm:px-5 font-inter min-w-[193px] rounded-[31px] mt-4 md:text-[14px] md:font-normal"
                  >
                    Load All FAQ’s
                  </Button>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[130px] gap-2 md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[76%] md:w-full gap-[15px]">
                    <Text
                      size="12xl"
                      as="p"
                      className="!text-purple-400 md:w-full"
                    >
                      <span className="text-purple-400 md:hidden">Our</span>
                      <span className="text-lime-500 md:hidden"></span>
                      <span className="text-purple-400 md:hidden">
                        Security
                      </span>
                      <span className="text-purple-400 md:text-[20px] md:font-medium md:text-center md:text-align-center hidden md:block">
                        Our Security
                      </span>
                    </Text>
                    <Text
                      size="5xl"
                      as="p"
                      className="!text-gray-900_01 md:w-full md:text-[14px] md:font-medium md:text-center md:text-align-center"
                    >
                      Your Security is Our Priority at TedFinance, we understand
                      the importance of safeguarding your financial information
                      and providing a secure environment for your financial
                      transactions. We take a comprehensive approach to security
                      and employ several layers of protection to ensure your
                      peace of mind:
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[25%] md:w-full p-3.5 bg-purple-400 rounded-[41px]">
                    <Button
                      color="light_blue_300"
                      size="xl"
                      shape="round"
                      className="sm:px-5 min-w-[161px] md:text-[14px] md:font-normal"
                    >
                      BVN/SELFIE
                    </Button>
                    <div className="flex flex-row justify-center w-[49%] p-[15px]">
                      <Text
                        as="p"
                        className="!text-white-A700 text-center  md:w-full md:text-[14px] md:font-normal"
                      >
                        National ID
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[100px] gap-[50px] md:gap-5 md:hidden">
                  <Button size="3xl" shape="circle" className="w-[62px]">
                    <Img src="images/img_arrow_left.svg" />
                  </Button>
                  <div className="flex flex-row md:flex-col justify-between items-start w-[85%] md:w-full md:gap-10">
                    <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                      <Img
                        src="images/img_container.png"
                        alt="container_three"
                        className="w-full md:h-[60px] object-cover"
                      />
                      <Heading size="md" as="h4" className="!text-purple-400">
                        Data Security{" "}
                      </Heading>
                      <Text as="p" className="!text-purple-400 !font-medium">
                        <>
                          Encryption: We employ industry-standard encryption
                          methods to protect your sensitive data, both in
                          transit and at rest. This means your information is
                          scrambled and unreadable by unauthorized individuals.
                          <br />
                          Secure Storage: Your data is stored in secure data
                          centers with robust access controls and monitoring
                          systems.
                          <br />
                          Regular Security Audits: We regularly conduct
                          independent security assessments to identify and
                          address any potential vulnerabilities.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                      <Img
                        src="images/img_container.png"
                        alt="container_five"
                        className="w-full md:h-[60px] object-cover"
                      />
                      <Heading size="md" as="h5" className="!text-purple-400">
                        Account Security
                      </Heading>
                      <Text as="p" className="!text-purple-400 !font-medium">
                        <>
                          Multi-Factor Authentication (MFA): We offer
                          multi-factor authentication as an additional layer of
                          security for your account. This requires not just your
                          password, but also a verification code sent to your
                          phone or email, making it harder for unauthorized
                          access.
                          <br />
                          Secure Login Practices: We enforce strong password
                          requirements and recommend best practices for creating
                          and managing strong passwords.
                          <br />
                          Fraud Detection and Prevention: We utilize advanced
                          fraud detection systems to monitor for suspicious
                          activity and prevent unauthorized transactions.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                      <Img
                        src="images/img_container.png"
                        alt="container_seven"
                        className="w-full md:h-[60px] object-cover"
                      />
                      <Heading size="md" as="h6" className="!text-purple-400">
                        Transparency and Communication
                      </Heading>
                      <Text as="p" className="!text-purple-400 !font-medium">
                        <>
                          Privacy Policy: We have a clear and transparent
                          privacy policy outlining how we collect, use, and
                          protect your data.
                          <br />
                          Regular Communication: We will promptly inform you of
                          any security incidents that may impact your
                          information.
                        </>
                      </Text>
                    </div>
                  </div>
                  <Button size="3xl" shape="circle" className="w-[62px]">
                    <Img src="images/img_icon_white_a700.svg" />
                  </Button>
                </div>
                <div className="flex-row md:flex-col justify-start items-center w-full mt-[100px] gap-[50px] md:gap-5 hidden md:block">
                  <div className="flex flex-col items-center justify-start w-[85%] md:w-full md:gap-10">
                    {/* Conditional rendering based on currentIndex */}
                    {currentIndex === 0 && (
                      <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_three"
                          className="w-full md:h-[60px] object-cover"
                        />
                        <Heading
                          size="md"
                          as="h4"
                          className="!text-purple-400  md:text-[20px] md:font-semibold md:text-center md:text-align-center"
                        >
                          Data Security{" "}
                        </Heading>
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:mt-[-24px] md:w-full md:text-[14px] md:font-normal md:text-center md:text-align-center"
                        >
                          <>
                            Encryption: We employ industry-standard encryption
                            methods to protect your sensitive data, both in
                            transit and at rest. This means your information is
                            scrambled and unreadable by unauthorized
                            individuals.
                            <br />
                            Secure Storage: Your data is stored in secure data
                            centers with robust access controls and monitoring
                            systems.
                            <br />
                            Regular Security Audits: We regularly conduct
                            independent security assessments to identify and
                            address any potential vulnerabilities.
                          </>
                        </Text>
                      </div>
                    )}
                    {currentIndex === 1 && (
                      <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_five"
                          className="w-full md:h-[60px] object-cover"
                        />
                        <Heading
                          size="md"
                          as="h5"
                          className="!text-purple-400 md:text-[20px] md:font-semibold md:text-center md:text-align-center"
                        >
                          Account Security
                        </Heading>
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:mt-[-24px] md:w-full md:text-[14px] md:font-normal md:text-center md:text-align-center"
                        >
                          <>
                            Multi-Factor Authentication (MFA): We offer
                            multi-factor authentication as an additional layer
                            of security for your account. This requires not just
                            your password, but also a verification code sent to
                            your phone or email, making it harder for
                            unauthorized access.
                            <br />
                            Secure Login Practices: We enforce strong password
                            requirements and recommend best practices for
                            creating and managing strong passwords.
                            <br />
                            Fraud Detection and Prevention: We utilize advanced
                            fraud detection systems to monitor for suspicious
                            activity and prevent unauthorized transactions.
                          </>
                        </Text>
                      </div>
                    )}
                    {currentIndex === 2 && (
                      <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[52px]">
                        <Img
                          src="images/img_container.png"
                          alt="container_seven"
                          className="w-full md:h-[60px] object-cover"
                        />
                        <Heading
                          size="md"
                          as="h6"
                          className="!text-purple-400 md:text-[20px] md:font-semibold md:text-center md:text-align-center"
                        >
                          Transparency and Communication
                        </Heading>
                        <Text
                          as="p"
                          className="!text-purple-400 !font-medium md:mt-[-24px] md:w-full md:text-[14px] md:font-normal md:text-center md:text-align-center"
                        >
                          <>
                            Privacy Policy: We have a clear and transparent
                            privacy policy outlining how we collect, use, and
                            protect your data.
                            <br />
                            Regular Communication: We will promptly inform you
                            of any security incidents that may impact your
                            information.
                          </>
                        </Text>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center md:mt-[2rem]">
                    <Button
                      size="3xl"
                      shape="circle"
                      className="w-[62px] mr-2"
                      onClick={handlePrevious}
                    >
                      <Img src="images/img_arrow_left.svg" />
                    </Button>
                    <Button
                      size="3xl"
                      shape="circle"
                      className="w-[62px] ml-2"
                      onClick={handleNext}
                    >
                      <Img src="images/img_icon_white_a700.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full mt-[306px] pb-14 md:pb-5 border border-solid lime_500_33_lime_500_33_border md:bg-gray-900_05 bg-purple-400 rounded-[20px] md:mt-[5rem]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1324px]">
                    <div className="flex flex-row justify-center w-[75%] md:w-full">
                      <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                        <Img
                          src="images/img_abstract_design_298x283.png"
                          alt="abstractdesign"
                          className="w-[29%] md:w-full md:h-[298px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-250px] gap-3.5 md:ml-0 md:mt-[-19rem]">
                          <Text
                            size="11xl"
                            as="p"
                            className="!text-light_blue-300 leading-[150%] md:w-full"
                          >
                            <span className="text-light_blue-300 md:hidden">
                              Start your financial journey with{" "}
                            </span>
                            <span className="text-white-A700 md:hidden">
                              TedFinance today!
                            </span>
                            <span className="text-white-A700  md:text-center md:text-align-center md:text-[28px] md:font-normal hidden md:block">
                              Start your financial journey with TedFinance
                              today!
                            </span>
                          </Text>
                          <Text
                            size="5xl"
                            as="p"
                            className="!text-light_blue-300 md:w-full md:text-[14px] md:font-light md:text-center md:text-align-center md:!text-purple-400 md:mt-[1rem]"
                          >
                            Ready to take control of your finances? Join
                            YourBank now, and let us help you achieve your
                            financial goals with our tailored solutions and
                            exceptional customer service
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      color="white_A700"
                      size="4xl"
                      className="sm:px-5 font-medium min-w-[185px] rounded-[31px] md:font-bold md:text-[20px] md:text-center md:text-align-center"
                    >
                      Open Account
                    </Button>
                  </div>
                </div>
                <footer className="justify-center items-center w-full mt-[40px] p-[50px] md:p-5 z-[1] bg-gray-900_05 hidden md:block">
                  <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
                    <Img
                      src="images/img_group_150x207.svg"
                      alt="image_six"
                      className="h-[121px]"
                    />
                    <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                      <div className="flex flex-row justify-center w-full">
                        <ul className="flex flex-row justify-between w-[24%] md:w-[90%] md:font-normal md:text-[14px] md:text-center md:text-align-center">
                          <li>
                            <a href="/">
                              <Text as="p">Home</Text>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <Text as="p">Careers</Text>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <Text as="p">About</Text>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <Text as="p">Security</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="h-px w-full bg-gray-900_04" />
                      <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                        <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                          <Img
                            src="images/img_icon_lime_500_24x24.svg"
                            alt="icon_three"
                            className="h-[24px] w-[24px]"
                          />
                          <Text
                            as="p"
                            className="md:text-center md:text-align-center md:font-normal md:text-[15px]"
                          >
                            info@tedfinance.com
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                          <Img
                            src="images/img_icon_24x24.svg"
                            alt="icon_five"
                            className="h-[24px] w-[24px]"
                          />
                          <Text
                            as="p"
                            className="md:text-center md:text-align-center md:font-normal md:text-[15px]"
                          >
                            +234 812 235 7728
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                          <Img
                            src="images/img_icon_5.svg"
                            alt="icon_seven"
                            className="h-[24px] w-[24px]"
                          />
                          <Text
                            as="p"
                            className="w-[100%] md:text-center md:text-align-center md:font-normal md:text-[15px]"
                          >
                            <>
                              23, Science Road, Unilag Estate, Magodo GRA 1,
                              Lagos State.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="h-px w-full bg-gray-900_04" />
                      <div className="flex flex-row md:flex-col justify-between items-center w-full p-4 md:gap-10 border-gray-900_04 border border-solid bg-gray-900 rounded-[42px]">
                        <div className="flex flex-row justify-start gap-3.5">
                          <Button
                            color="lime_500"
                            shape="circle"
                            className="w-[52px]"
                          >
                            <Img src="images/img_icon_gray_900_04.svg" />
                          </Button>
                          <Button
                            color="lime_500"
                            shape="circle"
                            className="w-[52px]"
                          >
                            <Img src="images/img_icon_gray_900_04_52x52.svg" />
                          </Button>
                          <Button
                            color="lime_500"
                            shape="circle"
                            className="w-[52px]"
                          >
                            <Img src="images/img_button.svg" />
                          </Button>
                        </div>
                        <Text
                          as="p"
                          className="!text-gray-400 !font-light md:font-normal md:text-[15px]"
                        >
                          TedFinance All Rights Reserved
                        </Text>
                        <div className="flex flex-row justify-start items-center w-[21%] md:w-full mr-3.5 md:mr-[-3rem] gap-3">
                          <a href="/">
                            <Text
                              as="p"
                              className="!text-gray-400 !font-light md:text-center md:text-align-center md:w-full md:font-normal md:text-[15px]"
                            >
                              Privacy Policy
                            </Text>
                          </a>
                          <div className="h-[27px] w-px bg-gray-400" />
                          <a href="/">
                            <Text
                              as="p"
                              className="!text-gray-400 !font-light md:text-center md:text-align-center md:w-full md:font-normal md:text-[15px]"
                            >
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
          <footer className="flex justify-center items-center w-full mt-[-279px] p-[50px] md:p-5 z-[1] bg-gray-900_05 md:hidden">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
              <Img
                src="images/img_group_150x207.svg"
                alt="image_six"
                className="h-[121px]"
              />
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                <div className="flex flex-row justify-center w-full">
                  <ul className="flex flex-row justify-between w-[24%]">
                    <li>
                      <a href="/">
                        <Text as="p">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Text as="p">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Text as="p">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <Text as="p">Security</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="h-px w-full bg-gray-900_04" />
                <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                    <Img
                      src="images/img_icon_lime_500_24x24.svg"
                      alt="icon_three"
                      className="h-[24px] w-[24px]"
                    />
                    <Text as="p">info@tedfinance.com</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                    <Img
                      src="images/img_icon_24x24.svg"
                      alt="icon_five"
                      className="h-[24px] w-[24px]"
                    />
                    <Text as="p">+234 812 235 7728</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                    <Img
                      src="images/img_icon_5.svg"
                      alt="icon_seven"
                      className="h-[24px] w-[24px]"
                    />
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
                    <Button
                      color="lime_500"
                      shape="circle"
                      className="w-[52px]"
                    >
                      <Img src="images/img_icon_gray_900_04.svg" />
                    </Button>
                    <Button
                      color="lime_500"
                      shape="circle"
                      className="w-[52px]"
                    >
                      <Img src="images/img_icon_gray_900_04_52x52.svg" />
                    </Button>
                    <Button
                      color="lime_500"
                      shape="circle"
                      className="w-[52px]"
                    >
                      <Img src="images/img_button.svg" />
                    </Button>
                  </div>
                  <Text as="p" className="!text-gray-400 !font-light">
                    TedFinance All Rights Reserved
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[21%] md:w-full mr-3.5 gap-3">
                    <a href="/">
                      <Text as="p" className="!text-gray-400 !font-light">
                        Privacy Policy
                      </Text>
                    </a>
                    <div className="h-[27px] w-px bg-gray-400" />
                    <a href="/">
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
