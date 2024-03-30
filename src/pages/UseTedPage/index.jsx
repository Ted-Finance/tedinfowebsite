/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import TopFooter from "../../components/TopFooter";
import Footer from "../../components/Footer"


export default function UseTedPage() {

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
                                    How to use Your<br className="hidden lg:block" />
                                    Ted Finance  App Wallet
                                </Heading>
                                <Text
                                    size="7xl"
                                    as="p"
                                    className="lg:mt-[10px] mt-0 !text-[#000000] !font-normal text-[13px] text-center text-align-center lg:text-left"
                                >
                                    <>
                                        Few procedure on how to use our App
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

                                <Img src="images/use-img1.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <Img src="images/use-ted-img2.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <Img src="images/use-ted-img3.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />
                                <Img src="images/use-ted-img4.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />

                                <Img src="images/use-ted-img5.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />
                                <Img src="images/use-ted-img6.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[45%] xl:w-[50%] lg:w-[43%] w-[100%] mt-[2rem] mx-auto lg:ml-[8rem] xl:ml-[5rem] 2xl:ml-[8rem] lg:hidden block"
                                />
                                

                                <div className="mt-[2rem] text-center lg:text-left hidden lg:block">
                                    <Button
                                        color="white_A700"
                                        size="4xl"
                                        rightIcon={<Img src="images/arrow-right.svg" alt="arrow-right" />}
                                        className="flex flex-row gap-2.5 mt-0 font-normal font-poppins h-[40px] lg:h-[50px] lg:font-bold min-w-[300px] lg:min-w-[300px] rounded-[10px] cursor-pointer bg-purple-400 !text-white-A700 text-white text-[10px] lg:text-[14px] mx-auto lg:ml-0"
                                    >
                                        Get Started Now
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

                                <Img src="images/use-ted-img2.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[60%] xl:w-[60%] lg:w-[63%] mt-[2rem] hidden lg:block"
                                />

                                <Img src="images/use-ted-img4.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[60%] xl:w-[60%] lg:w-[63%] mt-[2rem] hidden lg:block"
                                />

                                <Img src="images/use-ted-img6.svg" alt="send money"
                                className="object-cover z-[1] 2xl:w-[60%] xl:w-[60%] lg:w-[63%] mt-[2rem] hidden lg:block"
                            />

                            </div>

                            <div className="lg:w-[50%] w-full z-[1]">

                                <Img src="images/use-img1.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[60%] xl:w-[60%] lg:w-[63%] 2xl:ml-[0rem] lg:ml-[2rem] hidden lg:block"
                                />

                                <Img src="images/use-ted-img3.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[60%] mt-[2rem] xl:w-[60%] lg:w-[63%] 2xl:ml-[0rem] lg:ml-[2rem] hidden lg:block"
                                />
                                <Img src="images/use-ted-img5.svg" alt="send money"
                                    className="object-cover z-[1] 2xl:w-[66%] mt-[2rem] xl:w-[66%] lg:w-[70%] 2xl:ml-[0rem] lg:ml-[2rem] hidden lg:block"
                                />
                                <Img
                                    src="images/img_abstract_design.svg"
                                    alt="abstractdesign"
                                    className="z-[-1] 2xl:h-[382px] xl:h-[282px] lg:h-[182px] lg:right-[7%] 2xl:right-[9%] xl:right-[7%] lg:top-[10%] xl:top-[18%] 2xl:top-[10rem] m-auto absolute hidden lg:block"
                                />

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


