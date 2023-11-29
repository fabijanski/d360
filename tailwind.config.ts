import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#eb644c",
        secondary: "#263244",
        success: "#4fd9a9",
        "success-light": "#d0f5e8",
        error: "#e35263",
        warning: "#ffb914",
        info: "#4fc4d9",
        "button-primary": "#eb644c",
        "button-pressed": "#263244",
        "button-disabled": "#f9cfc8",
        "button-destructive": "#e35263",
        "text-primary": "#263244",
        "text-secondary": "#737c89",
        "text-tertiary": "#c0c5ce",
        "text-quaternery": "#e6e8eb",
        "text-white": "#fff",
        "text-white-85": "#ffffff85",
        "menu-background": "rgba(30,14,12,.4)",
        "overlay-background": "#f6f7f8",
        "primary-opacity-005": "hsla(9,80%,61%,.05)",
        "bg-investors": "#181f2b",
      },
      screens: {
        xs: "390px",
        sm: "567px",
        md: "744px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
        "3xl": "1920px",
      },
      keyframes: {
        "fade-in-keyframe": {
          "0%": { opacity: "0" },
          "33%": { opacity: "0", transform: "translateY(3.6rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-overlay-keyframe": {
          "0%": {
            overflow: "hidden",
            opacity: "0",
            height: "0",
          },
          "100%": {
            opacity: "1",
            height: "100vh",
          },
        },
        "unblur-keyframe": {
          "0%": {
            filter: "blur(3rem)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        "phone-diagonal-move-keyframe": {
          "0%": {
            transform: "translate(-10%)",
          },
          "100%": {
            transform: "translate(calc(-10% + 3rem),3rem)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in-keyframe 1s",
        "fade-in-overlay-keyframe": "fade-in-overlay-keyframe 1s",
        "unblur-keyframe": "unblur-keyframe 1s",
        "phone-diagonal-move-keyframe":
          "phone-diagonal-move-keyframe 5s linear infinite alternate",
      },
    },
  },
  plugins: [],
}
export default config
