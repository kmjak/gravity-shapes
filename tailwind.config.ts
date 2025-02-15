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
        wall: "#f5f5f5",
        cell: "#3f3f3f",
        border: "border-[1px]",
        gray: "#333333",
        black: "#2b2b2b",
        block1: "#ff0000",
        block2: "#00c3ff",
        block3: "#ffcc00",
        block4: "#008000",
        block5: "#800080",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-wall",
    "bg-cell",
    "bg-block1",
    "bg-block2",
    "bg-block3",
    "bg-block4",
    "bg-block5",
  ],
} satisfies Config;
