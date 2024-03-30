/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function InvestmentPage() {
    const mobileToRef = useRef(null);
    const mobilePcToRef = useRef(null);
    const sitRef = useRef(null);
    const friendsRef = useRef(null);
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
                    lazyImage.style.backgroundImage = `url('images/invest-mobile-pc.gif')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(mobilePcToRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/invest-sit.svg')`;
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
                    lazyImage.style.backgroundImage = `url('images/invest-money.svg')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(friendsRef.current);

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
                                    Start Building Your Future
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal text-[13px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        Our user-friendly interface makes investing <br className="hidden lg:block" />
                                        accessible, regardless of your experience level. <br className="hidden lg:block" />
                                        Buy and sell assets with just a few clicks.
                                    </>
                                </Text>
                                <div className="lg:flex-row flex-col justify-start w-full mt-6  lg:mt-[3rem] gap-5 md:px-5 sm:gap-5  animate-horizontal lg:hidden block">
                                    <div className="flex items-center gap-5 animate-horizontal ">
                                        <Img
                                            src="images/img_3d_rendering_ba.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_60x66.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_60x67.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_1.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_2.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_3.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_4.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_5.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_6.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_7.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_8.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_9.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_10.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_11.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto  object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_12.png"
                                            alt="3drenderingba"
                                            className="w-[20%] h-auto object-cover rounded-[5px]"
                                        />

                                    </div>
                                </div>

                                <Img src="images/invest-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[70%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <div className="mt-[2rem] text-center lg:text-left">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Start Investing Today!
                                    </Button>
                                </div>
                                <div className="lg:flex-row flex-col justify-start w-[38%]  lg:mt-[3rem] xl:mt-[3rem] 2xl:mt-[3rem] gap-5 md:px-5 sm:gap-5  animate-horizontal hidden lg:block">
                                    <div className="flex items-center gap-5 animate-horizontal ">
                                        <Img
                                            src="images/img_3d_rendering_ba.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_60x66.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_60x67.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_1.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_2.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_3.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_4.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_5.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_6.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_7.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_8.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[10px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_9.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_10.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_11.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />
                                        <Img
                                            src="images/img_3d_rendering_ba_12.png"
                                            alt="3drenderingba"
                                            className="lg:w-[24%] h-auto w-full object-cover rounded-[5px]"
                                        />

                                    </div>
                                </div>

                                <div
                                    ref={mobileToRef}
                                    className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[360px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[500px] 2xl:w-[588px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#FFFFFF] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            INVESTMENTS
                                        </Text>
                                        <div className="bg-[#FFFFFF]  lg:h-[3px] w-[49px] h-[1px]" />
                                        <Text size="" as="p" className="2xl:mt-[14rem] xl:mt-[12rem] lg:mt-[5rem] !text-[#FFFFFF] mt-[5rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Effortless Investing
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Our user-friendly platform makes investing accessible and straightforward.
                                                Invest in a variety of assets with just a few clicks, all from the comfort of your device.
                                            </>
                                        </Text>
                                        <div className="">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="lg:w-[50%] w-full z-[1]">

                                <Img src="images/invest-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[60%] xl:w-[75%] lg:w-[77%] xl:ml-[0rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[3%] 2xl:right-[9%] xl:right-[3%] lg:top-[10%] xl:top-[18%] 2xl:top-[20rem] m-auto absolute hidden lg:block"
                                />

                            </div>
                        </div>
                        <div className="mt-12">
                            <div>
                                <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                                    <Text size="" as="p" className="!text-[#000000] w-full text-[20px] lg:text-[25px]  font-medium text-align-center text-center">
                                        Unleash the Potential of Your Money: Explore Stock Investment
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                                        <>
                                            Stock investment, also known as equity investing, allows you to become a partial owner in companies.
                                            By purchasing shares of publicly traded companies, you gain the opportunity to profit from their growth.
                                        </>
                                    </Text>
                                </div>
                            </div>
                        </div>

                        <div className="m-auto flex lg:flex-row flex-col justify-between w-full 2xl:mt-[4rem] mt-[2rem]">
                            <div className="m-auto lg:w-[80%] lg:mx-8">
                                <span className="text-[#420442] font-semibold text-[15px]">
                                    Why Invest in Stocks?
                                </span>

                                <ul className="list-disc  pl-[2rem] mt-[0.5rem]">
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Potential for High Returns: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Stocks have the potential to outperform other investments over the long term.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Share in Company Success: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                As a shareholder, you benefit when a company does well. Your share price can increase,
                                                and you may receive dividend payments from a portion of the company's profits.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Diversification: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Owning stocks in a variety of companies can help spread out your risk and protect your portfolio
                                                from market downturns.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#420442] w-[5px] xl:h-[277px] h-[350px] hidden lg:block 2xl:mt-[4rem] xl:mt-[8rem] lg:mt-[6rem]" />

                            <div className="m-auto  lg:w-[80%] lg:mx-8  2xl:mt-[2rem] xl:mt-[4rem] lg:mt-[3rem]">
                                <ul className="list-disc  pl-[2rem] mt-[0.5rem]">
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Building Wealth: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Stock investment can be a powerful tool for building wealth over time, especially
                                                for long-term goals like retirement.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                </ul>
                                <span className="text-[#420442] font-semibold text-[15px]">
                                    Before You Dive In:
                                </span>

                                <ul className="list-disc  pl-[2rem] mt-[0.5rem]">
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Understand the Risks: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Stock markets can be volatile, and there's always the chance of losing money.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Invest for the Long Term: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Don't expect to get rich quick. Stocks are well-suited for long-term investment horizons.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text-[#420442] font-semibold text-[15px]">Do Your Research: </span>
                                        <span className="text-[#420442] text-[15px]">
                                            <>
                                                Educate yourself about different industries, companies, and investment strategies before making any decisions.
                                                <br /><br />
                                            </>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#420442] w-[5px] xl:h-[277px] h-[350px] hidden lg:block 2xl:mt-[4rem] xl:mt-[8rem] lg:mt-[6rem]" />

                            <div className="m-auto lg:w-[80%] lg:mx-8">
                                <div className="">
                                    <div>
                                        <div className="flex flex-col items-start justify-start w-full gap-[19px] 2xl:mb-[12.5rem] xl:mb-[12.5rem] lg:mb-[17rem]">
                                            <Text size="" as="p" className="!text-[#000000] w-full text-[20px] font-medium text-align-center text-center">
                                                Multiple Investment Options:
                                            </Text>
                                            <Text size="5xl" as="p" className="!text-[#420442] w-full text-align-center text-[12px] font-normal text-center">
                                                <>
                                                    Explore a curated selection of popular stocks and ETFs (Exchange-Traded Funds) to diversify your
                                                    portfolio and align with your investment goals.
                                                </>
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="m-auto flex lg:flex-row flex-col justify-between w-full 2xl:mt-[4rem] mt-[2rem]">
                            <div
                                ref={mobilePcToRef}
                                className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[640px] w-[350px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[450px] 2xl:w-[588px]"
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                    <Text size="" as="p" className="md:mt-[3rem] mt-[1rem] !text-[#FFFFFF] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[20px]  !font-bold text-center text-align-center lg:text-left">
                                        Minimum Investment Flexibility
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            Start small! We offer a low minimum investment amount to get you started on your investing journey.
                                        </>
                                    </Text>
                                    <div className="2xl:mt-[3rem] xl:mt-[3rem]">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                    <Text size="" as="p" className="!text-[#FFFFFF] 2xl:mt-[9rem] xl:mt-[9rem] lg:mt-[5rem] mt-[5rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                        INVESTMENTS
                                    </Text>
                                    <div className="bg-[#FFFFFF]  lg:h-[3px] w-[49px] h-[1px]" />
                                </div>
                            </div>
                            <div
                                ref={sitRef}
                                className="mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[360px] 2xl:h-[500px] lg:h-[415px]  xl:h-[519px] h-[500px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] "
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[3rem]">

                                    <Text size="" as="p" className="!text-[#DE1FD6] 2xl:mt-[27rem] xl:mt-[27rem] lg:mt-[20rem] mt-[25rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                        INVESTMENTS
                                    </Text>
                                    <div className="bg-[#DE1FD6]  lg:h-[3px] w-[49px] h-[1px]" />
                                </div>
                            </div>
                            <div
                                ref={friendsRef}
                                className="mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[360px] 2xl:h-[500px] lg:h-[415px]  xl:h-[519px] h-[500px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]"
                            >

                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[3rem]">
                                    <Text size="" as="p" className="lg:mt-[3rem] md:mt-[4rem] mt-[2rem] !text-[#FFFFFF] lg:w-[90%] xl:w-[70%] 2xl:w-[70%] text-[14px] lg:text-[20px]  !font-bold text-center text-align-center lg:text-left">
                                        Recurring Investments
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            Recurring Investments: Set up automated, recurring investments to build wealth effortlessly over
                                            time. Invest consistently and watch your portfolio grow.
                                        </>
                                    </Text>
                                    <div className="2xl:mt-[3rem] xl:mt-[3rem] mt-[6rem] lg:mt-0">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                    <Text size="" as="p" className="!text-[#FFFFFF] 2xl:mt-[9rem] xl:mt-[8rem] lg:mt-[4rem] mt-[5rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                        INVESTMENTS
                                    </Text>
                                    <div className="bg-[#FFFFFF]  lg:h-[3px] w-[49px] h-[1px]" />
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




