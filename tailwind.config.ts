/** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";
const daisyui = require("daisyui");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "480px",
        140: "560px",
        160: "640px",
        180: "720px",
        225: "900px",
        270: "1080px",
        300: "1200px",
        350: "1400px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  daisyui: {
    themes: [
      "emerald",
      "dracula",
      {
        mytheme1: {
          primary: "#c1f449",

          secondary: "#efd045",

          accent: "#f9313b",

          neutral: "#402541",

          "base-100": "#2d3043",

          info: "#7e91f1",

          success: "#149489",

          warning: "#d3700d",

          error: "#f2637b",

          // "base-100": "#fff",
        },
        mytheme: {
          primary: "#bf95f9",

          // "secondary": "#bf95f9",
          secondary: "#efd045",

          accent: "#ffb86b",

          neutral: "#414558",

          "base-100": "#272935",

          info: "#8be8fd",

          success: "#52fa7c",

          warning: "#f1fa89",

          error: "#ff5757",
        },
        agoda: {
          primary: "#10B04A",

          secondary: "#488AF7",

          accent: "#FE2938",

          neutral: "#333c4d",

          "base-100": "#ffffff",
          //   "base-200": "#DFCCFB",
          //   "base-200": "#FBF0B2",
          //   "base-200": "#CEDEBD",
          //   "base-200": "#fdb813",
          "base-200": "#FFCD4B",
          //   "base-200": "#B01E8D",
          "base-300": "#D8D9DA",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },

  plugins: [daisyui],
};
