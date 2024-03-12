/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input, ProductDropDown } from "../../components";

export default function HomePageDesktopPage() {

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
      <div className="h-[8066px] w-full bg-gradient2 relative">
        <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
          <Img src="images/img_group_1.png" alt="image" className="w-full md:h-auto sm:w-full z-[1] object-cover" />
          <Img
            src="images/img_rectangle_1.png"
            alt="image_one"
            className="w-full md:h-[6323px] mt-[-319px] object-cover"
          />
        </div>
        <div className="flex flex-row md:flex-col justify-start items-start w-[40%] gap-7 left-[10%] top-[10%] m-auto md:gap-5 absolute">
          <Button
            color="white_A700"
            size="4xl"
            rightIcon={<Img src="images/img_arrowright.svg" alt="arrow-right" />}
            className="mt-[5px] gap-2.5 md:mt-0 font-poppins font-bold min-w-[184px] rounded-[30px] cursor-pointer"
          >
            Get Started
          </Button>
          <div className="flex flex-row sm:flex-col justify-start w-[70%] md:w-full gap-[23px] sm:gap-5">
            <Button
              color="gray_900_02"
              size="6xl"
              leftIcon={<Img src="images/img_vector_46x36.png" alt="Vector" className="w-[36px] h-[46px]" />}
              className="gap-[19px] sm:pr-5 font-inter min-w-[227px] rounded-[11px]"
            >
              Google Play
            </Button>
            <Button
              color="gray_900_02"
              size="7xl"
              leftIcon={<Img src="images/img_vector.svg" alt="Vector" />}
              className="gap-[23px] sm:pr-5 font-inter min-w-[227px] rounded-[11px]"
            >
              Download on the
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-end justify-start w-full md:px-5 max-w-[1713px]">
              <div className="h-[712px] w-full relative">
  
                <div className="h-[467px] w-[40%] md:w-full bottom-[3%] right-0 m-auto absolute">
                  <Img
                    src="images/img_abstract_design.svg"
                    alt="abstractdesign"
                    className="h-[382px] bottom-0 right-0 m-auto absolute"
                  />
                  <div className="flex flex-row justify-start w-[54%] left-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-start items-center w-full gap-[15px] p-1 bg-white-A700 shadow-xs rounded-[45px]">
                      <div className="flex flex-row justify-start items-center h-[81px] w-[82px] ml-[7px] shadow-sm rounded-[50%]">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[81px] w-[82px] md:h-auto sm:w-full rounded-[50%]"
                        />
                      </div>
                      <Heading size="lg" as="h1" className="text-center !font-extrabold">
                        Naira Account (NGN)
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[90%] h-full left-0 bottom-0 top-0 m-auto absolute">
                  <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
                    <div className="h-[498px] w-[44%] md:w-full z-[1] relative">
                      <Img
                        src="images/img_abstract_design_498x689.png"
                        alt="abstractdesign"
                        className="justify-center h-[498px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <Img
                        src="images/img_group_150x207.svg"
                        alt="image_two"
                        className="h-[150px] left-[24%] top-[14%] m-auto absolute"
                      />
                    </div>
                    <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[70px] ml-[-56px] md:gap-10 md:ml-0 md:mt-0 z-[1]">
                      <div className="flex flex-row sm:flex-col justify-between w-[60%] md:w-full sm:gap-10">
                      {!isOpen && (
                        <>
                        <a
                          href="#"
                          className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 sm:px-5 cursor-pointer bg-purple-400 rounded-[25px]"
                        >
                          <Text as="p" className="!text-white-A700">
                            Home
                          </Text>
                        </a>
                        <a
                          className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 sm:px-5 cursor-pointer bg-purple-400 rounded-[25px]"
                          onClick={toggleMenu}
                        >
                          <Text as="p" className="!text-white-A700">
                            Products
                          </Text>
                        </a> 
                        </>)}
                        {isOpen && (
                          <div ref={dropdownRef}>
                            <ProductDropDown toggleMenu={toggleMenu}/>
                          </div>
                        )}
                        {!isOpen && (
                          <>
                        <div className="flex flex-row justify-center p-[13px] bg-purple-400 rounded-[25px]">
                          <Text as="p" className="!text-white-A700 cursor-pointer">
                            Learn
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
                          <Text as="p" className="mt-1 !text-white-A700 cursor-pointer">
                            Company
                          </Text>
                        </div>
                        </>)}
                      </div>
                      {!isOpen && (
                        <>
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
                      </>)}
                    </header>
                  </div>
                  <div className="flex flex-row justify-start w-[48%] md:w-full mt-[-200px] ml-[162px] md:ml-5">
                    <div className="flex flex-col items-start justify-start w-full gap-5">
                      <Input
                        shape="round"
                        name="container_one"
                        placeholder="Approved & Fully Licensed By CBN"
                        prefix={<Img src="images/img_icon.svg" alt="Icon" />}
                        className="w-[51%]"
                      />
                      <div className="flex flex-col items-center justify-start gap-3.5">
                        <Heading size="2xl" as="h2" className="!text-gray-900_01">
                          <>
                            Welcome to TedFinance <br />
                            Your Secure, Streamlined Global Financial access.
                          </>
                        </Heading>
                        <Heading size="md" as="h3" className="!text-gray-900_03 leading-[150%]">
                          A mobile application designed to empower you with the freedom and flexibility to manage your
                          finances effortlessly all over the globe.
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[43%] md:w-full mt-[-340px] mr-[90px] md:mr-5 z-[1]">
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
              <div className="flex flex-col items-start justify-start w-[82%] top-[2%] right-0 left-0 m-auto absolute">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[52%] md:w-full gap-[19px]">
                    <Text size="12xl" as="p" className="!text-purple-400">
                      About Wallet
                    </Text>
                    <Text size="5xl" as="p" className="!text-gray-900_01">
                      <>
                        TedFinance, the mobile wallet designed to streamline your financial life,
                        <br />
                        easy, fast & accurate.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[28%] p-3.5 border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                    <Button color="light_blue_300" size="xl" shape="round" className="sm:px-5 min-w-[181px]">
                      For Individuals
                    </Button>
                    <div className="flex flex-row justify-center w-[50%] p-[15px]">
                      <Text as="p" className="!text-white-A700 text-center">
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
                      <Text size="7xl" as="p" className="!text-purple-400 text-center">
                        Send & Receive Money from all Countries{" "}
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center">
                        At TedFinance, we understand the importance of staying connected with loved ones across borders.
                        That&#39;s why we offer a convenient, secure, and affordable way to send & receive money
                        directly to individuals and businesses in almost any country.
                      </Text>
                    </div>
                  </div>
                  <div className="w-px h-[430px] bg-gray-900_04" />
                  <div className="flex flex-col items-center justify-start w-[29%] md:w-full mb-1.5 gap-8">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%]">
                        <Img src="images/img_icon_1.png" alt="icon_one" className="w-[34px] md:h-auto object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center">
                        Investment in stock
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center">
                        At TedFinance, we believe everyone deserves the opportunity to invest and build their financial
                        future. We&#39;re passionate about empowering individuals of all levels, from seasoned investors
                        to curious beginners, to make informed decisions about their financial well-being.
                      </Text>
                    </div>
                  </div>
                  <div className="w-px h-[430px] bg-gray-900_04" />
                  <div className="flex flex-col items-center justify-start w-[29%] md:w-full mb-9 gap-9">
                    <div className="flex flex-col items-center justify-start h-[98px] w-[98px] p-3 bg-gradient3 rounded-[50%]">
                      <div className="flex flex-col items-center justify-start h-[74px] w-full p-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-gradient5 max-w-[74px] rounded-[50%]">
                        <Img src="images/img_icon_2.png" alt="icon_one" className="w-[34px] md:h-auto object-cover" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                      <Text size="7xl" as="p" className="!text-purple-400 text-center">
                        Cryptocurrency{" "}
                      </Text>
                      <Text size="5xl" as="p" className="!text-gray-900_01 text-center">
                        At TedFinance, we believe the future of finance is decentralized, accessible, and empowering.
                        We&#39;re passionate about cryptocurrency and its potential to transform how we manage our
                        money, invest in opportunities, and interact with the global financial system.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[97px] gap-5 md:px-5 max-w-[1104px]">
                  <Text size="12xl" as="p" className="!text-purple-400">
                    Our Virtual USD Dollar Card
                  </Text>
                  <Text size="5xl" as="p" className="!text-gray-900_01">
                    TedFinance empowers you to experience the world of international finance with ease and convenience.
                    Our flagship offering, the Virtual USD Dollar Card, unlocks a world of possibilities and unlimited
                    global access.{" "}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-[86px] gap-[60px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-row justify-center w-[38%] md:w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[341px] w-full sm:w-full relative">
                          <Img
                            src="images/cardpin.png"
                            alt="pngwingfive_one"
                            className="justify-center h-[341px] w-[70%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                         
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[56%] md:w-full gap-[62px]">
                      <div className="flex flex-col items-start justify-start w-full gap-3.5">
                        <Text size="9xl" as="p" className="!text-purple-400">
                          Make seamless international payments
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01">
                           Shop online, pay for subscriptions, and enjoy global services directly in USD, eliminating
                          the hassle of currency conversions and transaction fees.
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[26px] md:gap-5">
                        <div className="flex flex-row justify-start w-[29%] md:w-full">
                          <div className="flex flex-row justify-start items-center w-full gap-px">
                            <div className="flex flex-col items-start justify-start w-full gap-2.5">
                              <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                                99.9%
                              </Text>
                              <Text size="5xl" as="p" className="!text-gray-900_01">
                                seamless international payments
                              </Text>
                            </div>
                            <div className="h-[182px] w-px bg-gray-900_04" />
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-center w-[69%] md:w-full mt-2 gap-[54px] md:gap-[13.5px] md:mt-0">
                          <div className="flex flex-col items-start justify-start w-[45%] md:w-full gap-2.5">
                            <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                              99.9%
                            </Text>
                            <Text size="5xl" as="p" className="!text-gray-900_01">
                              Manageable Debt Consolidation
                            </Text>
                          </div>
                          <div className="w-px h-[182px] bg-gray-900_04" />
                          <div className="flex flex-col items-start justify-start w-[45%] md:w-full gap-2.5">
                            <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                              99.9%
                            </Text>
                            <Text size="5xl" as="p" className="!text-gray-900_01">
                              Reducing financial burdens
                            </Text>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[148px] h-[63px] px-6 py-5 sm:px-5 bg-purple-400 rounded-[31px]"
                      >
                        <Text as="p" className="!text-white-A700 text-center">
                          Learn More
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                    <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[62px]">
                      <div className="flex flex-col items-center justify-start gap-3.5">
                        <Text size="9xl" as="p" className="!text-purple-400">
                          Enjoy greater control & Experience enhanced security
                        </Text>
                        <Text size="5xl" as="p" className="!text-gray-900_01">
                          Manage your spending effortlessly with real-time transaction notifications and the ability to
                          instantly block or unblock your card including Benefit from advanced security features like
                          two-factor authentication and in-app card controls to safeguard your financial information.
                        </Text>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                            65%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Cash Flow Management
                          </Text>
                        </div>
                        <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                            70%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Drive Business Expansion
                          </Text>
                        </div>
                        <div className="h-[182px] w-px sm:w-full sm:h-px bg-gray-900_04" />
                        <div className="flex flex-col items-start justify-start w-[24%] sm:w-full gap-2.5">
                          <Text size="13xl" as="p" className="!text-transparent bg-gradient4 bg-clip-text">
                            45%
                          </Text>
                          <Text size="5xl" as="p" className="!text-gray-900_01">
                            Streamline payroll processing
                          </Text>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[148px] h-[63px] px-6 py-5 sm:px-5 bg-purple-400 rounded-[31px]"
                      >
                        <Text as="p" className="!text-white-A700 text-center">
                          Learn More
                        </Text>
                      </a>
                    </div>
                    <div className="h-[534px] w-[47%] pb-[50px] pl-[50px] md:pb-5 md:pl-5 bg-gradient4 relative rounded-[20px]">
                      <Img
                        src="images/img_abstract_design_224x213.png"
                        alt="abstractdesign"
                        className="h-[224px] w-[33%] sm:w-full right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="w-[85%] md:w-full gap-5 grid-cols-2 bottom-[9%] left-[8%] m-auto sm:grid-cols-1 sm:gap-5 grid absolute">
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
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal">
                            Startups and Entrepreneurs
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full gap-6 p-[30px] sm:p-5 bg-purple-500 rounded-[16px]">
                          <Img
                            src="images/img_icon_container.png"
                            alt="iconcontainer"
                            className="w-[78px] md:h-auto object-cover"
                          />
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal">
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
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal">
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
                          <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal">
                            Payment Solutions
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full mt-[81px] gap-[18px] md:px-5 max-w-[1104px]">
                  <Text size="12xl" as="p" className="!text-lime-500">
                    <span className="text-purple-400">Our</span>
                    <span className="text-purple-400">Features</span>
                  </Text>
                  <Text size="5xl" as="p" className="!text-gray-900_01">
                    Experience a host of powerful features at TedFinance, including seamless online banking, secure
                    transactions, and personalized financial insights, all designed to enhance your banking experience
                  </Text>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-start w-full mt-20 gap-[30px] md:gap-5">
                  <div className="flex flex-col items-center justify-start w-[22%] gap-6 p-[50px] md:p-5 bg-purple-400 rounded-[12px]">
                    <Button
                      color="light_blue_300"
                      size="4xl"
                      className="w-full sm:px-5 !text-purple-400 border border-solid purple_400_light_blue_300_border rounded-[31px]"
                    >
                      Online Banking
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px]"
                    >
                      Financial Tools
                    </Button>
                    <Button
                      size="4xl"
                      variant="outline"
                      color="purple_400_light_blue_300"
                      className="w-full sm:px-5 rounded-[31px]"
                    >
                      Customer Support
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[76%] md:w-full">
                    <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01">
                            24/7 Account Access
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="247_account" className="h-[34px] w-[34px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 tracking-[-0.12px]">
                          Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online
                          banking platform. Check balances, transfer funds, and pay bills with ease.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01">
                            Mobile Banking App
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="h-[34px] w-[34px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-purple-400 tracking-[-0.12px]">
                          Stay connected to your finances on the go with our user-friendly mobile banking app. Easily
                          manage your accounts, deposit checks, and make payments from your smartphone or tablet.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-light_blue-300 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01">
                            Secure Transactions
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="h-[34px] w-[34px]" />
                        </div>
                        <Text size="5xl" as="p" className="!text-purple-400 tracking-[-0.12px]">
                          Rest assured knowing that your transactions are protected by industry-leading security
                          measures. We employ encryption and multi-factor authentication to safeguard your financial
                          information.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[30px] p-[50px] md:p-5 bg-purple-A100_05 rounded-[12px]">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Text size="6xl" as="p" className="!text-gray-900_01">
                            Bill Pay and Transfers
                          </Text>
                          <Img src="images/img_icon_lime_500.svg" alt="icon_one" className="h-[34px] w-[34px]" />
                        </div>
                        <Text size="5xl" as="p" className="mb-[30px] !text-white-A700 tracking-[-0.12px]">
                          Save time and avoid late fees with our convenient bill pay service. Set up recurring payments
                          or make one-time transfers between your accounts with just a few clicks.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-10 gap-5">
                  <Text size="12xl" as="p" className="!text-lime-500">
                    <span className="text-purple-400">Frequently</span>
                    <span className="text-purple-400">Asked Questions</span>
                  </Text>
                  <Text size="5xl" as="p" className="!text-gray-900_01">
                    Still you have any questions? Contact our Team via info@tedfinance.com
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full mt-20">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full gap-[30px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400">
                          How do I open an account with TedFinance?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400 !font-medium">
                          Opening an account with TedFinance is easy. Simply visit our website and click on the
                          &quot;Open an Account&quot; button. Follow the prompts, provide the required information, and
                          complete the application process. If you have any questions or need assistance, our customer
                          support team is available to help.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[29px] p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400">
                          What documents do I need to provide to Open and Account?
                        </Text>
                        <div className="h-px w-full bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400 !font-medium">
                          The documents required for Generally, you will need to provide your BVN, National
                          identification documents (such as a NIN, passport or driver&#39;s license), For Business you
                          will need proof of income (such as pay stubs or tax returns).
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400">
                          How can I access my accounts online?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400 !font-medium">
                          Accessing your accounts online is simple and secure. Visit our website and click on the
                          &quot;Login&quot; button. Enter your username and password to access your accounts. If you
                          haven&#39;t registered for online banking, click on the &quot;Get Started&quot; button and
                          follow the registration process. If you need assistance, our customer support team is
                          available to guide you.
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center w-full gap-7 p-[50px] md:p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                        <Text size="5xl" as="p" className="!text-purple-400">
                          Are my transactions and personal information secure?
                        </Text>
                        <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                        <Text as="p" className="!text-purple-400 !font-medium">
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
                    className="gap-1 sm:px-5 font-inter min-w-[193px] rounded-[31px] sm:min-w-full mt-4"
                  >
                    Load All FAQ’s
                  </Button>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[130px] gap-2 md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[76%] md:w-full gap-[15px]">
                    <Text size="12xl" as="p" className="!text-purple-400">
                      <span className="text-purple-400">Our</span>
                      <span className="text-lime-500"></span>
                      <span className="text-purple-400">Security</span>
                    </Text>
                    <Text size="5xl" as="p" className="!text-gray-900_01">
                      Your Security is Our Priority at TedFinance, we understand the importance of safeguarding your
                      financial information and providing a secure environment for your financial transactions. We take
                      a comprehensive approach to security and employ several layers of protection to ensure your peace
                      of mind:
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-[25%] p-3.5 bg-purple-400 rounded-[41px]">
                    <Button color="light_blue_300" size="xl" shape="round" className="sm:px-5 min-w-[161px]">
                      BVN/SELFIE
                    </Button>
                    <div className="flex flex-row justify-center w-[49%] p-[15px]">
                      <Text as="p" className="!text-white-A700 text-center">
                        National ID
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[100px] gap-[50px] md:gap-5">
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
                <div className="flex flex-row justify-start w-full mt-[446px] pb-14 md:pb-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 rounded-[20px]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1324px]">
                    <div className="flex flex-row justify-center w-[75%] md:w-full">
                      <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                        <Img
                          src="images/img_abstract_design_298x283.png"
                          alt="abstractdesign"
                          className="w-[29%] md:w-full md:h-[298px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-250px] gap-3.5 md:ml-0">
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
                    <Button color="white_A700" size="4xl" className="sm:px-5 font-medium min-w-[185px] rounded-[31px] mr-[50px]">
                      Open Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex justify-center items-center w-full mt-[-279px] p-[50px] md:p-5 z-[1] bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
              <Img src="images/img_group_150x207.svg" alt="image_six" className="h-[121px]" />
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
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
                <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                    <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                    <Text as="p">info@tedfinance.com</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                    <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                    <Text as="p">+234 812 235 7728</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                    <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[24px] w-[24px]" />
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
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
