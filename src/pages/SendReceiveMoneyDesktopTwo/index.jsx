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
      <div className="flex flex-col items-center justify-start w-full pt-[29px] gap-[11px] sm:pt-5 bg-white-A700 overflow-x-hidden">
        <Img src="images/Logo-one-white.svg" alt="image" className="2xl:h-[85px] lg:h-[85px] left-[5%] lg:top-[60px] lg:left-[5%] top-[8%] m-auto absolute 2xl:top-[60px] 2xl:left-[5%] h-[60px]" />

        <Button
          color="light_blue_300"
          size="4xl"
          rightIcon={<Img src="images/Hambuger-Button.svg" alt="Hambuger Button" />}
          className="bg-light_blue-300 cursor-pointer rounded-[27px] relative lg:hidden block left-[35%] mt-[1rem] md:mt-[3rem]"
          onClick={toggleHambugerMenu}
        />
        {isOpenHam && (
          <div
            ref={mambugerRef}
            className="absolute top-full left-0 z-[2] bg-white-A700 rounded-lg shadow-lg mt-[-46rem] w-[100vw] h-[70vh] md:mt-[-63rem] md:h-[50vh]"
          >
            <HambugerMenu toggleMenu={toggleHambugerMenu} />
          </div>
        )}
        <header className="2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between items-center 2xl:w-[59%] w-full 2xl:mt-[60px] 2xl:left-[5%] gap-10 ml-0 mt-0 z-[1] relative xl:block 2xl:block hidden lg:block lg:w-[59%] lg:mt-[60px] lg:left-[5%] xl:w-[59%] xl:mt-[60px] xl:left-[5%]">
          <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col items-center 2xl:w-full lg:w-full xl:w-full 2xl:ml-[22rem] lg:ml-[8rem] xl:ml-[14rem]">
            <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-between 2xl:w-[50%] w-full gap-10 lg:gap-[0.5rem] xl:gap-[0.5rem] lg:w-[50%] xl:w-[50%] 2xl:mr-[4rem] xl:mr-[4rem] lg:mr-[4rem]">
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
                  <Text as="p" className="!text-gray-900_01 lg:pl-[1.5rem] xl:pl-0">
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
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-[123px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[802px] w-full md:px-5 relative max-w-[1411px] lg:max-w-[1531px]">
                <Heading size="md" as="h1" className="mt-4 lg:hidden block ml-[1rem] text-[20px] font-semibold">
                  About Us.
                </Heading>
                <div className="flex flex-col justify-center items-start w-full top-0 right-0 left-0 m-auto md:gap-5 absolute lg:mt-[5rem] mt-[3rem] lg:ml-[4rem] 2xl:ml-0">
                  <Text
                    size="7xl"
                    as="p"
                    className="ml-[1rem] lg:ml-0 lg:w-[60%] xl:w-full lg:px-8 md:w-[95%] lg:mt-[120px] mt-0 !text-black-900_02 tracking-[-1.20px] !font-poppins !font-medium lg:text-[18px] text-[18px]"
                  >
                    <>
                      TedFinance is a revolutionary finance wallet app <br className="hidden lg:block" />
                      designed to empower you to manage your money seamlessly across borders. We break down <br className="hidden lg:block" />
                      geographical barriers, allowing you to send and <br className="hidden lg:block" />
                      receive funds internationally with ease. <br className="hidden lg:block" />
                      Our user-friendly platform provides a secure and <br className="hidden lg:block" />
                      convenient way to handle your finances, all from the palm <br className="hidden lg:block" />
                      of your hand.
                    </>
                  </Text>
                  <div className="flex flex-row md:flex-col justify-center items-start w-full gap-5 md:ml-0 2xl:mt-[-330px] xl:mt-[-330px] lg:mt-[-350px]">
                    <Heading size="4xl" as="h1" className="mt-[22px] 2xl:ml-[2rem] xl:ml-[2rem] lg:ml-[2rem]  hidden lg:block text-[30px] font-semibold">
                      About Us.
                    </Heading>
                    <Img
                      src="images/img_imockup_iphone.png"
                      alt="imockupiphone"
                      className="2xl:w-[45%] lg:w-[43%] lg:h-[8%] w-[60%] h-[10%] ml-[-2rem] md:ml-[8rem] mt-[1rem] 2xl:ml-[40rem] xl:ml-[40rem] lg:ml-[30rem]  object-cover z-[1] lg:mt-[-80px]"
                    />
                  </div>
                </div>
                <Button
                  size="5xl"
                  rightIcon={
                    <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                  }
                  className="lg:flex 2xl:bottom-[-2%] xl:bottom-[14%] lg:bottom-[26%] 2xl:mr-[7rem] xl:mr-[-4rem] lg:mr-[-3rem] gap-[30px] bottom-0 right-[7%] m-auto sm:px-5 font-poppins font-semibold lg:min-w-[240px] 2xl:min-w-[280px] absolute rounded-[15px] min-w-full hidden"
                >
                  Get Started Now
                </Button>
                <Heading size="4xl" as="h2" className="ml-[1rem] w-max text-[20px] mt-[33rem]  md:mt-[40rem]  font-semibold xl:mt-[28rem] lg:mt-[30rem] lg:ml-[6rem] left-0 bottom-0 top-0 m-auto absolute 2xl:mt-[28rem] 2xl:ml-[2rem]">
                  Mission
                </Heading>
                <Text
                  size="7xl"
                  as="p"
                  className="ml-[-1rem] 2xl:w-[58%] xl:w-[74%] lg:w-[60%] w-full px-8 2xl:bottom-[-2%] xl:bottom-[-1%] lg:bottom-[-20%] left-0 m-auto bottom-[-45%] md:bottom-[-30%] !text-black-900_02 tracking-[-1.20px] !font-poppins text-justify !font-medium absolute text-[18px] lg:ml-[4rem] 2xl:ml-0"
                > 
                  <span className="text-black-900_02 text-[18px]">
                    <>
                      Our mission at TedFinance is to democratize global finance. <br className="md:hidden" />
                      We believe everyone deserves access to borderless financial tools <br className="md:hidden" />
                      that simplify money management. We strive to:
                      <br /> <br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[18px]">Eliminate remittance barriers: </span>
                  <span className="text-black-900_02 text-[18px]">
                    <>
                      Sending and receiving money internationally should be effortless and affordable. TedFinance
                      removes the complexities and high fees often associated with traditional money transfers.
                      <br /><br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[18px]">Empower financial inclusion: </span>
                  <span className="text-black-900_0 text-[18px]">
                    <>
                      We are committed to financial accessibility for all. Our app caters to individuals and businesses,
                      regardless of location or financial background.
                      <br /><br className="md:block hidden" />
                    </>
                  </span>
                  <span className="text-black-900_02 font-semibold text-[18px]">Foster financial security: </span>
                  <span className="text-black-900_0 text-[18px]">
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
              <div className="2xl:bottom-[35%] lg:flex-row flex-col justify-start w-full mt-[26px] lg:mt-[196px] xl:mt-[26px] gap-5 md:px-5 sm:gap-5 max-w-[1749px] animate-horizontal hidden lg:block">
                <div class="flex items-center gap-5 animate-horizontal">
                  <Img
                    src="images/img_3d_rendering_ba.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_60x66.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_60x67.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_1.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_2.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_3.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_4.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_5.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_6.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_7.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_8.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_9.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_10.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_11.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_12.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_13.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_14.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_15.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_16.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_17.png"
                    alt="3drenderingba"
                    className="lg:w-[4%] h-auto w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_3d_rendering_ba_60x26.png"
                    alt="3drenderingba"
                    className="lg:w-[2%] h-auto w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="lg:w-[55%] w-full px-8 h-[200px] md:h-[390px] lg:h-[350px] z-[1] object-cover lg:hidden block mt-[24rem] md:mt-[20rem]"
              />
              <Heading size="4xl" as="h3" className="ml-[-2rem] lg:ml-0 xl:mt-[32px] lg:mt-[40px] 2xl:mr-[89rem] xl:mr-[64rem] lg:mr-[50rem] md:mr-[39rem] mr-[17.5rem] mt-[0.3px] lg:text-[20px] text-[20px] font-bold ">
                Vision
              </Heading>
              <Text
                size="7xl"
                as="p"
                className="ml-[-2rem] lg:ml-0 2xl:w-[89%] xl:w-[85%] lg:w-[85%]  w-[77%] mt-[19px] !text-black-900_02 tracking-[-1.20px] text-justify !font-medium text-[18px] md:mr-[6rem] lg:mr-0"
              >
                <span className="text-black-900_02 text-[18px]">
                  We envision a world where geographical borders no longer restrict your financial potential.
                  TedFinance aspires to be the leading global finance app, offering an unparalleled user experience
                  and fostering financial freedom for everyone.
                  <br /><br />
                </span>

                <span className="text-black-900_02 font-semibold text-[18px]">
                  Key Features
                  <br />
                </span>

                <ul className="list-disc ml-6 md:px-8">
                  <li>
                    <span className="text-black-900_02 font-semibold text-[18px]">
                      International Money Transfers: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[18px]">
                      Send and receive money seamlessly from any country, with competitive exchange rates and low fees.
                    </span>
                  </li>
                  <br />

                  <li>
                    <span className="text-black-900_02 font-semibold text-[18px]">
                      US Dollar Virtual Card: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[18px]">
                      Enjoy the convenience and security of a virtual card for online transactions
                      anywhere in the world. Make purchases and pay bills in USD without currency exchange hassles.
                    </span>
                  </li>
                  <br />
                  <li>
                    <span className="text-black-900_02 font-semibold text-[18px]">
                      Secure Platform: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[18px]">
                      TedFinance prioritizes your financial security. We use industry-leading security
                      protocols and data encryption to safeguard your information and transactions.
                    </span>
                  </li>
                  <br />

                  <li>
                    <span className="text-black-900_02 font-semibold text-[18px]">
                      User-Friendly Interface: {""}{""}
                    </span>
                    <span className="text-black-900_02 text-[18px]">
                      Our app is designed for ease of use. Navigate features intuitively and
                      manage your finances effortlessly.
                    </span>
                  </li>
                </ul>
              </Text>

              <div className="flex flex-col items-center justify-start w-full mt-[5px] gap-[41px] md:px-5 max-w-[1404px]">
                <div className="flex flex-row justify-center lg:w-[96%] w-full">
                  <div className="flex lg:flex-row flex-col justify-center items-start w-full gap-5">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone_one"
                      className="2xl:w-[55%] w-full 2xl:h-[485px] lg:h-[350px] z-[1] object-cover hidden lg:block 2xl:ml-[-4rem]"
                    />
                    <div className="flex flex-col items-center justify-start 2xl:w-[47%] w-full mt-[37px] ml-0">
                      <Heading size="4xl" as="h4" className="text-[24px] font-semibold text-center text-align-center ml-[-5rem] lg:ml-[-8rem] xl:lg:ml-[-20rem]">
                        Join the TedFince Today
                      </Heading>
                      <Text
                        size="7xl"
                        as="p"
                        className="!text-black-900_02 tracking-[-1.20px] !font-poppins text-justify !font-medium text-[18px] lg:ml-[-1rem] 2xl:ml-0 w-[90%] lg:w-full"
                      >
                        <span className="text-black-900_02 text-[18px]">
                          <>
                            Download the TedFinance app today and experience the future of global finance. Take control
                            of your money, transact internationally with confidence, and unlock a world of financial
                            possibilities.
                            <br /><br className="block lg:hidden" />
                          </>
                        </span>
                        <span className="text-black-900_02 font-semibold  text-[20px]">
                          Together, let&#39;s break down borders and empower your financial journey.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full  2xl:pb-14 xl:pb-14 lg:pb-14 pb-5 border border-solid lime_500_33_lime_500_33_border bg-gray-900_05 2xl:bg-purple-400 lg:bg-purple-400 rounded-[20px] mt-[5rem]">
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
              </div>
            </div>
          </div>
          
          <div className="w-full">
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
                      <div className="flex 2xl:flex-row lg:flex-row xl:flex-row flex-col justify-start items-center w-full pr-14 gap-5 px-5 ml-[3rem]">
                        <div className="flex flex-row w-full sm:ml-[20rem]">
                          <div className="flex flex-row justify-start items-center 2xl:w-[22%] xl:w-[22%] w-full gap-1.5 sm:w-[40%]">
                            <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[10px] w-[10px]" />
                            <Text as="p" className="text-center text-align-center font-extralight text-[10px]">info@tedfinance.com</Text>
                          </div>
                          <div className="flex flex-row justify-start items-center 2xl:w-[19%] xl:w-[19%] w-full gap-1.5">
                            <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[10px] w-[10px] ml-[9px]" />
                            <Text as="p" className="text-center text-align-center font-extralight text-[10px]">+234 812 235 7728</Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center 2xl:w-[31%] xl:w-[31%] w-full gap-1.5 sm:ml-[15rem] md:ml-[19rem]">
                          <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[10px] w-[10px] mt-[-1rem] sm:mt-0" />
                          <Text as="p" className="w-[100%] text-center text-align-center font-extralight text-[10px] sm:w-[60%] md:w-[50%] md:ml-[-1rem]">
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
                        <div className="flex flex-row justify-start items-center 2xl:w-[21%] xl:w-[21%] w-full 2xl:mr-3.5 xl:mr-3.5 mr-[-7rem] gap-3 sm:ml-[16rem] md:ml-[21rem]">
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
          <footer className="justify-center items-center w-full mt-[40px] 2xl:p-[50px] xl:p-[50px] p-5 z-[1] bg-gray-900_05 hidden 2xl:block lg:block xl:block">
            <div className="flex flex-col items-center justify-center w-full mt-[50px] gap-[50px]">
              <Img src="images/img_group_150x207.svg" alt="image_six" className="h-[121px]" />
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                <div className="flex flex-row justify-center w-full">
                  <ul className="flex flex-row justify-between sm:w-[50% 2xl:w-[24%] xl:w-[34%] lg:w-[30%] w-[90%] font-normal text-[14px] text-center text-align-center 2xl:text-left lg:text-left xl:text-left">
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
                  <div className="flex flex-row justify-start items-center 2xl:w-[22%] xl:w-[22%] lg:w-[30%] w-full gap-1.5 sm:w-[40%]">
                    <Img src="images/img_icon_lime_500_24x24.svg" alt="icon_three" className="h-[24px] w-[24px]" />
                    <Text as="p" className="text-center text-align-center font-normal text-[15px]">info@tedfinance.com</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center 2xl:w-[19%] xl:w-[19%] lg:w-[30%] w-full gap-1.5">
                    <Img src="images/img_icon_24x24.svg" alt="icon_five" className="h-[24px] w-[24px]" />
                    <Text as="p" className="text-center text-align-center font-normal text-[15px]">+234 812 235 7728</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center lg:w-[36%] 2xl:w-[36%] w-full gap-1.5">
                    <Img src="images/img_icon_5.svg" alt="icon_seven" className="h-[24px] w-[24px]" />
                    <Text as="p" className="w-[100%] text-center text-align-center font-normal text-[15px] lg:mt-[1rem] 2xl:mt-0 ">
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
    </>
  );
}
