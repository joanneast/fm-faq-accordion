import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custLightPink: "#f9f0ff",
        custGrayishPurple: "#8c6991",
        custBrightPurple: "#ad28eb",
        custDarkPurple: "#2f1533",
      },
      fontFamily: {
        custom: ["workSans"],
      }
    },
  },
  plugins: [],
} satisfies Config;
