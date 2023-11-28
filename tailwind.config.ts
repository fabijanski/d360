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
      },
      animation: {
        "fade-in": "fade-in-keyframe 1s ease-in-out",
      },
    },
  },
  plugins: [],
}
export default config

// --z-0: 0",
// --z-1: 100;
// --z-2: 200;
// --z-3: 300;
// --z-4: 400;
// --z-5: 500;
// --z-6: 600;
// --z-7: 700;
// --z-8: 800;
// --z-9: 900;
// --z-10: 1000;
// --z-11: 1100;
// --z-12: 1200;
// --z-13: 1300;
// --z-14: 1400;
// --z-15: 1500;
