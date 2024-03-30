/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function AboutPage() {
    const blackRef = useRef(null);
    const mushRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/black-img.svg')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(blackRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.style.backgroundImage = `url('images/about-mush.gif')`;
                    observer.unobserve(lazyImage);
                }
            });
        });

        observer.observe(mushRef.current);

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
                        <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] font-semibold">
                            About Us.
                        </Heading>
                        <div className="flex lg:flex-row flex-col">
                            <Text
                                size="7xl"
                                as="p"
                                className="lg:mt-[10px] mt-0 !text-black-900_02 !font-medium lg:text-[15px] text-[13px]"
                            >
                                <>
                                    TedFinance is a revolutionary finance wallet app designed to <br className="hidden lg:block" />
                                    empower you to manage your money seamlessly across borders. We <br className="hidden lg:block" />
                                    break down geographical barriers, allowing you to send and receive <br className="hidden lg:block" />
                                    funds internationally with ease. Our user-friendly platform provides a<br className="hidden lg:block" />
                                    secure and convenient way to handle your finances, all from the palm of<br className="hidden lg:block" />
                                    your hand.
                                </>
                            </Text>
                            <Img
                                src="images/img_imockup_iphone.png"
                                alt="imockupiphone"
                                className="2xl:w-[45%] hover:2xl:w-[48%] hover:xl:w-[52%] hover:lg:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] object-cover z-[1] lg:mt-[-3%] mt-[5%]"
                            />
                        </div>
                        <Img
                            src="images/img_abstract_design.svg"
                            alt="abstractdesign"
                            className="2xl:h-[382px] xl:h-[282px] right-[14%] xl:right-[10%] xl:top-[18%] 2xl:top-[24%] m-auto absolute hidden xl:block"
                        />
                        <div className="lg:hidden block ">
                            <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] font-semibold">
                                Mission
                            </Heading>
                            <Text
                                size="7xl"
                                as="p"
                                className="!text-black-900_02 !font-medium lg:text-[15px] text-[12px]"
                            >
                                <>
                                    Our mission at TedFinance is to democratize global finance. <br className="hidden lg:block" />
                                    We believe everyone deserves access to borderless financial tools <br className="hidden lg:block" />
                                    that simplify money management. We strive to:
                                </>

                            </Text>

                            <ul className="list-disc w-[100%] pl-[2rem]">
                                <li><span className="text-black-900_02 font-semibold text-[12px]">Eliminate remittance barriers: </span>
                                    <span className="text-black-900_02 text-[12px]">
                                        <>
                                            Sending and receiving money internationally should be effortless and affordable. TedFinance
                                            removes the complexities and high fees often associated with traditional money transfers.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Empower financial inclusion: </span>
                                    <span className="text-black-900_0 text-[12px]">
                                        <>
                                            We are committed to financial accessibility for all. Our app caters to individuals and businesses,
                                            regardless of location or financial background.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Foster financial security: </span>
                                    <span className="text-black-900_0 text-[12px]">
                                        <>
                                            TedFinance prioritizes the safety and security of your funds. We
                                            implement robust security measures to ensure your transactions are protected.
                                        </>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden block">
                            <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] font-semibold">
                                Vision
                            </Heading>
                            <Text
                                size="7xl"
                                as="p"
                                className="!text-black-900_02 !font-medium lg:text-[15px] text-[13px] mb-[0.5rem]"
                            >
                                <>
                                    We envision a world where geographical borders no longer restrict your financial potential TedFinance aspires to be <br className="hidden xl:block" />
                                    the leading global finance app, offering an unparalleled user experience and fostering financial freedom for <br className="hidden xl:block" />everyone.
                                </>

                            </Text>
                            <span className="text-black-900_02 font-semibold text-[12px]">
                                Key Features
                            </span>

                            <ul className="list-disc w-[100%] pl-[2rem] mt-[0.5rem]">
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">International Money Transfers: </span>
                                    <span className="text-black-900_02 text-[12px]">
                                        <>
                                            Send and receive money seamlessly from any country, with competitive exchange rates and low fees.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Multicurrency Virtual Bank Account: </span>
                                    <span className="text-black-900_02 text-[12px]">
                                        <>
                                            Get Virtual Accounts in USD, EUR, GBP, & NGN to receive payments from anyone, anywhere. A Virtual Account works just like a regular bank account.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">US Dollar Virtual Card: </span>
                                    <span className="text-black-900_0 text-[12px]">
                                        <>
                                            Enjoy the convenience and security of a virtual card for online transactions
                                            anywhere in the world. Make purchases and pay bills in USD without currency exchange hassles.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Currency Exchange: </span>
                                    <span className="text-black-900_02 text-[12px]">
                                        <>
                                            we believe the world shouldn't have financial borders. That's why we offer seamless currency exchange solutions, empowering you to Explore the globe without currency woes. Convert your money to local currencies for free, ensuring smooth and enjoyable travel experiences.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Investment: </span>
                                    <span className="text-black-900_02 text-[12px]">
                                        <>
                                            Unleash your inner investor and empower your financial future with Investment, our user-friendly platform allows you to seamlessly buy and sell a diverse range of US stocks, all from the comfort of your own device.
                                            Whether you're a seasoned trader seeking advanced tools or a curious beginner looking to dip your toes into the market,
                                            Investment provides a secure and intuitive experience to navigate the exciting world of US equities.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[12px]">Secure Platform: </span>
                                    <span className="text-black-900_0 text-[12px]">
                                        <>
                                            TedFinance prioritizes your financial security. We use industry-leading security
                                            protocols and data encryption to safeguard your information and transactions.
                                        </>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="m-auto absolute hidden lg:block lg:top-[21rem] 2xl:left-[7.5%] xl:left-[6%] lg:left-[3%]">
                            <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] font-semibold">
                                Mission
                            </Heading>
                            <Text
                                size="7xl"
                                as="p"
                                className="!text-black-900_02 !font-medium lg:text-[15px] text-[13px]"
                            >
                                <>
                                    Our mission at TedFinance is to democratize global finance. <br className="hidden lg:block" />
                                    We believe everyone deserves access to borderless financial tools <br className="hidden lg:block" />
                                    that simplify money management. We strive to:
                                </>

                            </Text>

                            <ul className="list-disc w-[50%] pl-[2rem]">
                                <li><span className="text-black-900_02 font-semibold text-[15px]">Eliminate remittance barriers: </span>
                                    <span className="text-black-900_02 text-[15px]">
                                        <>
                                            Sending and receiving money internationally should be effortless and affordable. TedFinance
                                            removes the complexities and high fees often associated with traditional money transfers.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Empower financial inclusion: </span>
                                    <span className="text-black-900_0 text-[15px]">
                                        <>
                                            We are committed to financial accessibility for all. Our app caters to individuals and businesses,
                                            regardless of location or financial background.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Foster financial security: </span>
                                    <span className="text-black-900_0 text-[15px]">
                                        <>
                                            TedFinance prioritizes the safety and security of your funds. We
                                            implement robust security measures to ensure your transactions are protected.
                                        </>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="m-auto absolute hidden lg:block 2xl:top-[41rem] xl:top-[43rem] lg:top-[45rem] 2xl:left-[7.5%] xl:left-[6%] lg:left-[3%]">
                            <Heading size="md" as="h1" className="mt-4 text-[20px] lg:text-[30px] font-semibold">
                                Vision
                            </Heading>
                            <Text
                                size="7xl"
                                as="p"
                                className="!text-black-900_02 !font-medium lg:text-[15px] text-[13px] mb-[0.5rem]"
                            >
                                <>
                                    We envision a world where geographical borders no longer restrict your financial potential TedFinance aspires to be <br className="hidden xl:block" />
                                    the leading global finance app, offering an unparalleled user experience and fostering financial freedom for <br className="hidden xl:block" />everyone.
                                </>

                            </Text>
                            <span className="text-black-900_02 font-semibold text-[15px]">
                                Key Features
                            </span>

                            <ul className="list-disc lg:w-[90%] 2xl:w-[50%] pl-[2rem] mt-[0.5rem]">
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">International Money Transfers: </span>
                                    <span className="text-black-900_02 text-[15px]">
                                        <>
                                            Send and receive money seamlessly from any country, with competitive exchange rates and low fees.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Multicurrency Virtual Bank Account: </span>
                                    <span className="text-black-900_02 text-[15px]">
                                        <>
                                            Get Virtual Accounts in USD, EUR, GBP, & NGN to receive payments from anyone, anywhere. A Virtual Account works just like a regular bank account.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">US Dollar Virtual Card: </span>
                                    <span className="text-black-900_0 text-[15px]">
                                        <>
                                            Enjoy the convenience and security of a virtual card for online transactions
                                            anywhere in the world. Make purchases and pay bills in USD without currency exchange hassles.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Currency Exchange: </span>
                                    <span className="text-black-900_02 text-[15px]">
                                        <>
                                            we believe the world shouldn't have financial borders. That's why we offer seamless currency exchange solutions, empowering you to Explore the globe without currency woes. Convert your money to local currencies for free, ensuring smooth and enjoyable travel experiences.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Investment: </span>
                                    <span className="text-black-900_02 text-[15px]">
                                        <>
                                            Unleash your inner investor and empower your financial future with Investment, our user-friendly platform allows you to seamlessly buy and sell a diverse range of US stocks, all from the comfort of your own device.
                                            Whether you're a seasoned trader seeking advanced tools or a curious beginner looking to dip your toes into the market,
                                            Investment provides a secure and intuitive experience to navigate the exciting world of US equities.
                                            <br /><br />
                                        </>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-black-900_02 font-semibold text-[15px]">Secure Platform: </span>
                                    <span className="text-black-900_0 text-[15px]">
                                        <>
                                            TedFinance prioritizes your financial security. We use industry-leading security
                                            protocols and data encryption to safeguard your information and transactions.
                                        </>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block absolute 2xl:right-[22%] xl:right-[8%] lg:right-[3%] m-auto">
                            <Button
                                size="5xl"
                                rightIcon={
                                    <Img src="images/img_heroiconssolid_arrowuptray.svg" alt="heroicons-solid/arrow-up-tray" />
                                }
                                className="gap-[1rem] flex flex-row font-poppins font-semibold lg:min-w-[240px] xl:min-w-[240px] 2xl:min-w-[280px] rounded-[15px]"
                            >
                                Get Started Now
                            </Button>
                        </div>
                    </div>

                    <div className="lg:flex-row flex-col justify-start w-full mt-[26px] lg:mt-[47rem] xl:mt-[37rem] 2xl:mt-[33rem] gap-5 md:px-5 sm:gap-5  animate-horizontal hidden lg:block">
                        <div className="flex items-center gap-5 animate-horizontal">
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

                        </div>
                    </div>
                    <div className="lg:flex-row flex-col justify-start w-full mt-[26px] lg:mt-[47rem] xl:mt-[37rem] 2xl:mt-[33rem] gap-5 md:px-5 sm:gap-5  animate-horizontal lg:hidden block">
                        <div class="flex items-center gap-5 animate-horizontal">
                            <Img
                                src="images/img_3d_rendering_ba.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_60x66.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_60x67.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_1.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_2.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_3.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_4.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_5.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_6.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_7.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_8.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_9.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_10.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_11.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_12.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_13.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_14.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_15.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_16.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_17.png"
                                alt="3drenderingba"
                                className="w-[14%] h-auto  object-cover rounded-[5px]"
                            />
                            <Img
                                src="images/img_3d_rendering_ba_60x26.png"
                                alt="3drenderingba"
                                className="w-[12%] h-auto  object-cover rounded-[5px]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:mt-[2rem] mt-12">
                        <div>
                            <div
                                ref={mushRef}
                                className="mx-auto lg:mt-[0.6rem] xl:mt-[0.7rem] lg:mx-0  rounded-[20px] lg:bg-cover bg-cover bg-no-repeat lg:mb-0 mb-6 md:w-[710px] w-[360px] 2xl:h-[520px] xl:h-[425px] lg:h-[350px] h-[300px] lg:w-[450px] xl:w-[550px] 2xl:w-[690px]"
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                    <Text size="12xl" as="p" className="!text-[#FFFFFF] mt-[2rem] w-[90%] lg:w-[90%] text-[20px] lg:text-[25px]  font-medium text-align-center text-left">
                                        Fraud Detection & Prevention
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[90%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            Our systems employ fraud detection algorithms to identify and prevent suspicious activity.
                                        </>
                                    </Text>
                                    <div className="2xl:mt-[19rem] xl:mt-[12rem] lg:mt-[7rem] md:mt-16 mt-[4rem]">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div
                                ref={blackRef}
                                className="bg-no-repeat mx-auto lg:mx-0 lg:bg-contain md:bg-cover bg-contain md:w-[710px] w-[360px] h-[300px] 2xl:h-[550px] lg:h-[450px] 2xl:w-[690px]  xl:w-[550px] lg:w-[450px]"
                            >
                                <div className="flex flex-col items-start justify-start w-full gap-[19px] ml-[2rem]">
                                    <Text size="12xl" as="p" className="!text-[#FFFFFF] mt-[2rem] w-[90%] lg:w-[90%] text-[20px] lg:text-[25px]  font-medium text-align-center text-left">
                                        Advanced Encryption
                                    </Text>
                                    <Text size="5xl" as="p" className="!text-[#FFFFFF] w-[80%] md:w-[80%] lg:w-[90%] text-align-center text-[12px] font-normal text-left">
                                        <>
                                            Our Smart payment solutions utilize strong encryption technology to protect your financial information during transactions.
                                        </>
                                    </Text>
                                    <div className="2xl:mt-[18rem] xl:mt-[12rem] lg:mt-[7rem] md:mt-12 mt-[3rem]">
                                        <Button
                                            color="white_A700"
                                            size="4xl"
                                            rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                            className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[100px] lg:min-w-[150px] rounded-[30px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px]"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center lg:w-[96%] w-full">
                        <div className="flex lg:flex-row flex-col justify-center items-start w-full gap-5">
                            <Img
                                src="images/join-ted.svg"
                                alt="imageone_one"
                                className="2xl:w-[50%] w-full 2xl:h-[450px] lg:h-[350px] z-[1] object-cover"
                            />
                            <div className="flex flex-col items-center justify-start 2xl:w-[50%]  w-full mt-[37px] ml-0">
                                <Heading size="4xl" as="h4" className="2xl:text-[50px] xl:text-[42px] lg:text-[30px] text-[25px] font-bold text-center text-align-center">
                                    Join the TedFince Today
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="!text-black-900_02 tracking-[-1.20px] !font-poppins !font-medium text-[18px] text-center text-align-center"
                                >
                                    <span className="text-black-900_02 text-[18px]">
                                        <>
                                            Download the TedFinance app today and experience the future of global finance. Take control
                                            of your money, transact internationally with confidence, and unlock a world of financial
                                            possibilities.
                                            <br /><br className="block lg:hidden" />
                                        </>
                                    </span>
                                    <span className="text-black-900_02 font-semibold  text-[20px] text-center text-align-center">
                                        Together, let&#39;s break down borders and empower your financial journey.
                                    </span>
                                </Text>
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

