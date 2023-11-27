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
    },
  },
  plugins: [],
}
export default config

// --max-width: 1100px;
// --color-primary: #eb644c;
// --color-primary-rgb: 235,100,76;
// --color-secondary: #263244;
// --color-success: #4fd9a9;
// --color-success-light: #d0f5e8;
// --color-error: #e35263;
// --color-warning: #ffb914;
// --color-info: #4fc4d9;
// --color-button-primary: #eb644c;
// --color-button-pressed: #263244;
// --color-button-disabled: #f9cfc8;
// --color-button-destructive: #e35263;
// --color-text-primary: #263244;
// --color-text-secondary: #737c89;
// --color-text-tertiary: #c0c5ce;
// --color-text-quaternery: #e6e8eb;
// --color-text-white: #fff;
// --color-text-white-85: #ffffff85;
// --color-menu-background: rgba(30,14,12,.4);
// --color-overlay-background: #f6f7f8;
// --color-primary-opacity-005: hsla(9,80%,61%,.05);
// --color-bg-investors: #181f2b;
// --z-0: 0;
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
