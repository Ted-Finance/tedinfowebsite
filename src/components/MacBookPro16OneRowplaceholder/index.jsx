import React from "react";
import { Button, Text } from "./..";

export default function MacBookPro16OneRowplaceholder({ placeholder = "Email", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-center w-full p-[3px] border-gray-300 border border-solid bg-white-A700 rounded-lg">
        <Text size="md" as="p" className="ml-[9px] !text-gray-600 tracking-[0.10px] !font-poppins">
          {placeholder}
        </Text>
        <Button size="xs" className="rounded-tr-lg rounded-br-lg tracking-[0.12px] font-poppins font-bold min-w-[86px]">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
