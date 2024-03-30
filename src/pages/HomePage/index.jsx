/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"



export default function HomePage() {
  const backgroundRef = useRef(null);
  const worldRef = useRef(null);
  const phonesRef = useRef(null);
  const progressRef = useRef(null);
  const cashRef = useRef(null);
  const colorCardRef = useRef(null);
  const investRef = useRef(null);
  const satRef = useRef(null);
  const manRef = useRef(null);
  const qbRef = useRef(null);
  const keyRef = useRef(null);
  const lockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-bg.svg')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(backgroundRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-world.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(worldRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-3d-phone.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(phonesRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-progress.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(progressRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-jump-cash.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(cashRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-color-card.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(colorCardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/invest.svg')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(investRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-invest.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(satRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/man.svg')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(manRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-qb.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(qbRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/key-lock.svg')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(keyRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url('images/home-lock.gif')`;
          observer.unobserve(lazyImage);
        }
      });
    });

    observer.observe(lockRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <div
        ref={backgroundRef}
        className="bg-cover bg-no-repeat overflow-x-hidden w-full h-full"
      >
        <Header />
        <div className="2xl:mx-[8rem] xl:mx-[5rem] mx-[2em] lg:mt-8">
          <div className="flex justify-center items-center lg:justify-end 2xl:mr-[11rem] xl:mr-[9rem] lg:mr-[5rem]">
            <Img src="images/ngn.svg" alt="logo" className="lg:w-[300px] lg:h-[70px] w-[200px] h-[50px]" />
          </div>

          <div className="flex flex-col lg:flex-row justify-start w-full mt-[2rem]">
            <div className="flex flex-col items-start justify-start gap-5 w-full">
              <Input
                shape="round"
                name="container_one"
                placeholder="Your access to Global Financial Power"
                prefix={<Img src="images/img_icon.svg" alt="Icon" />}
                className="w-[99%] 2xl:w-[48%] xl:w-[70%] lg:w-[70%] text-[15px] lg:text-lg md:w-[48%] md:ml-[12rem] lg:ml-0"
              />
              <div className="flex flex-col items-center justify-start gap-3.5 w-[90vw] 2xl:w-[35vw] xl:w-[45vw] lg:w-[55vw]">
                <Heading as="h2" className="!text-gray-900_01 text-[20px] font-semibold lg:font-bold lg:text-[30px] leading-[150%]  text-center text-align-center mr-[1.5rem] lg:text-left">
                  <>
                    Welcome to TedFinance <br className="hidden 2xl:block xl:block lg:block" />
                    Your Secure, Streamlined Global Financial access.
                  </>
                </Heading>
                <Heading size="md" as="h3" className="!text-gray-900_03 leading-[150%] text-center text-align-center mr-[1.5rem] text-[14px] font-normal lg:text-left xl:text-left lg:text-[15px]">
                  Go Global, Pay Local, Set up USD, GBP, EUR virtual bank accounts in minutes. Send and receive money in over 100 countries, Buy & Sell US stocks and invest with ease.
                </Heading>
                <div className="xl:ml-[-28rem] lg:ml-[-26rem] ">
                  <Button
                    color="white_A700"
                    size="4xl"
                    rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                    className="flex flex-row gap-2.5 mt-0 font-poppins h-[50px] font-bold min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[14px]"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <div className="flex flex-col lg:flex-row xl:ml-[-14rem] lg:ml-[-12rem] 2xl:mt-10 ">
                    <Img src="images/applestore.svg" alt="applestore" className="lg:w-[200px] lg:h-[101px]" />
                    <Img src="images/playstore.svg" alt="playstore" className="lg:w-[200px] lg:h-[101px] lg:mt-[-0.1rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="">

              <Img src="images/main.svg" alt="iphone mock up" className="lg:w-[1018px] w-[300px] ml-[2rem] md:ml-[13rem] lg:ml-0 mt-5 lg:mt-0" />
            </div>
            <div className="lg:hidden block ">
              <div className="flex flex-col justify-start items-center">
                <Img src="images/applestore.svg" alt="applestore" className="w-[200px] h-[100px]" />
                <Img src="images/playstore.svg" alt="playstore" className="w-[200px] h-[100px]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[8rem] mt-2">
            <div className="w-full 2xl:w-[50%] xl:w-[60%]  lg:w-[70%]">
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="2xl:!text-white-A700 !text-purple-400 w-full text-[28px]  font-medium text-center text-align-center lg:text-left">
                  Manage Your World Finances with Ease: Introducing Multicurrency Virtual Accounts
                </Text>
                <Text size="5xl" as="p" className="!text-gray-900_01 2xl:text-[17px] text-center text-align-center text-[14px] font-normal lg:text-left">
                  <>
                    Get Virtual Accounts in USD, EUR, GBP, & NGN to receive payments from anyone, anywhere. A Virtual Account works just like a regular bank account.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex w-full 2xl:w-[22%] xl:w-[27%] lg:w-[32%] lg:justify-end lg:items-center lg:mt-0 mt-4">
              <div className="flex flex-row justify-center  w-full p-[0.6rem] border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                <Button color="light_blue_300" size="xl" shape="round" className="px-5 min-w-[150px] w-full text-[14px] font-normal">
                  For Individuals
                </Button>

                <Text as="p" className="!text-white-A700 text-center text-[14px] font-normal flex flex-row justify-center p-[15px] w-full">
                  For Businesses
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div
                ref={worldRef}
                className="bg-no-repeat mx-auto lg:mx-0 bg-cover lg:mb-0 mb-6 md:w-[710px] w-[360px] rounded-[18px] h-[393px] 2xl:w-[694px] xl:w-[550px] lg:w-[460px] lg:h-[400px] xl:h-[500px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-[2rem] w-[90%] lg:w-[50%] text-[20px] lg:text-[25px]  font-medium text-align-center text-left">
                    Financial Freedom Without Borders
                  </Text>
                  <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                    <>
                      Say Goodbye to Borders: Receive Payments Like a Local, Get Virtual Accounts in Multiple Currencies (USD, EUR, GBP, NGN). Accept Payments from Anyone, Anywhere with your Multicurrency Bank Account.
                    </>
                  </Text>
                  <div className="xl:mt-16 lg:mt-0 md:mt-12">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Get Account
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#5BEBFF] md:mt-[3rem] lg:mt-[1rem] mt-[1rem] xl:mt-[3rem] 2xl:mt-[6rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[17px]  font-bold text-center text-align-center lg:text-left">
                    MULTICURRENCY VIRTUAL ACCOUNTS
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                </div>
              </div>
            </div>
            <div>
              <div
                ref={phonesRef}
                className="bg-no-repeat mx-auto lg:mx-0 bg-cover md:w-[710px] w-[360px] rounded-[18px] h-[393px]  2xl:w-[694px] xl:w-[550px] lg:w-[460px] lg:h-[400px] xl:h-[500px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#DE1FD6] mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[17px]  font-bold text-center text-align-center lg:text-left">
                    MULTICURRENCY VIRTUAL ACCOUNTS
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-[5rem] lg:mt-[3rem] xl:mt-[12rem] w-[90%] lg:w-[70%] text-[20px] lg:text-[25px]  font-medium text-align-center text-left">
                    Separate Business & Personal
                  </Text>
                  <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                    <>
                      Use Virtual Accounts (USD, EUR, GBP, NGN) for Organized Receiving.
                    </>
                  </Text>
                  <div className="">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Get Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Img src="images/global.svg" alt="global" className="text-align-center text-center md:ml-[20rem] ml-[9rem] 2xl:ml-[42rem] xl:ml-[33rem] lg:ml-[28rem]" />
            <div>
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center">
                  Global Money Transfer
                </Text>
                <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                  <>
                    At Ted Finance, we understand the importance of staying connected with loved ones across borders. That's why we offer a convenient, secure, and affordable
                    way to send  money directly to individuals and businesses in almost any country.
                  </>
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div
                ref={progressRef}
                className="bg-cover mx-auto lg:mx-0 bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] rounded-[18px] lg:h-[600px] h-[300px] lg:w-[300px] xl:w-[360px] 2xl:w-[460px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-4  lg:mt-[3rem] block lg:hidden lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    GLOBAL MONEY TRANSFER
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[80px] h-[1px] block lg:hidden" />
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-0 lg:mt-[2rem] w-[40%] lg:w-[40%] text-[20px] lg:text-[35px] !font-extrabold   text-align-center text-left">
                    SEND MONEY TO ANYONE, ANYWHERE, ANYTIME
                  </Text>
                </div>
              </div>
            </div>
            <div>
              <div
                ref={cashRef}
                className="bg-no-repeat bg-cover mx-auto lg:mx-0 md:w-[710px] w-[360px] rounded-[18px] h-[300px] lg:h-[600px] 2xl:w-[925px]  xl:w-[725px] lg:w-[625px] "
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    <p className="hidden lg:block">SEND MONEY </p> <p className="block lg:hidden">GLOBAL MONEY TRANSFER</p>
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[80px] h-[1px]" />
                  <Text size="" as="p" className="!text-[#FFFFFF] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[25px]  lg:!font-bold text-center text-align-center lg:text-left">
                    Send Money to over 100 Countries
                  </Text>
                  <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                    <>
                      The world is your family. Send money to almost any country with Ted Finance's secure and affordable international transfer service.
                    </>
                  </Text>
                  <div className="xl:mt-16 lg:mt-0 md:mt-12">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Make you transfer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div>
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center">
                  Virtual USD Dollar Card
                </Text>
                <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                  <>
                    Tap. Pay. Explore. Manage your money on the go with easy top-ups and track spending with confidence
                  </>
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <Img src="images/Ted-card.svg" alt="ATM" className="lg:ml-[-2rem] ml-[0] md:ml-[3rem] " />
              <div className="mt-12 w-full xl:w-[90%] 2xl:w-full">
                <div>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                    <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[20px] text-center  font-medium text-align-center lg:text-left">
                      Make seamless international payments
                    </Text>
                    <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] text-center  font-normal lg:text-left">
                      <>
                        Shop online, pay for subscriptions, and enjoy global services directly in USD, eliminating the hassle of currency conversions and transaction fees.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                ref={colorCardRef}
                className="bg-no-repeat bg-cover mx-auto lg:mx-0 mt-[1rem] 2xl:mt-[2rem] md:w-[710px] w-[360px] rounded-[18px] h-[300px] lg:h-[500px] 2xl:w-[803px]  xl:w-[725px] lg:w-[625px] "
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] hidden lg:block mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    VIRTUAL DOLLAR CARD
                  </Text>
                  <div className="bg-[#FFFFFF] lg:h-[3px] w-[80px] h-[1px] hidden lg:block" />
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-[1rem] lg:mt-[9rem] w-[90%] lg:w-[70%] 2xl:w-[50%] text-[20px] lg:text-[25px]  !font-bold text-align-center lg:text-left">
                    Unlock a World of Possibilities with our Virtual Dollar Card
                  </Text>
                  <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left hidden lg:block">
                    <>
                      we empower you to shop, subscribe, and pay securely online, anywhere in  the world. We offer innovative virtual dollar card solutions designed to  remove limitations and give you complete control over your online  spending.
                    </>
                  </Text>
                  <div className="">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-[3rem] lg:mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Activate Card
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#FFFFFF] block lg:hidden mt-8 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    VIRTUAL DOLLAR CARD
                  </Text>
                  <div className="bg-[#FFFFFF] lg:h-[3px] w-[80px] h-[1px] block lg:hidden" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div>
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center">
                  Buy & Sell US Stocks
                </Text>
                <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                  <>
                    Unleash your inner investor and empower your financial future with Investment, our user-friendly platform allows you to seamlessly buy and sell a diverse range of US stocks, all from the comfort of your own device. Whether you're a seasoned trader seeking advanced tools or a curious beginner looking to dip your toes into the market, Investment provides a secure and intuitive experience to navigate the exciting world of US equities.
                  </>
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div
                ref={investRef}
                className="bg-cover mx-auto lg:mx-0 bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] rounded-[18px] lg:h-[600px] h-[300px] lg:w-[300px] xl:w-[360px] 2xl:w-[460px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#DE1FD6] mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    INVESTMENT
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px]" />
                  <div className="block lg:hidden mt-[10rem]">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Buy Stock
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                ref={satRef}
                className="bg-no-repeat mx-auto lg:mx-0 bg-cover md:w-[710px] w-[360px] rounded-[18px] h-[300px] lg:h-[600px] 2xl:w-[925px]  xl:w-[725px] lg:w-[625px] "
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] lg:!text-[#DE1FD6] mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    INVESTMENT
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px]" />
                  <div className="block lg:hidden mt-[3rem]">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Buy Stock
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#FFFFFF] lg:mt-[17rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[25px]  lg:!font-bold text-center text-align-center lg:text-left">
                    Buy S&P 500 Stocks
                  </Text>
                  <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[50%] text-align-center text-[12px] font-normal text-left">
                    <>
                      Our user-friendly platform makes investing accessible and straightforward. Invest in a variety of Nigerian and US assets with just a few clicks, all from the comfort of your device.
                    </>
                  </Text>
                  <div className="hidden lg:block">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Buy Stock
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-12">
            <Img src="images/curr-img.svg" alt="global" className="text-align-center text-center md:ml-[20rem] ml-[9rem] 2xl:ml-[42rem] xl:ml-[33rem] lg:ml-[28rem]" />
            <div>
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center">
                  Currency Exchange
                </Text>
                <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                  <>
                    we believe the world shouldn't have financial borders. That's why we offer seamless currency exchange solutions, empowering you to Explore the globe without currency woes. Convert your money to local currencies for free, ensuring smooth and enjoyable travel experiences.
                  </>
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div
                ref={manRef}
                className="bg-cover mx-auto lg:mx-0 bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] rounded-[18px] lg:h-[600px] h-[300px] lg:w-[300px] xl:w-[360px] 2xl:w-[460px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">

                  <div className="lg:mt-[23rem] mt-[10rem]">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Exchange Now
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    CURRENCY EXCHANGE
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px]" />
                </div>
              </div>
            </div>
            <div>
              <div
                ref={qbRef}
                className="bg-no-repeat mx-auto lg:mx-0 bg-cover md:w-[710px] w-[360px] rounded-[18px] h-[300px] lg:h-[600px] 2xl:w-[925px]  xl:w-[725px] lg:w-[625px] "
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                  <Text size="" as="p" className="!text-[#FFFFFF] lg:block hidden mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    CURRENCY EXCHANGE
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px] lg:block hidden" />

                  <Text size="5xl" as="p" className="!text-[#FFFFFF] mt-4 lg:mt-[20rem] w-[90%] md:w-[80%] lg:w-[80%] text-align-center text-[12px] font-normal text-left">
                    <>
                      Sign up today and experience the future of currency exchange. It's fast, secure, and empowers you to connect with the world financially.
                    </>
                  </Text>
                  <div className="mt-[5rem] block lg:hidden">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Exchange Now
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#FFFFFF] block lg:hidden mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    CURRENCY EXCHANGE
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px] block lg:hidden" />
                  <div className="hidden lg:block">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Exchange Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div className="mt-12 w-full lg:w-[80%] 2xl:w-[70%]">
                <div>
                  <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                    <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[20px] font-medium text-align-center text-left">
                      Enjoy greater control & Experience enhanced security
                    </Text>
                    <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-left">
                      <>
                        Manage your spending effortlessly with real-time transaction notifications and the ability to instantly block or unblock your card including Benefit from advanced security features like two-factor authentication and in-app card controls to safeguard your financial information.
                      </>
                    </Text>
                    <div className="mt-0 lg:mt-[3rem]">
                      <Button
                        color="white_A700"
                        size="4xl"
                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex items-start justify-start w-full gap-[19px] lg:ml-[2rem]">
                  <div className="2xl:pb-[50px] 2xl:pl-[50px] pb-5 pl-5 bg-[#F6B0A4] mx-auto lg:mx-0 relative rounded-[20px] mt-[1rem] 2xl:mt-[2rem] md:w-[710px] w-[360px]  h-[450px] lg:h-[490px] lg:w-[650px]">
                    <Img
                      src="images/img_abstract_design_224x213.png"
                      alt="abstractdesign"
                      className="h-[224px] lg:w-[33%]  lg:right-[10px] lg:top-[10px] 2xl:w-[33%] w-[10%] 2xl:right-[10px] 2xl:top-[10px] right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="w-[85%] gap-5 grid-cols-2 lg:bottom-[12%]  2xl:bottom-[8%] left-[8%] m-auto grid absolute top-[3rem]">
                      <div className="flex flex-col items-center justify-start w-full gap-6 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                        <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                          <Button
                            color="purple_A100_03"
                            size="2xl"
                            shape="circle"
                            className="w-[58px] border-purple-A100_07 border border-solid"
                          >
                            <Img src="images/Icon-kyc.svg" />
                          </Button>
                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                          KYC & KYB
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-6 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                        <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                          <Button
                            color="purple_A100_03"
                            size="2xl"
                            shape="circle"
                            className="w-[58px] border-purple-A100_07 border border-solid"
                          >
                            <Img src="images/Icon-pci.svg" />
                          </Button>
                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                          PCI-DSS
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-7 2xl:p-[30px] p-5 bg-purple-500 rounded-[16px]">
                        <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                          <Button
                            color="purple_A100_03"
                            size="2xl"
                            shape="circle"
                            className="w-[58px] border-purple-A100_07 border border-solid"
                          >
                            <Img src="images/Icon-iso.svg" />
                          </Button>
                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                          ISO 27001
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[29px] 2xl:p-[29px] p-5 bg-purple-500 rounded-[16px]">
                        <div className="flex flex-col items-center justify-start h-[78px] w-[78px] p-2.5 bg-gradient3 rounded-[50%]">
                          <Button
                            color="purple_A100_03"
                            size="2xl"
                            shape="circle"
                            className="w-[58px] border-purple-A100_07 border border-solid"
                          >
                            <Img src="images/icon-dollar.svg" />
                          </Button>

                        </div>
                        <Text size="5xl" as="p" className="!text-white-A700 text-center !font-normal text-sm">
                          ZERO TRUST SECURITY
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[8rem] mt-2">
            <div className="w-full lg:w-[70%]">
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className=" !text-purple-400 w-full text-[28px]  font-medium text-center text-align-center lg:text-left">
                  Data & Security
                </Text>
                <Text size="5xl" as="p" className="!text-gray-900_01 text-center text-align-center text-[12px] font-normal lg:text-left">
                  <>
                    At Ted Finance, we understand that security is paramount when it comes to your money. That's why we take pride in implementing robust security measures to protect your financial information and transactions.  Specifically, we adhere to the Payment Card Industry Data Security Standard (PCI-DSS) for both our Virtual Dollar Cards and International Transfers.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex w-full 2xl:w-[22%] xl:w-[27%] lg:w-[32%] lg:justify-end lg:items-center lg:mt-12 mt-4">
              <div className="flex flex-row justify-center  w-full p-[0.6rem] border-purple-400 border border-solid bg-purple-400 rounded-[41px]">
                <Button color="light_blue_300" size="xl" shape="round" className="px-5 min-w-[150px] w-full text-[14px] font-normal">
                  BIOMETRIC
                </Button>

                <Text as="p" className="!text-white-A700 text-center text-[14px] font-normal flex flex-row justify-center p-[15px] w-full">
                  VERIFICATION
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
            <div>
              <div
                ref={keyRef}
                className="bg-cover mx-auto lg:mx-0 bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] rounded-[18px] lg:h-[600px] h-[300px] lg:w-[300px] xl:w-[360px] 2xl:w-[460px]"
              >
                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">

                  <div className="lg:mt-[25rem] mt-[10rem] ml-[-0.5rem]">
                    <Button
                      color="white_A700"
                      size="4xl"
                      rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                      className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                    >
                      Get Started
                    </Button>
                  </div>
                  <Text size="" as="p" className="!text-[#FFFFFF] mt-4 lg:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    SECURITY
                  </Text>
                  <div className="bg-[#FFFFFF] lg:w-[40px] lg:h-[3px] w-[70px] h-[1px]" />
                </div>
              </div>
            </div>
            <div>
              <div
                ref={lockRef}
                className="bg-no-repeat mx-auto lg:mx-0 bg-contain md:bg-cover md:w-[710px] w-[360px] rounded-[18px] h-[300px] lg:h-[600px] 2xl:w-[925px]  xl:w-[725px] lg:w-[625px] "
              >
                <div className="flex flex-col items-center justify-center w-full gap-[19px] md:ml-[2rem]">
                  <Text size="" as="p" className="!text-[#420442] md:mt-[15rem] mt-[13rem] 2xl:mt-[33rem] lg:mt-[32rem] 2xl:w-[9%] xl:w-[11%] lg:w-[13%] text-[10px] lg:text-[15px]  lg:!font-bold text-center text-align-center lg:text-left">
                    SECURITY
                  </Text>
                  <div className="bg-[#420442] lg:w-[80px] lg:h-[3px] w-[70px] h-[1px]" />
                </div>
              </div>
            </div>
          </div>


          <div className="lg:flex-row  flex-col justify-start items-center w-full mt-[100px] 2xl:gap-[50px] gap-5 hidden lg:block">
            <div className="flex lg:flex-row flex-col justify-start items-center">
              <Button size="3xl" shape="circle" className="w-[62px]">
                <Img src="images/img_arrow_left.svg" />
              </Button>
              <div className="flex lg:flex-row flex-col justify-between items-start 2xl:w-[85%] w-full gap-10 m-[4rem]">
                <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                  <Img
                    src="images/img_container.png"
                    alt="container_three"
                    className="w-full h-[60px] object-cover"
                  />
                  <Heading size="md" as="h4" className="!text-purple-400 font-semibold text-[15px]">
                    Data Security{" "}
                  </Heading>
                  <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center lg:text-left">
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
                  <Heading size="md" as="h5" className="!text-purple-400 font-semibold text-[15px]">
                    Account Security
                  </Heading>
                  <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center lg:text-left">
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
                  <Heading size="md" as="h6" className="!text-purple-400 font-semibold text-[15px] text-center text-align-center">
                    Transparency and Communication
                  </Heading>
                  <Text as="p" className="!text-purple-400 !font-normal w-full text-[14px] text-center text-align-center lg:text-left">
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

          <div className=" lg:flex-row flex-col justify-start items-center w-full mt-[100px] 2xl:gap-[50px] gap-5 block lg:hidden">
            <div className="flex flex-col items-center justify-start 2xl:w-[85%] w-full gap-10">
              {/* Conditional rendering based on currentIndex */}
              {currentIndex === 0 && (
                <div className="flex flex-col items-center justify-start 2xl:w-[29%] w-full gap-[52px]">
                  <Img
                    src="images/img_container.png"
                    alt="container_three"
                    className="w-full h-[60px] object-cover"
                  />
                  <Heading size="md" as="h4" className="!text-purple-400  text-[15px] font-semibold text-center text-align-center lg:text-left">
                    Data Security{" "}
                  </Heading>
                  <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center lg:text-left">
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
                  <Heading size="md" as="h5" className="!text-purple-400 text-[15px] font-semibold text-center text-align-center  lg:text-left">
                    Account Security
                  </Heading>
                  <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center lg:text-left">
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
                  <Heading size="md" as="h6" className="!text-purple-400 text-[14px] font-semibold text-center text-align-center lg:text-left">
                    Transparency and Communication
                  </Heading>
                  <Text as="p" className="!text-purple-400 2xl:!font-medium mt-[-24px] w-full text-[14px] font-normal text-center text-align-center  lg:text-left">
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

          <div className="mt-12">
            <div>
              <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center lg:text-left">
                  Frequently Asked Questions
                </Text>
                <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center lg:text-left">
                  <>
                    Do you have any questions? Contact Us.
                  </>
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full mt-14 2xl:mt-20">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="justify-center w-full lg:gap-[30px] lg:grid-cols-2 grid-cols-1 gap-5 grid">
                <div className="flex flex-col items-start justify-center w-full gap-7 lg:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                  <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                    How do I open an account with TedFinance?
                  </Text>
                  <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                  <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                    Creating a wallet with Ted Finance is easy. Simply visit our website or download Ted Finance Mobile App on Playstore for android users
                    or Apple Store for Iphone Users and click on the "Get Started" button. Follow the prompts, provide the required information, and
                    complete the application process. If you have any questions or need assistance, our customer support team is available to help.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[29px] lg:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                  <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                    What documents do I need to provide to Open and Account?
                  </Text>
                  <div className="h-px w-full bg-gradient4 max-w-[587px]" />
                  <Text as="p" className="!text-purple-400 text-[14px] font-normal">
                    <span className="!font-semibold">The documents required for Nigerians - </span>You will need to provide your BVN, National identification documents
                    (such as a NIN, passport or driver's license, proof of Address), For Business, you will need Company certificate or registration, and Source of income.<br /><br />

                    <span className="!font-semibold">For International Users - </span>You will need to provide National ID (such as passport or driver's license), For Business you will need Company certificate, and Source of income.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-7 lg:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                  <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                    How can I access my accounts online?
                  </Text>
                  <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                  <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                    Accessing your wallet online is simple and secure. Visit our website and click on the "Login" button.
                    Enter your username and password to access your accounts. If you haven't created a wallet, click on the "Get Started"
                    button and follow the registration process.
                    If you need assistance, our customer support team is available to guide you.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-7 lg:p-[50px] p-5 border border-solid purple_400_light_blue_300_border rounded-[14px]">
                  <Text size="5xl" as="p" className="!text-purple-400 text-[18px] font-medium">
                    Are my transactions and personal information secure?
                  </Text>
                  <div className="h-px w-full mx-auto bg-gradient4 max-w-[587px]" />
                  <Text as="p" className="!text-purple-400  text-[14px] font-normal">
                    At TedFinance, we prioritize  ISO standards by protecting your assets, including customer data,
                    and financial information. We employ industry-leading encryption and multi-factor authentication to
                    ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats.
                    You can bank with confidence knowing that we have a robust security systems in place.
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
          <TopFooter />
          
        </div>
        
        <Footer />
      </div>
    </>
  )
}

