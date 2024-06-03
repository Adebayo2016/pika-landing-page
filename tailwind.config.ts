import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // nextui components
    "./node_modules/@nextui-org/theme/dist/components/modal.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-text": "linear-gradient(135.64deg, #FFC42D 8.19%, #99351B 90.1%)"
      },
      boxShadow: {
        nav: " 0px 4px 4px 0px #00000026",
        "card-btn": "0px 3px 6px 0px #0000001A",
        card: "0px 5px 11px 0px #0000001A"
      },
      colors: {
        pika: {
          primary: "#FF592D",
          navlink: "#E96A48",
          header: "#FFFAFA",
          footer: "#E96A4826",
          black: "#180a0a"
        }
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FF592D"
            }
          }
        }
      }
    })
  ]
};
export default config;
