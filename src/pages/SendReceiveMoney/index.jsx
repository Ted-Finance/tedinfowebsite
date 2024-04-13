/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function SendReceiveMoney() {
    const mobileToRef = useRef(null);
    const sitRef = useRef(null);
    const friendsRef = useRef(null);
    const happyRef = useRef(null);
    const jumpRef = useRef(null);
    const zeroRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/send-money-coin.gif')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(mobileToRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/sit-send-img.svg')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(sitRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/send-money-arrow.gif')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(friendsRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/happy.svg')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(happyRef.current);

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

        observer.observe(jumpRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/zero.svg')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(zeroRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <>
            <Helmet>
                <title>Ted Finance</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="overflow-x-hidden w-full h-full">
                <Header />
                <div className="2xl:mx-[8rem] xl:mx-[5rem] mx-[2em] lg:mt-8">
                    <div className="">
                        <div className="flex lg:flex-row flex-col justify-between w-full mt-[2rem]">
                            <div className="lg:w-[50%] w-full">
                                <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] text-center text-align-center lg:text-left">
                                    No Borders, No Limits: Send <br />
                                    Money Internationally to <br />
                                    Anyone, Anywhere.
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal text-[13px] lg:text-[15px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        You can Send and Receive Money from Anyone & Anywhere in <br className="hidden lg:block" />
                                        over 100 Countries.
                                    </>
                                </Text>
                                <Img src="images/send-money-img.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[70%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <div className="mt-[2rem] text-center lg:text-left">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Send Now
                                    </Button>
                                </div>

                                <div
                                    ref={mobileToRef}
                                    className="mt-8 mx-auto rounded-[18px] border border-solid border-black-900 shadow-lg lg:mx-0 bg-cover lg:bg-contain 2xl:bg-cover bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[480px] 2xl:w-[570px] 2xl:h-[593px] xl:ml-[0.7rem] 2xl:ml-[1rem]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#DE1FD6] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                        <Text size="5xl" as="p" className="!text-[#420442] w-[80%] md:w-[80%] lg:w-[90%] text-align-center lg:text-[15px]   text-[12px] font-normal text-left">
                                            <>
                                                The World is Your Family. Send Money Across Borders, Anytime.
                                            </>
                                        </Text>
                                        <div className="2xl:mt-[19rem] xl:mt-[15rem] lg:mt-[7rem] mt-[7rem]">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                            >
                                                Send Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    ref={sitRef}
                                    className="md:mt-8 mx-auto lg:mx-0 bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[300px] lg:w-[400px] xl:w-[500px] 2xl:h-[593px] 2xl:w-[600px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Send & Generate Receipt
                                        </Text>

                                        <Text size="5xl" as="p" className="!text-[#420442] w-[80%] md:w-[80%] lg:w-[90%] text-align-center lg:text-[15px] text-[12px] font-normal text-left">
                                            <>
                                                Generate receipt and your transaction history within seconds
                                            </>
                                        </Text>
                                        <div className="block lg:hidden mt-[1rem]">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                            >
                                                Send Now
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="!text-[#DE1FD6] 2xl:mt-[18rem] xl:mt-[14rem] mt-[1rem] lg:mt-[7rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#DE1FD6] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>

                                <div
                                    ref={friendsRef}
                                    className="rounded-[18px] border border-solid border-black-900 shadow-lg mt-[-2rem] mx-auto lg:mx-0 md:mt-0 bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[300px] lg:h-[400px]  xl:h-[400px] h-[300px] lg:w-[400px] xl:w-[480px] 2xl:h-[448px] 2xl:w-[570px] 2xl:ml-[1rem] xl:ml-[0.5rem]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            24/7 Support
                                        </Text>

                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center lg:text-[15px] text-[12px] font-normal text-left">
                                            <>
                                                Our dedicated customer support team is always here to assist you.
                                            </>
                                        </Text>
                                        <div className="mt-[1rem] 2xl:mt-[5rem] xl:mt-[3rem]">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                            >
                                                Send Now
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="text-[#DE1FD6] md:mt-[2rem] mt-[3rem] 2xl:mt-[5rem] xl:mt-[3rem] lg:mt-[5rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#DE1FD6]  lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>

                                <div
                                    ref={happyRef}
                                    className="mt-[2rem] mx-auto lg:mx-0 md:mt-0 lg:mt-10 bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[320px] lg:w-[400px] xl:w-[500px] 2xl:h-[593px] 2xl:w-[600px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[18px]  md:gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#FFFFFF] mt-[2rem] md:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Here's How it Works:
                                        </Text>

                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] ml-[2rem] w-[75%] md:w-[80%] lg:w-[60%] text-align-center text-[10px] md:text-[12px] font-normal text-left">
                                            <ul class="list-decimal">
                                                <li>Create a Free Account: Sign up for a free Ted Finance account in minutes.</li><br className="xl:block hidden lg:hidden md:block" /><br className="xl:block hidden lg:hidden md:block" />
                                                <li>Enter Transfer Details: Specify the recipient's information, amount to send, and desired currency.</li><br className="xl:block hidden lg:hidden md:block" /><br className="xl:block hidden lg:hidden md:block" />
                                                <li>Review & Confirm: Double-check the details and confirm your transfer.</li><br className="xl:block hidden lg:hidden md:block" /><br className="xl:block hidden lg:hidden md:block" />
                                                <li>Funds Delivered: The recipient receives the money quickly and securely.</li><br className="xl:block hidden lg:hidden md:block" /><br className="xl:block hidden lg:hidden md:block" />

                                            </ul>
                                        </Text>

                                        <Text size="" as="p" className="!text-[#FFFFFF] md:mt-[-2rem] 2xl:mt-[5rem] xl:mt-[0rem] lg:mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-[50%] w-full">

                                <Img src="images/send-money-img.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[70%] xl:w-[80%] lg:w-[83%] xl:ml-[0rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[3%] 2xl:right-[9%] xl:right-[3%] lg:top-[10%] xl:top-[18%] 2xl:top-[20rem] m-auto absolute hidden lg:block"
                                />
                                <div
                                    ref={jumpRef}
                                    className="xl:mt-[8rem] mx-auto rounded-[18px] lg:mx-0 lg:mt-[4rem] mt-[-3rem] md:mt-0  bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[300px] lg:w-[465px] xl:w-[585px] 2xl:h-[532px] 2xl:w-[750px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#FFFFFF] mt-[1rem] md:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Fast & Secure
                                        </Text>

                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%]  text-align-center lg:text-[15px] text-[12px] font-normal text-left">
                                            Your transfers are processed quickly and securely, with advanced fraud prevention measures in place.
                                        </Text>

                                        <div className="2xl:mt-[5rem] xl:mt-[0rem] lg:mt-[1rem]]">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                            >
                                                Send Now
                                            </Button>
                                        </div>

                                        <Text size="" as="p" className="2xl:ml-[20rem] xl:ml-[11rem] lg:ml-[7rem] !text-[#FFFFFF] md:ml-[27rem] ml-[10rem] mt-[1rem]  2xl:mt-[8rem] xl:mt-[4rem] lg:mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[3px] 2xl:ml-[28.5rem] xl:ml-[20.5rem] lg:ml-[14rem] ml-[10rem] md:ml-[27rem]" />
                                    </div>
                                </div>

                                <div
                                    ref={zeroRef}
                                    className="mt-[0rem] mx-auto lg:mx-0 md:mt-0 xl:mt-[8rem] lg:mt-[4rem] bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[300px] md:h-[360px] lg:w-[480px] xl:w-[600px] 2xl:h-[532px] 2xl:w-[780px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#FFFFFF] mt-[1rem] md:mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Competitive Rates
                                        </Text>

                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] text-align-center text-[14px] font-normal text-left">
                                            Enjoy low and transparent rates with no hidden fees, saving you money on every transfer.
                                        </Text>

                                        <div className="2xl:mt-[5rem] xl:mt-[0rem] lg:mt-[1rem]]">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#00000040] !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                            >
                                                Send Now
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="!text-[#FFFFFF] mt-[1rem] md:mt-[5rem] 2xl:mt-[8rem] xl:mt-[4rem] lg:mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[10px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            SEND MONEY
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TopFooter />
                </div>


                <Footer />
            </div>
        </>
    )
}


