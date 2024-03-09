import React from "react";
import { Heading, Img } from "./..";

export default function HomePageDesktopRowOne({ price = "Naira Account (NGN)", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-full gap-[15px] p-1 bg-white-A700 shadow-xs rounded-[45px]">
        <div className="flex flex-row justify-start items-center h-[81px] w-[82px] ml-[7px] shadow-sm rounded-[50%]">
          <Img
            src="images/img_ellipse_5.png"
            alt="circleimage"
            className="h-[81px] w-[82px] md:h-auto sm:w-full rounded-[50%]"
          />
        </div>
        <Heading size="lg" as="h1" className="text-center !font-extrabold">
          {price}
        </Heading>
      </div>
    </div>
  );
}
