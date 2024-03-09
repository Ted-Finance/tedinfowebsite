import React from "react";

const sizes = {
  "3xl": "text-5xl font-extrabold leading-[150%]",
  "2xl": "text-[38px] font-bold leading-[150%]",
  xl: "text-3xl font-bold leading-[150%]",
  "5xl": "text-[64px] font-bold leading-[150%]",
  "4xl": "text-[50px] font-bold leading-[150%]",
  s: "text-[15px] font-bold leading-[150%]",
  md: "text-lg font-extrabold leading-[150%]",
  "6xl": "text-[70px] font-bold leading-[150%]",
  xs: "text-xs font-bold leading-[150%]",
  lg: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
