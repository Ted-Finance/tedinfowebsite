import React from "react";
import { Text } from "./..";

export default function HomePageDesktopRowlearn({ button = "Home", buttonOne = "Products", learn, company, ...props }) {
  return (
    <div {...props}>
      <a
        href="#"
        className="flex justify-center items-center w-[100px] h-[51px] px-6 py-3.5 sm:px-5 bg-purple-400 rounded-[25px]"
      >
        <Text as="p" className="!text-white-A700">
          {button}
        </Text>
      </a>
      <a
        href="#"
        className="flex justify-center items-center w-[126px] h-[51px] px-6 py-3.5 sm:px-5 bg-purple-400 rounded-[25px]"
      >
        <Text as="p" className="!text-white-A700">
          {buttonOne}
        </Text>
      </a>
      <div className="flex flex-row justify-center p-[13px] bg-purple-400 rounded-[25px]">
        {!!learn ? (
          <Text as="p" className="!text-white-A700">
            {learn}
          </Text>
        ) : null}
      </div>
      <div className="flex flex-row justify-center p-[11px] bg-purple-400 rounded-[25px]">
        {!!company ? (
          <Text as="p" className="mt-1 !text-white-A700">
            {company}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
