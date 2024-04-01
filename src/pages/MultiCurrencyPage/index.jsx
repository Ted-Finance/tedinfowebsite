/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function MultiCurrencyPage() {
    const mobileToRef = useRef(null);
    const mobilePcToRef = useRef(null);
    const sitRef = useRef(null);
    const friendsRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('https://tedfinance.s3.amazonaws.com/original-aef80321bc4fb0ff367b9c7e83ddf1fa.gif')`;
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
                    lazyImage.style.backgroundImage = `url('images/send-money-arrow.gif')`;
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
                    lazyImage.style.backgroundImage = `url('https://tedfinance.s3.amazonaws.com/original-7cf85283cb67bf3bc8c387ce5ce754ec.gif')`;
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
                    lazyImage.style.backgroundImage = `url('images/home-jump-cash.gif')`;
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
                                    Virtual Multicurrency <br className="hidden lg:block" />
                                    Bank Account
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal text-[13px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        Hold and Receive funds in USD, GBP,  EUR, and NGN bank accounts <br className="hidden lg:block" />
                                        all in your single Ted Finance Wallet for low & competitive fees.
                                    </>
                                </Text>

                                <Img src="images/multicurrency-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[70%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <div className="mt-[2rem] text-center lg:text-left">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Get your Account Now
                                    </Button>
                                </div>

                                <div
                                    ref={mobileToRef}
                                    className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[500px] 2xl:w-[588px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="md:mt-[3rem] mt-[2rem] !text-[#CE2ACD] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Hold Multiple Currencies
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Manage your Bank Account(s) entirely online, accessible from anywhere in the world. No need to visit physical branches.
                                            </>
                                        </Text>
                                        <div className="mt-[7rem] lg:mt-0">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Account
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="hidden lg:block !text-[#FFFFFF] 2xl:mt-[12rem] xl:mt-[10rem] lg:mt-[5rem] lg:w-[80%] 2xl:w-[70%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            MULTICURRENCY BANK ACCOUNT
                                        </Text>
                                        <div className="bg-[#FFFFFF]  lg:h-[3px] w-[178px] h-[1px] hidden lg:block" />
                                    </div>
                                </div>

                                <div className="m-auto lg:w-[80%] lg:m-0 lg:mt-9">
                                    <div className="">
                                        <div>
                                            <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                                                <Text size="" as="p" className="!text-[#CE2ACD] w-full text-[20px] font-medium text-align-center text-center lg:text-left">
                                                    Receive Funds Globally
                                                </Text>
                                                <Text size="5xl" as="p" className="!text-[#000000] w-full text-align-center text-[12px] font-normal text-center lg:text-left">
                                                    <>
                                                        Effortlessly receive international payments in different currencies via ACH,
                                                        SWIFT & SEPA, perfect for freelancers, remote workers, or those with family abroad.
                                                    </>
                                                </Text>
                                                <div className="m-auto lg:m-0">
                                                    <Button
                                                        color="white_A700"
                                                        size="4xl"
                                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                                    >
                                                        Get Account
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="lg:w-[50%] w-full z-[1]">

                                <Img src="images/multicurrency-mockup.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[70%] xl:w-[85%] lg:w-[82%] xl:ml-[0rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[3%] 2xl:right-[9%] xl:right-[3%] lg:top-[10%] xl:top-[18%] 2xl:top-[20rem] m-auto absolute hidden lg:block"
                                />

                            </div>
                        </div>

                        <div>

                            <div
                                ref={sitRef}
                                className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[640px] w-[300px] lg:h-[500px]  xl:h-[500px] h-[360px] lg:w-[950px] xl:w-[1100px] 2xl:w-[1399px] 2xl:h-[600px]"
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                    <Text size="" as="p" className="md:mt-[3rem] mt-[2rem] !text-[#CE2ACD] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[20px]  !font-bold text-center text-align-center lg:text-left">
                                        Local Account Details
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#CE2ACD] w-[90%] md:w-[80%] xl:w-[40%] lg:w-[60%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            Receive international payments with ease using dedicated virtual IBAN (Europe) or routing number (US)
                                            details for each currency you hold.

                                        </>
                                    </Text>
                                    <div className="2xl:mt-[3rem] xl:mt-[3rem] hidden lg:block">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Account
                                        </Button>
                                    </div>
                                    <Text size="" as="p" className=" !text-[#FFFFFF] 2xl:mt-[12rem] xl:mt-[8rem] lg:mt-[8rem] mt-[8rem] lg:w-[80%] 2xl:w-[70%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                        MULTICURRENCY BANK ACCOUNT
                                    </Text>
                                    <div className="bg-[#FFFFFF]  lg:h-[3px] w-[178px] h-[1px]" />
                                </div>
                            </div>
                        </div>


                        <div className="m-auto flex lg:flex-row flex-col justify-between w-full 2xl:mt-[4rem] mt-[2rem]">
                            <div
                                ref={mobilePcToRef}
                                className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 bg-cover  bg-no-repeat lg:mb-0 mb-6 md:w-[640px] w-[300px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[450px] 2xl:w-[588px]"
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                    <Text size="" as="p" className="md:mt-[3rem] mt-[1rem] !text-[#FFFFFF] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[20px]  !font-bold text-center text-align-center lg:text-left">
                                        Simplified Expense Tracking
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            See all your transactions categorized by currency, making budgeting and expense management a breeze.
                                        </>
                                    </Text>
                                    <div className="2xl:mt-[2rem] xl:mt-[2rem] hidden lg:block">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Account
                                        </Button>
                                    </div>
                                    <Text size="" as="p" className=" !text-[#FFFFFF] 2xl:mt-[10rem] xl:mt-[8rem] lg:mt-[6rem] mt-[8rem] lg:w-[80%] 2xl:w-[70%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                        MULTICURRENCY BANK ACCOUNT
                                    </Text>
                                    <div className="bg-[#FFFFFF]  lg:h-[3px] w-[178px] h-[1px]" />
                                </div>
                            </div>
                            <div>
                                <div
                                    ref={friendsRef}
                                    className="bg-no-repeat bg-cover mx-auto lg:mx-0 md:w-[640px] mt-[2rem] w-[300px] rounded-[18px] lg:h-[400px]  xl:h-[500px] h-[360px] 2xl:w-[800px]  xl:w-[625px] lg:w-[525px] "
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="md:mt-[2.5rem] mt-[2rem] !text-[#FFFFFF] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[20px]  !font-bold text-center text-align-center lg:text-left">
                                            Secure Transactions
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[70%] xl:w-[60%] lg:w-[60%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Enjoy peace of mind with industry-standard security measures protecting your Virtual Bank Accounts and your funds.

                                            </>
                                        </Text>
                                        <div className="2xl:mt-[2rem] xl:mt-[2rem] hidden lg:block">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Account
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className=" !text-[#FFFFFF] 2xl:mt-[10rem] xl:mt-[8rem] lg:mt-[6rem] mt-[8rem] lg:w-[80%] 2xl:w-[70%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            MULTICURRENCY BANK ACCOUNT
                                        </Text>
                                        <div className="bg-[#FFFFFF]  lg:h-[3px] w-[178px] h-[1px]" />
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




