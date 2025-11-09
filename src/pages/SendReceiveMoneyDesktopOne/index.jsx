import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Img,
  Heading,
  ProductDropDown,
  HambugerMenu,
} from "../../components";
import { Link } from "react-router-dom";

export default function SendReceiveMoneyDesktopOnePage() {
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
  return (
    <>
      <Helmet>
        <title>Ted Finance</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[23px] sm:pt-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[1581px] w-full md:px-5 relative max-w-[1710px]">
            <Img
              src="images/img_abstract_design_purple_400.png"
              alt="abstractdesign"
              className="h-[382px] w-[23%] sm:w-full right-0 top-[11%] m-auto object-cover absolute"
            />
            <div className="flex flex-row md:flex-col justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
              <div className="flex flex-row md:flex-col justify-start w-[47%] md:w-full mt-[703px] gap-5 md:mt-0 animate-horizontal md:hidden">
                <Img
                  src="images/img_3d_rendering_ba_9.png"
                  alt="3drenderingba"
                  className="w-[4%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_10.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_11.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_12.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_13.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_14.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_15.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_16.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_17.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_60x27.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_9.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
                <Img
                  src="images/img_3d_rendering_ba_10.png"
                  alt="3drenderingba"
                  className="w-[45%] md:w-full md:h-[60px] object-cover rounded-[10px]"
                />
              </div>
              <div class="flex-row justify-start w-[47%] md:w-full mt-[-21rem] gap-5 hidden md:block">
                <div class="flex items-center gap-5 animate-horizontal">
                  <Img
                    src="images/img_3d_rendering_ba_9.png"
                    alt="3drenderingba"
                    class="w-[6%] md:h-[24px] object-cover rounded-[1px]"
                  />
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
              <Img
                src="images/img_mockup_1581x1660.png"
                alt="mockup_one"
                className="w-[98%] md:w-full ml-[10rem] object-cover z-[1] md:ml-[-6rem]  md:mt-[-3rem] md:h-[640px]"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[33%] left-[9%] top-[17%] m-auto absolute  md:top-[15rem] md:w-full">
              <Heading
                size="3xl"
                as="h1"
                className="!font-bold mr-[12.5rem] md:mr-[0rem] md:text-[30px]  md:mt-[-6rem] md:w-full"
              >
                <>
                  Smart Virtual <br className="md:hidden" />
                  US Dollar Card
                </>
              </Heading>
              <Text
                size="8xl"
                as="p"
                className=" !text-black-900_02 !font-poppins mt-[2rem] md:w-full md:font-normal md:text-[12px] md:mt-[0rem]"
              >
                <>
                  You can now Shop online, Pay subscription{" "}
                  <br className="md:hidden" />
                  and lots more with TedFinance Smart Virtual{" "}
                  <br className="md:hidden" />
                  US Dollar Card{" "}
                </>
              </Text>
            </div>

            <Button
              size="5xl"
              rightIcon={
                <Img
                  src="images/img_heroiconssolid_arrowuptray.svg"
                  alt="heroicons-solid/arrow-up-tray"
                />
              }
              className="gap-[30px] left-[8%] md:left-[10.5%] top-[37%] md:top-[57%] m-auto sm:px-5 font-poppins font-semibold min-w-[397px] md:min-w-[340px] absolute rounded-[15px] md:w-[70%]"
            >
              Get Started Now
            </Button>
            <div className="flex flex-col items-start justify-start w-[35%] bottom-[-5%] md:bottom-[5rem] md:left-[10.5%] left-[8%] m-auto absolute md:w-[80%]">
              <Heading
                as="h2"
                className="!font-bold md:text-[26px]  md:mt-[-10rem] md:w-full"
              >
                Enjoy Cashless Shopping
              </Heading>
              <Text
                size="8xl"
                as="p"
                className="mt-[5px] !text-black-900_02 !font-poppins z-[1] md:w-[85%] md:font-normal md:text-[12px] md:mt-[0rem]"
              >
                Shop online & Pay easily with your TedFinance Smart Virtual US
                Dollar Card
              </Text>
              <Img
                src="images/img_currency_exchan_586x571.png"
                alt="currencyexchan"
                className="w-[98%] md:w-[100%] md:h-[400px] mt-[-3px] object-cover md:object-contain rounded-[20px]"
              />
            </div>
            <div className="flex-col items-start justify-start w-[35%] bottom-[-26rem] md:left-[10.5%] left-[8%] m-auto absolute md:w-[80%] hidden md:block">
              <Heading
                as="h2"
                className="!font-bold md:text-[26px]  md:mt-[-10rem] md:w-full"
              >
                Pay Subscriptions
              </Heading>
              <Text
                size="8xl"
                as="p"
                className="mt-[5px] !text-black-900_02 !font-poppins z-[10] md:w-[85%] md:font-normal md:text-[12px] md:mt-[0rem]"
              >
                Your can generate and instant receipt of payment in a sec., for
                free
              </Text>
              <Img
                src="images/img_3d_rendering_ba_400x400.png"
                alt="currencyexchan"
                className="w-[98%] md:w-[100%] md:h-[400px] mt-[-3px] object-contain rounded-[20px]"
              />
            </div>
            <div className="flex-col items-start justify-start w-[35%] bottom-[-60rem] md:left-[10.5%] left-[8%] m-auto absolute md:w-[80%] hidden md:block">
              <Heading
                as="h2"
                className="!font-bold md:text-[26px]  md:mt-[-10rem] md:w-full"
              >
                Pay for your Travels with the Virtual USD Card
              </Heading>
              <Text
                size="8xl"
                as="p"
                className="mt-[5px] !text-black-900_02 !font-poppins z-[1] md:w-[85%] md:font-normal md:text-[12px] md:mt-[0rem]"
              >
                Your Tourist is covered with your TedFinance Virtual US Dollar
                Card
              </Text>
              <Img
                src="images/img_3d_rendering_ba_424x400.png"
                alt="currencyexchan"
                className="w-[98%] md:w-[100%] md:h-[400px] mt-[-3px] object-contain rounded-[20px]"
              />
            </div>
            <div className="flex-col items-start justify-start w-[35%] bottom-[-95rem] md:left-[10.5%] left-[8%] m-auto absolute md:w-[80%] hidden md:block">
              <Heading
                as="h2"
                className="!font-bold md:text-[26px]  md:mt-[-10rem] md:w-full"
              >
                We have your Funds Secured Always
              </Heading>
              <Text
                size="8xl"
                as="p"
                className="mt-[5px] !text-black-900_02 !font-poppins z-[1] md:w-[85%] md:font-normal md:text-[12px] md:mt-[0rem]"
              >
                Your Payments are Highly secured with a backend encrypted
              </Text>
              <Img
                src="images/img_3d_rendering_ba_18.png"
                alt="currencyexchan"
                className="w-[98%] md:w-[100%] md:h-[400px] mt-[-3px] object-contain rounded-[20px]"
              />
            </div>
            <Img
              src="images/Logo-one-white.svg"
              alt="image"
              className="h-[164px] ml-[9rem] mt-10 md:ml-[1rem] md:h-[60px]"
            />
            <Button
              color="light_blue_300"
              size="4xl"
              rightIcon={
                <Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />
              }
              className="bg-light_blue-300 cursor-pointer rounded-[27px] relative hidden md:block md:left-[78%] md:mt-[-4rem]"
              onClick={toggleHambugerMenu}
            />
            {isOpenHam && (
              <div
                ref={mambugerRef}
                className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg"
                style={{
                  marginTop: "-100rem",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <HambugerMenu toggleMenu={toggleHambugerMenu} />
              </div>
            )}
            <header className="flex flex-row md:flex-col justify-between items-center w-[59%] md:w-full mt-[-160px] ml-[38rem] md:gap-10 md:ml-0 md:mt-0 z-[1] relative md:hidden">
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
                    <p className="mt-1 !text-white-A700 cursor-pointer">
                      Company
                    </p>
                  </Link>
                </div>
              </div>
              <ul className="flex flex-row justify-start items-center gap-[30px]">
                <li>
                  <a
                    href="/"
                    className="cursor-pointer hover:bg-light_blue-300"
                  >
                    <Text as="p" className="!text-gray-900_01">
                      Sign Up
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="/"
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
                  style={{ marginTop: "5px", width: "399px", height: "411px" }}
                >
                  <ProductDropDown toggleMenu={toggleMenu} />
                </div>
              )}
            </header>
          </div>

          <div className="flex flex-row md:flex-col justify-between w-full mt-[29px] md:gap-10 md:px-5 max-w-[1333px] mr-[-2rem] md:hidden">
            <Heading as="h2" className="w-[21%] text-center text-align-center">
              <>
                Pay <br />
                Subscriptions{" "}
              </>
            </Heading>
            <div className="flex flex-row md:flex-col justify-between w-auto gap-[52px] md:gap-10">
              <Heading
                as="h3"
                className="w-[52%] text-center text-align-center"
              >
                <>
                  Pay for your Travels
                  <br />
                  with the Virtual USD Card
                </>
              </Heading>
              <Heading
                as="h4"
                className="w-[43%] text-center text-align-center"
              >
                <>
                  We have your Funds <br />
                  Secured Always
                </>
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-6 gap-[35px] md:px-5 max-w-[1389px] mr-[-5rem] md:hidden">
            <div className="flex flex-row md:flex-col justify-center items-start w-[98%] md:w-full md:gap-5">
              <Text
                size="8xl"
                as="p"
                className="w-[29%] mt-3.5 md:mt-0 !text-black-900_02 !font-poppins text-center text-align-center"
              >
                <>
                  Your can generate and instant receipt of payment in a sec.,
                  for free{" "}
                </>
              </Text>
              <Text
                size="8xl"
                as="p"
                className="w-[28%] ml-[257px] md:ml-5 !text-black-900_02 !font-poppins text-center text-align-center"
              >
                <>
                  Your Tourist is covered with your TedFinance Virtual <br />
                  US Dollar Card
                </>
              </Text>
              <Text
                size="8xl"
                as="p"
                className="mt-3.5 ml-[165px] md:ml-5 md:mt-0 !text-black-900_02 !font-poppins text-center text-align-center"
              >
                Your Payments are Highly secured with a backend encrypted{" "}
              </Text>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-end w-full md:gap-10">
              <Img
                src="images/img_3d_rendering_ba_400x400.png"
                alt="3drenderingba"
                className="w-[400px] md:h-auto object-cover rounded-[20px]"
              />
              <Img
                src="images/img_3d_rendering_ba_424x400.png"
                alt="3drenderingba"
                className="w-[29%] md:w-full md:h-[424px] object-cover rounded-[20px]"
              />
              <Img
                src="images/img_3d_rendering_ba_18.png"
                alt="3drenderingba"
                className="w-[400px] md:h-auto object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-[133px] md:mt-[100rem] pb-14 md:pb-5 md:px-5 border border-solid lime_450_33_lime_450_33_border bg-purple-400 max-w-[1404px] rounded-[20px] md:bg-gray-900_05 ">
            <div className="flex flex-row md:flex-col justify-between items-center w-[95%] md:gap-10">
              <div className="flex flex-row justify-center w-[75%] md:w-full">
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                  <Img
                    src="images/img_abstract_design_298x283.png"
                    alt="abstractdesign"
                    className="w-[29%] md:w-full md:h-[298px] object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[92%] md:w-full ml-[-203px] gap-3.5 md:ml-0 md:mt-[-19rem] ">
                    <Text
                      size="11xl"
                      as="p"
                      className="!text-light_blue-300 leading-[150%]"
                    >
                      <span className="text-light_blue-300 md:hidden">
                        Start your financial journey with{" "}
                      </span>
                      <span className="text-white-A700 md:hidden">
                        TedFinance today!
                      </span>
                      <span className="text-white-A700  md:text-center md:text-align-center md:text-3xl hidden md:block md:ml-[1rem]">
                        Start your financial journey with TedFinance today!
                      </span>
                    </Text>
                    <Text
                      size="5xl"
                      as="p"
                      className="!text-light_blue-300 md:text-center md:text-align-center md:!text-purple-400 md:mt-[1rem] md:ml-[1rem]"
                    >
                      Ready to take control of your finances? Join YourBank now,
                      and let us help you achieve your financial goals with our
                      tailored solutions and exceptional customer service
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                color="white_A700"
                size="4xl"
                className="sm:px-5 font-medium min-w-[185px] rounded-[31px]"
              >
                Open Account
              </Button>
            </div>
          </div>
          <footer className="flex justify-center items-center w-full mt-[123px] p-[45px] md:p-5 bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[45px] gap-[49px]">
              <div className="flex flex-col items-center justify-start w-full gap-[45px]">
                <Img
                  src="images/img_group_white_a700.svg"
                  alt="image_one"
                  className="h-[121px]"
                />
                <div className="flex flex-col items-center justify-start w-full gap-[45px]">
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
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full pl-[326px] pr-14 gap-5 md:px-5">
                <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-1.5">
                  <Img
                    src="images/img_icon_lime_500_24x24.svg"
                    alt="icon_one"
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
                    alt="icon_three"
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
                    alt="icon_five"
                    className="h-[24px] w-[24px]"
                  />
                  <Text
                    as="p"
                    className="md:text-center md:text-align-center md:font-normal md:text-[15px] md:w-[70%] w-[91%]"
                  >
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
          </footer>
        </div>
      </div>
    </>
  );
}
