import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[27px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    purple_A100_03: "bg-purple-A100_03",
    purple_A100_06: "bg-purple-A100_06",
    purple_A100_04: "bg-purple-A100_04",
    light_blue_300: "bg-light_blue-300 text-gray-900_05",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    green_500: "bg-green-500 shadow-lg",
    white_A700: "bg-white-A700 text-purple-400",
    lime_500: "bg-lime-500",
    purple_400: "bg-purple-400 text-white-A700",
  },
  outline: {
    purple_400_light_blue_300: "border border-solid purple_400_light_blue_300_border text-white-A700",
  },
};
const sizes = {
  "6xl": "h-[78px] pl-[18px] pr-[35px] text-xl",
  "7xl": "h-[78px] pl-[18px] pr-[35px] text-xs",
  xs: "h-[31px] px-[11px] text-xs",
  xl: "h-[55px] px-6 text-lg",
  sm: "h-[33px] px-px",
  "3xl": "h-[62px] px-3.5",
  "2xl": "h-[58px] px-3.5",
  "5xl": "h-[67px] px-[35px] text-base",
  md: "h-[51px] px-6 text-lg",
  "4xl": "h-[63px] px-4 text-xl",
  lg: "h-[52px] px-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "lg",
  color = "purple_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["6xl", "7xl", "xs", "xl", "sm", "3xl", "2xl", "5xl", "md", "4xl", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "purple_A100_03",
    "purple_A100_06",
    "purple_A100_04",
    "light_blue_300",
    "gray_900_02",
    "green_500",
    "white_A700",
    "lime_500",
    "purple_400",
    "purple_400_light_blue_300",
  ]),
};

export { Button };
