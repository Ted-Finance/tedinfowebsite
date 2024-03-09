module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#dfdfdf",
          400: "#b3b3b3",
          600: "#828282",
          900: "#191919",
          "900_05": "#1c1c1c",
          "900_04": "#262626",
          "300_02": "#e3e3e7",
          "900_01": "#420341",
          "900_02": "#1c1b1e",
          "900_03": "#111018",
          "300_01": "#d9dbe8",
        },
        white: { A700: "#ffffff" },
        purple: {
          400: "#ce2acd",
          500: "#a824a7",
          A100_05: "#e38ef3",
          A100_07: "#e976df",
          A100_03: "#f282e8",
          A100_06: "#f485ea",
          A100_04: "#f385e9",
        },
        lime: { 500: "#caff33" },
        light_blue: { 300: "#5aebff" },
        black: { "900_02": "#000000" },
        green: { 500: "#3ac838" },
        deep_purple: { A100: "#c09cfb" },
      },
      boxShadow: {
        xs: "0px -1px  10px 0px #00000033",
        sm: "0px 1px  4px 0px #0000003f",
        md: "0px 4px  24px -1px #0000003f",
        lg: "0px 4px  4px 0px #0000003f",
        xl: "0px 4px  10px 0px #00000066",
      },
      fontFamily: { poppins: "Poppins", lexend: "Lexend", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #010101,#b754b6,#000000)",
        gradient1: "linear-gradient(180deg, #030203,#b754b6,#000000)",
        gradient2: "linear-gradient(180deg, #f282f1,#5aebff)",
        gradient3: "linear-gradient(180deg, #caff330c,#caff330c)",
        gradient4: "linear-gradient(180deg, #ce2acd,#5aebff)",
        gradient5: "linear-gradient(180deg, #caff3319,#caff3319)",
        gradient6: "linear-gradient(227deg, #1c1c1c,#1c1c1c00)",
      },
      opacity: { 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
