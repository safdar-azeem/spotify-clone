/** @type {import('tailwindcss').Config} */

function em(px) {
  return `${px / 16.4}em`;
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#0a0a0a",
          100: "#121212",
          150: "#181818",
          200: "#1e1e1e",
          250: "#232323",
          350: "#292929",
          300: "#2f2f2f",
          400: "#353535",
          450: "#3b3b3b",
          500: "#424242",
          550: "#484848",
          600: "#5d5d5d",
          650: "#646464",
          700: "#6c6c6c",
          750: "#737373",
          800: "#7b7b7b",
          850: "#d0d0d0",
          900: "#efefef",
          950: "#ffffff",
        },
      },
      fontSize: {
        "-fs-8": em(10),
        "-fs-7": em(10.5),
        "-fs-6": em(11),
        "-fs-5": em(11.5),
        "-fs-4": em(12.2),
        "-fs-3": em(13.8),
        "-fs-2": em(14.8),
        "-fs-1": em(15.6),
        DEFAULT: em(16),
        "fs-0.5": em(16.5),
        "fs-1": em(17),
        "fs-1.5": em(17.5),
        "fs-2": em(18.2),
        "fs-2.5": em(18.7),
        "fs-3": em(19.2),
        "fs-3.5": em(19.7),
        "fs-4": em(20.2),
        "fs-4.5": em(21.7),
        "fs-5": em(23.3),
        "fs-5.5": em(24.5),
        "fs-6": em(26),
        "fs-6.5": em(27),
        "fs-7": em(28),
        "fs-7.5": em(29),
        "fs-8": em(30),
        "fs-8.5": em(31),
        "fs-9": em(32),
        "fs-9.5": em(33),
        "fs-10": em(34),
        "fs-11": em(36),
        "fs-12": em(38),
        "fs-13": em(40),
        "fs-14": em(42),
        "fs-15": em(44),
        "fs-16": em(46),
        "fs-17": em(48),
        "fs-18": em(50),
        "fs-19": em(52),
        "fs-20": em(54),
        "fs-24": em(58),
        "fs-28": em(62),
        "fs-30": em(66),
      },
    },
  },
  plugins: [],
};
