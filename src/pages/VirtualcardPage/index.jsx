/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function VirtualcardPage() {
    const mobileToRef = useRef(null);
    const sitRef = useRef(null);
    const friendsRef = useRef(null);
    const jumpRef = useRef(null);
    const zeroRef = useRef(null);
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
                    lazyImage.style.backgroundImage = `url('images/v-card2.svg')`;
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
                    lazyImage.style.backgroundImage = `url('images/v-card-paper.gif')`;
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
                    lazyImage.style.backgroundImage = `url('images/v-card4.svg')`;
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
                    lazyImage.style.backgroundImage = `url('images/v-card5.svg')`;
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
                                    Virtual <br className="hidden lg:block" />
                                    US Dollar Card
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal text-[13px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        Virtual Dollar Card is your key to seamless international spending. It's <br className="hidden lg:block" />
                                        a secure, prepaid card that functions just like a regular debit card, <br className="hidden lg:block" />
                                        but resides entirely within the digital world
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

                                <Img src="images/virtual-card-mobile.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[70%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <div className="mt-[2rem] text-center lg:text-left">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Get Your Card Now
                                    </Button>
                                </div>
                                <div className="lg:flex-row flex-col justify-start w-[40%]  lg:mt-[3rem] xl:mt-[3rem] 2xl:mt-[3rem] gap-5 md:px-5 sm:gap-5  animate-horizontal hidden lg:block">
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
                                    className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 mt-8 md:bg-cover bg-contain lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[680px] w-[350px] h-[280px] lg:h-[290px] 2xl:h-[390px]  xl:h-[360px] md:h-[360px] lg:w-[380px] xl:w-[480px] 2xl:w-[520px] lg:ml-[0.5rem] xl:ml-[0.7rem] 2xl:ml-[1rem]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Shop Online with Ease
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Shop online & Pay easily with our  Virtual  Dollar Card
                                            </>
                                        </Text>
                                        <div className="mt-8 lg:mt-0">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right-copy.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#FFFFFF] !text-[#CE2ACD] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="2xl:mt-[7rem] xl:mt-[5rem] !text-[#FFFFFF] lg:mt-[1rem] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            VIRTUAL US DOLLAR CARD
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>

                                <div
                                    ref={sitRef}
                                    className="2xl:mt-[1rem] xl:mt-[1.6rem] lg:mt-[1.5rem] mx-auto lg:mx-0  bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] lg:h-[400px]  xl:h-[500px] h-[360px] lg:w-[400px] xl:w-[500px] 2xl:w-[588px] 2xl:h-[550px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#DE1FD6] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Top Up on the Go
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#000000] w-[80%] md:w-[80%] lg:w-[80%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Conveniently reload your virtual card with funds from your Ted Finance Wallet whenever needed
                                            </>
                                        </Text>
                                        <div className="mt-8 lg:mt-0">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="2xl:mt-[12rem] xl:mt-[11rem] !text-[#DE1FD6] mt-[5rem] md:mt-[3rem] lg:mt-[5rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            VIRTUAL US DOLLAR CARD
                                        </Text>
                                        <div className="bg-[#DE1FD6] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>

                                <div
                                    ref={friendsRef}
                                    className="rounded-[18px] border border-solid border-black-900 shadow-lg mx-auto lg:mx-0 lg:mt-[1rem] 2xl:mt-0 bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[690px] w-[340px] lg:h-[285px]  xl:h-[360px] h-[260px] lg:w-[380px] xl:w-[480px] 2xl:w-[520px] 2xl:h-[390px] lg:ml-[0.5rem] xl:ml-[0.7rem] 2xl:ml-[1rem]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#FFFFFF] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Subscription Savior
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[80%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Pay for your favorite streaming services, subscriptions, and online memberships without worrying about currency conversion fees.
                                            </>
                                        </Text>
                                        <div className="mt-0 lg:mt-0 block lg:hidden">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="2xl:mt-[9rem] xl:mt-[8rem] lg:mt-[3rem] !text-[#FFFFFF] md:mt-[3.5rem] mt-[0.2rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            VIRTUAL US DOLLAR CARD
                                        </Text>
                                        <div className="bg-[#FFFFFF] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
                                    </div>
                                </div>

                            </div>

                            <div className="lg:w-[50%] w-full z-[1]">

                                <Img src="images/virtual-card-mobile.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[70%] xl:w-[80%] lg:w-[83%] xl:ml-[0rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[3%] 2xl:right-[9%] xl:right-[3%] lg:top-[10%] xl:top-[18%] 2xl:top-[20rem] m-auto absolute hidden lg:block"
                                />
                                <div
                                    ref={jumpRef}
                                    className="mx-auto lg:mx-0 lg:mt-[2rem] bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] lg:h-[400px]  xl:h-[500px] h-[300px] lg:w-[480px] xl:w-[600px] 2xl:h-[532px] 2xl:w-[760px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#420442] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Real-Time Tracking
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#000000] w-[80%] md:w-[80%] lg:w-[80%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Real-Time Tracking: Stay in control with real-time transaction history and balance updates.
                                            </>
                                        </Text>
                                        <div className="mt-[8rem] lg:hidden block">
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

                                <div
                                    ref={zeroRef}
                                    className="mx-auto lg:mx-0 mt-[0rem] lg:mt-[2rem] bg-contain md:bg-cover lg:bg-contain bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] lg:h-[430px]  xl:h-[535px] h-[330px] md:h-[360px] lg:w-[480px] xl:w-[600px] 2xl:h-[570px] 2xl:w-[755px]"
                                >
                                    <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                        <Text size="" as="p" className="!text-[#420442] md:mt-[3rem] mt-[1rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            Instant Issuance
                                        </Text>
                                        <Text size="5xl" as="p" className="!text-[#000000] w-[80%] md:w-[80%] lg:w-[60%] text-align-center text-[12px] font-normal text-left">
                                            <>
                                                Instant Issuance: Get your virtual card instantly
                                                after approval, ready to use right away.
                                            </>
                                        </Text>
                                        <div className="mt-[2rem] lg:hidden block">
                                            <Button
                                                color="white_A700"
                                                size="4xl"
                                                rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                                className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-[#CE2ACD] !text-[#FFFFFF] text-white text-[10px] lg:text-[14px]"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                        <Text size="" as="p" className="2xl:mt-[18.5rem] xl:mt-[16.5rem] !text-[#DE1FD6] mt-[3rem] md:mt-[3rem] lg:mt-[11rem] lg:w-[70%] 2xl:w-[50%] text-[14px] lg:text-[17px]  !font-bold text-center text-align-center lg:text-left">
                                            VIRTUAL US DOLLAR CARD
                                        </Text>
                                        <div className="bg-[#DE1FD6] lg:w-[176px] lg:h-[3px] w-[100px] h-[1px]" />
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


