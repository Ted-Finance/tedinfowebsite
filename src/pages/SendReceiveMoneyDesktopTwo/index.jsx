import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, ProductDropDown, HambugerMenu } from "../../components";
import { Link } from "react-router-dom"

export default function SendReceiveMoneyDesktopTwoPage() {
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
      <div className="flex flex-col items-center justify-start w-full pt-[29px] gap-[11px] sm:pt-5 bg-white-A700">
        <Img src="images/Logo-one-white.svg" alt="image" className="h-[164px] mr-[73rem] mt-10 md:h-[60px] md:mr-[17rem]" />

        <Button
          color="light_blue_300"
          size="4xl"
          rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
          className="bg-light_blue-300 cursor-pointer rounded-[27px] relative hidden md:block md:left-[35%] md:mt-[-5rem]"
          onClick={toggleHambugerMenu}
        />
        {isOpenHam && (
          <div
            ref={mambugerRef}
            className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
            style={{ marginTop: '-58rem', width: '100vw', height: '100vh' }}
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
        <div className="flex flex-col items-center justify-start w-full gap-[123px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[1102px] w-full md:px-5 relative max-w-[1411px]">
                <Heading size="md" as="h1" className="md:mt-4 hidden md:block md:ml-[1rem]">
                  About Us.
                </Heading>
                <div className="flex flex-row md:flex-col justify-center items-start w-full top-0 right-0 left-0 m-auto md:gap-5 absolute mt-[6rem] md:mt-[3rem]">
                  <Text
                    size="7xl"
                    as="p"
                    className="w-[48%] md:w-full md:px-8 md:text-lg mt-[120px] md:mt-0 !text-black-900_02 tracking-[-1.20px] !font-poppins !font-medium text-[24px]"
                  >
                    <>
                      TedFinance is a revolutionary finance wallet app <br className="md:hidden" />
                      designed to empower you to manage your money seamlessly across borders. We break down <br className="md:hidden" />
                      geographical barriers, allowing you to send and <br className="md:hidden" />
                      receive funds internationally with ease. <br className="md:hidden" />
                      Our user-friendly platform provides a secure and <br className="md:hidden" />
                      convenient way to handle your finances, all from the palm <br className="md:hidden" />
                      of your hand.
                    </>
                  </Text>
                  <div className="flex flex-row md:flex-col justify-center items-start w-full ml-[-666px] md:gap-5 md:ml-0">
                    <Heading size="4xl" as="h1" className="mt-[22px] md:mt-0 mr-[5.6rem] md:hidden">
                      About Us.
                    </Heading>
                    <Img
                      src="images/img_imockup_iphone.png"
                      alt="imockupiphone"
                      className="w-[65%] md:w-full md:h-[10%] md:ml-[-2rem] ml-[9.8rem] object-cover"
                    />
                  </div>
                </div>
                <Button
                  size="5xl"
                  rightIcon={
                    <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                  }
                  className="gap-[30px] bottom-0 right-[7%] m-auto sm:px-5 font-poppins font-semibold min-w-[397px] absolute rounded-[15px] sm:min-w-full md:hidden"
                >
                  Get Started Now
                </Button>
                <Heading size="4xl" as="h2" className="w-max md:w-full md:text-lg md:font-extrabold md:mt-[42rem] md:ml-[2rem] left-0 bottom-0 top-0 m-auto absolute mt-[33rem]">
                  Mission
                </Heading>
                <Text
                  size="7xl"
                  as="p"
                  className="w-[58%] md:w-full md:px-8 md:text-lg bottom-[2%] left-0 m-auto md:bottom-[-20%]  !text-black-900_02 tracking-[-1.20px] !font-poppins text-justify !font-medium absolute text-[24px]"
                >
                  <span className="text-black-900_02 text-[24px] md:text-lg">
                    <>
                      Our mission at TedFinance is to democratize global finance. <br className="md:hidden" />
                      We believe everyone deserves access to borderless financial tools <br className="md:hidden" />
                      that simplify money management. We strive to:
                      <br /> <br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[24px] md:text-lg">Eliminate remittance barriers: </span>
                  <span className="text-black-900_02 text-[24px] md:text-lg">
                    <>
                      Sending and receiving money internationally should be effortless and affordable. TedFinance
                      removes the complexities and high fees often associated with traditional money transfers.
                      <br /><br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[24px] md:text-lg">Empower financial inclusion: </span>
                  <span className="text-black-900_0 text-[24px] md:text-lg">
                    <>
                      We are committed to financial accessibility for all. Our app caters to individuals and businesses,
                      regardless of location or financial background.
                      <br /><br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[24px] md:text-lg">Foster financial security: </span>
                  <span className="text-black-900_0 text-[24px] md:text-lg">
                    <>
                      TedFinance prioritizes the safety and security of your funds. We
                      implement robust security measures to ensure your transactions are protected.
                    </>
                  </span>
                </Text>
                <Img
                  src="images/img_abstract_design.svg"
                  alt="abstractdesign"
                  className="h-[382px] right-[1%] top-[2%] m-auto absolute"
                />
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-full mt-[26px] gap-5 md:px-5 sm:gap-5 max-w-[1749px] animate-horizontal md:hidden">
                <Img
                  src="images/img_3d_rendering_ba.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_60x66.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_60x67.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_1.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_2.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_3.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_4.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_5.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_6.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_7.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_8.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_9.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_10.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_11.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_12.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_13.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_14.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_15.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_16.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_17.png"
                  alt="3drenderingba"
                  className="w-[4%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_60x26.png"
                  alt="3drenderingba"
                  className="w-[2%] md:h-auto sm:w-full object-cover rounded-[10px]"
                />
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="w-[55%] md:w-full md:px-8 md:h-[485px] z-[1] object-cover hidden md:block md:mt-[14rem]"
              />
              <Heading size="4xl" as="h3" className="mt-[32px] mr-[71rem] md:mr-[17.5rem] md:mt-[0.3px] md:text-lg md:font-extrabold">
                Vision
              </Heading>
              <Text
                size="7xl"
                as="p"
                className="w-[77%] mt-[19px] !text-black-900_02 tracking-[-1.20px] !font-poppins text-justify !font-medium md:text-lg text-[24px]"
              >
                <span className="text-black-900_02 text-[24px] md:text-lg">
                  We envision a world where geographical borders no longer restrict your financial potential.
                  TedFinance aspires to be the leading global finance app, offering an unparalleled user experience
                  and fostering financial freedom for everyone.
                  <br /><br />
                </span>

                <span className="text-black-900_02 font-bold text-[24px] md:text-lg">
                  Key Features
                  <br />
                </span>

                <ul className="list-disc ml-6 md:px-8">
                  <li>
                    <span className="text-black-900_02 font-bold text-[24px] md:text-lg">
                      International Money Transfers: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[24px] md:text-lg">
                      Send and receive money seamlessly from any country, with competitive exchange rates and low fees.
                    </span>
                  </li>
                  <br />

                  <li>
                    <span className="text-black-900_02 font-bold text-[24px] md:text-lg">
                      US Dollar Virtual Card: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[24px] md:text-lg">
                      Enjoy the convenience and security of a virtual card for online transactions
                      anywhere in the world. Make purchases and pay bills in USD without currency exchange hassles.
                    </span>
                  </li>
                  <br />
                  <li>
                    <span className="text-black-900_02 font-bold text-[24px] md:text-lg">
                      Secure Platform: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[24px] md:text-lg">
                      TedFinance prioritizes your financial security. We use industry-leading security
                      protocols and data encryption to safeguard your information and transactions.
                    </span>
                  </li>
                  <br />

                  <li>
                    <span className="text-black-900_02 font-bold text-[24px] md:text-lg">
                      User-Friendly Interface: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[24px] md:text-lg">
                      Our app is designed for ease of use. Navigate features intuitively and
                      manage your finances effortlessly.
                    </span>
                  </li>
                </ul>
              </Text>

              <div className="flex flex-col items-center justify-start w-full mt-[5px] gap-[41px] md:px-5 max-w-[1404px]">
                <div className="flex flex-row justify-center w-[96%] md:w-full">
                  <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone_one"
                      className="w-[55%] md:w-full md:h-[485px] z-[1] object-cover md:hidden"
                    />
                    <div className="flex flex-col items-center justify-start w-[47%] md:w-full mt-[37px] md:ml-0">
                      <Heading size="4xl" as="h4" className="md:text-[31.5px] md:font-semibold text-[49px] text-center text-align-center">
                        Join the TedFince Today
                      </Heading>
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-black-900_02 tracking-[-1.20px] !font-poppins text-justify !font-medium text-[24px]"
                      >
                        <span className="text-black-900_02 md:text-lg text-[24px]">
                          <>
                            Download the TedFinance app today and experience the future of global finance. Take control
                            of your money, transact internationally with confidence, and unlock a world of financial
                            possibilities.
                            <br /><br className="md:block hidden" />
                          </>
                        </span>
                        <span className="text-black-900_02 font-semibold md:text-lg text-[24px]">
                          Together, let&#39;s break down borders and empower your financial journey.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full pb-14 md:pb-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 rounded-[20px] md:bg-gray-900_05 md:mt-[5rem]">
                  <div className="flex flex-row md:flex-col justify-between items-center w-[95%] md:gap-10">
                    <div className="flex flex-row justify-center w-[75%] md:w-full">
                      <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                        <Img
                          src="images/img_abstract_design_298x283.png"
                          alt="abstractdesign"
                          className="w-[29%] md:w-full md:h-[298px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-203px] gap-3.5 md:ml-0 md:mt-[-19rem]">
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
              </div>
            </div>
          </div>
          <footer className="flex justify-center items-center w-full p-[50px] md:p-5 bg-gray-900_05">
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
                  <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">info@tedfinance.com</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-1.5">
                  <Img src="images/img_icon_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="md:text-center md:text-align-center md:font-normal md:text-[15px]">+234 812 235 7728</Text>
                </div>
                <div className="flex flex-row justify-start items-center w-[31%] md:w-full gap-1.5">
                  <Img src="images/img_icon_5.svg" alt="icon_five" className="h-[24px] w-[24px]" />
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
                    <Text as="p" className="!text-gray-400 !font-light ">
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
