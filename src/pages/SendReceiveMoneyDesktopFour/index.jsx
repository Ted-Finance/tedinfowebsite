import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, ProductDropDown } from "../../components";

export default function SendReceiveMoneyDesktopFourPage() {

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
          <div className="h-[2114px] w-full md:px-5 relative max-w-[1660px]">
            <Img
              src="images/img_abstract_design.svg"
              alt="abstractdesign"
              className="h-[382px] right-0 top-[8%] m-auto absolute"
            />
            <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="h-[1581px] w-full relative">
                <Img
                  src="images/img_mockup_1.png"
                  alt="mockup_one"
                  className="justify-center h-[1581px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute ml-[10rem]"
                />
                <Img src="images/img_group_150x207.svg" alt="image" className="h-[150px] ml-[6rem] mt-10"/>
                <div className="flex flex-col items-start justify-start w-[83%] h-full left-[6%] bottom-0 top-0 m-auto absolute">
                  
                  <header className="flex flex-row md:flex-col justify-between items-center w-full ml-1 md:gap-10 md:ml-0">
                    <div className="flex flex-row md:flex-col justify-between items-center w-[66%] md:w-full ml-[38rem] mt-[39px] md:gap-10 md:mt-0">
                      <div className="flex flex-row sm:flex-col justify-between w-auto gap-[27px] sm:gap-10 z-[1]">
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
                          <Button size="md" shape="round" className="sm:px-5 min-w-[99px] !rounded-[25px]">
                            Learn
                          </Button>
                          <Button size="md" shape="round" className="sm:px-5 min-w-[132px] !rounded-[25px]">
                            Company
                          </Button>
                        </>)}
                      </div>
                      {!isOpen && (
                        <>
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
                      </>)}
                    </div>
                  </header>
                  {!isOpen ? (
                  <div className="flex flex-col items-start justify-start mt-[195px]">
                    <Heading size="3xl" as="h1" className="w-[92%] ml-[3px] md:ml-0">
                      <>
                        Send & Receive <br />
                        Money From <br />
                        Friends & Family
                      </>
                    </Heading>
                    <Text size="10xl" as="p" className="mt-[25px] !text-black-900_02 !font-poppins">
                      <>
                        You can send and also receive Money <br />
                        from Anyone & Anywhere in
                        <br />
                        the world{" "}
                      </>
                    </Text>
                    <Button
                      size="5xl"
                      rightIcon={
                        <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                      }
                      className="mt-3.5 ml-0.5 gap-[30px] md:ml-0 sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-full"
                    >
                      Get Started Now
                    </Button>
                  </div>
                  ) : (
                    <div className="flex flex-col items-start justify-start mt-[-164px]">
                    <Heading size="3xl" as="h1" className="w-[92%] ml-[3px] md:ml-0">
                      <>
                        Send & Receive <br />
                        Money From <br />
                        Friends & Family
                      </>
                    </Heading>
                    <Text size="10xl" as="p" className="mt-[25px] !text-black-900_02 !font-poppins">
                      <>
                        You can send and also receive Money <br />
                        from Anyone & Anywhere in
                        <br />
                        the world{" "}
                      </>
                    </Text>
                    <Button
                      size="5xl"
                      rightIcon={
                        <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                      }
                      className="mt-3.5 ml-0.5 gap-[30px] md:ml-0 sm:px-5 font-poppins font-semibold min-w-[397px] rounded-[15px] sm:min-w-full"
                    >
                      Get Started Now
                    </Button>
                  </div>
                  )}
                  <div className="h-[593px] w-[44%] md:w-full mt-[79px] relative">
                    <Img
                      src="images/img_currency_exchan_593x591.png"
                      alt="currencyexchan"
                      className="justify-center h-[593px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                    />
                    <div className="flex flex-col items-start justify-start gap-1 left-[3%] top-[3%] m-auto absolute">
                      <Heading as="h2">Easy, Fast Payments </Heading>
                      <Text size="8xl" as="p" className="!text-black-900_02 !font-poppins">
                        Convert your Currency in a blink of an eye
                      </Text>
                    </div>
                  </div>
                  <Heading as="h3" className="mt-[86px]">
                    Send & Generate Receipt
                  </Heading>
                </div>
              </div>
              <div className="h-[532px] w-[36%] md:w-full mt-[-1px] ml-[97px] md:ml-5 z-[1] relative">
                <Img
                  src="images/img_3d_rendering_ba_532x588.png"
                  alt="3drenderingba"
                  className="justify-center h-[532px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                />
                <Text
                  size="8xl"
                  as="p"
                  className="w-[92%] top-[3%] right-0 left-0 m-auto !text-black-900_02 !font-poppins absolute"
                >
                  <>
                    Your can generate and instant receipt of payment in a sec., <br />
                    for free{" "}
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[33%] bottom-0 right-[15%] m-auto absolute mr-[-5rem]">
              <Heading as="h4" className="w-[77%]">
                <>
                  All Payments Highly <br />
                  Secured & Monitored
                </>
              </Heading>
              <div className="flex flex-col items-center justify-start h-[532px] w-[532px] sm:w-full sm:h-auto">
                <div className="flex flex-col items-center justify-start h-[532px] w-[532px] sm:w-full sm:h-auto">
                  <Img
                    src="images/img_3d_rendering_ba_532x532.png"
                    alt="3drenderingba"
                    className="w-[532px] md:h-auto object-cover rounded-[20px]"
                  />
                  <Text size="8xl" as="p" className="w-[83%] mt-[-76px] !text-black-900_02 !font-poppins">
                    Your Payments are Highly secured with a backend encrypted{" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full mt-[123px] pb-14 md:pb-5 md:px-5 border border-solid lime_500_33_lime_500_33_border bg-purple-400 max-w-[1404px] rounded-[20px]">
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
          <footer className="flex justify-center items-center w-full mt-[57px] p-[50px] md:p-5 bg-gray-900_05">
            <div className="flex flex-col items-center justify-center w-[87%] md:w-full mt-[50px] gap-[50px]">
              <Img src="images/img_group_white_a700.svg" alt="image_one" className="h-[121px]" />
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
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
