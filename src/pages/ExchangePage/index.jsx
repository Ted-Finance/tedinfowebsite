/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function ExchangePage() {
    const mobileToRef = useRef(null);
    const sitRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/money-ex.svg')`;
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
                    lazyImage.style.backgroundImage = `url('images/exchange-3d.gif')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(sitRef.current);

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
                                    Unlock a World of Currencies:<br />
                                    Convert Your Money Simply
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal lg:text-[15px] text-[13px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        Save on currency exchange: Convert your money to foreign <br className="hidden lg:block" />
                                        currencies with zero hidden fees
                                    </>
                                </Text>
                                <Img src="images/exchange-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[70%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <div className="mt-[2rem] text-center lg:text-left">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Start your Exchange Now
                                    </Button>
                                </div>

                                <div
                                    ref={mobileToRef}
                                    className="mt-8 mx-auto lg:mx-0 2xl:mt-[-2rem] xl:ml-[-1rem] bg-contain md:bg-cover lg:bg-contain  bg-no-repeat lg:mb-0 md:mb-6 md:w-[710px] w-[320px] lg:h-[400px]  xl:h-[500px] h-[300px] lg:w-[400px] xl:w-[591.52px] 2xl:h-[593px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem] md:ml-[4rem] lg:ml-[2rem] xl:ml-[4rem]   2xl:mt-[4rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] mt-[3rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            CURRENCY EXCHANGE
                                        </Text>
                                        <div className="bg-[#DE1FD6] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                        <Text size="5xl" as="p" className="!text-[#420442] w-[80%] md:w-[80%] 2xl:w-[80%] xl:w-[70%] lg:w-[80%] text-align-center lg:text-[15px] text-[12px] font-normal text-left 2xl:mt-[16rem] xl:mt-[14.5rem] lg:mt-[7rem] mt-[0rem]">
                                            <>
                                                We believe in hassle-free exchange, convert your currencies effortlessly now
                                            </>
                                        </Text>
                                        <div className="2xl:ml-[-1rem] md:mt-[7rem] lg:mt-0 mt-[5rem]">
                                            <Button
                                                color=""
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right-copy.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer  !text-[#CE2ACD] text-white text-[10px] lg:text-[14px] px-0"
                                            >
                                                Exchange Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    ref={sitRef}
                                    className="md:mt-8 mx-auto lg:mx-0 2xl:bg-contain bg-cover lg:bg-contain bg-no-repeat lg:mb-0 md:mb-6 md:w-[670px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[550px] rounded-[18px] border border-solid border-black-900 shadow-lg"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="hidden lg:block !text-[#FFFFFF] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            CURRENCY EXCHANGE
                                        </Text>
                                        <div className="lg:hidden block mt-8">
                                            <Button
                                                color=""
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right-copy.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer  !text-[#CE2ACD] text-white text-[10px] lg:text-[14px] px-0"
                                            >
                                                Exchange Now
                                            </Button>
                                        </div>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px] hidden lg:block" />
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] text-align-center lg:text-[15px] text-[12px] font-normal text-left 2xl:mt-[18rem] xl:mt-[14rem] lg:mt-[7rem] mt-[7rem]">
                                            <>
                                                We offer a comprehensive selection of currencies, constantly expanding to meet your evolving global needs.
                                            </>
                                        </Text>
                                        <div className="hidden lg:block">
                                            <Button
                                                color=""
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right-copy.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer  !text-[#CE2ACD] text-white text-[10px] lg:text-[14px] px-0"
                                            >
                                                Exchange Now
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="lg:hidden block !text-[#FFFFFF] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            CURRENCY EXCHANGE
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px] lg:hidden block" />
                                    </div>
                                </div>

                            </div>

                            <div className="lg:w-[50%] w-full">

                                <Img src="images/exchange-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[70%] xl:w-[80%] lg:w-[83%] xl:ml-[0rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[3%] 2xl:right-[5%] xl:right-[3%] lg:top-[10%] xl:top-[18%] 2xl:top-[20rem] m-auto absolute hidden lg:block"
                                />

                                <div className="mt-12">
                                    <Img src="images/curr-img.svg" alt="global" className="mx-auto" />
                                    <div>
                                        <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                                            <Text size="12xl" as="p" className="!text-[#CE2ACD] w-full text-[20px] lg:text-[20px]  font-medium text-align-center text-center">
                                            Effortless Money Management, Anywhere in the World
                                            </Text>
                                            <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center lg:text-[15px] text-[12px] font-normal text-center">
                                                <>
                                                At TedFinance, we believe finances shouldn't be confined by borders. Our innovative wallet app empowers you to send, 
                                                receive, and manage your money globally with ease.  
                                                We understand the complexities of navigating currency exchange, and that's why we offer a solution that simplifies the process.
                                                </>
                                            </Text>
                                        </div>
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