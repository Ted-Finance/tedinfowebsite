import React from "react";

const sizes = {
  "5xl": "text-xl font-medium leading-[150%]",
  "6xl": "text-[22px] font-normal leading-[150%]",
  "7xl": "text-2xl font-normal leading-[150%]",
  "8xl": "text-[25px] font-normal leading-[150%]",
  "2xl": "text-[13px] font-medium leading-5",
  "3xl": "text-sm font-light leading-[150%]",
  "4xl": "text-lg font-normal leading-[150%]",
  xs: "text-[7px] font-normal leading-[11px]",
  lg: "text-[11px] font-medium leading-[17px]",
  s: "text-[8px] font-normal",
  xl: "text-xs font-normal",
  "9xl": "text-3xl font-medium leading-[150%]",
  "10xl": "text-[32px] font-normal leading-[150%]",
  md: "text-[10px] font-normal",
  "11xl": "text-[40px] font-normal",
  "12xl": "text-5xl font-medium leading-[150%]",
  "13xl": "text-[58px] font-medium leading-[150%]",
};

const Text = ({ children, className = "", as, size = "4xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-300_02 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
