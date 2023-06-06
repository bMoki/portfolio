/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      backgroundImage: {
        services: "url('../../public/images/ServicesBG.svg')",
        line: "url('../../public/images/LineDashed.svg')",
      },
      boxShadow: {
        "3xlR": "5px 5px 6px 1px rgba(0, 0, 0, 0.4)",
        "3xlL": "-5px 5px 6px 1px rgba(0, 0, 0, 0.4)",
        "4xl": "10px 10px 4px 2px rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        sans: ["var(--font-barlow)"],
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        900: "#090909",
        800: "#0E0E0E",
        300: "#888888",
        200: "#D9D9D9",
        100: "#FCFCFC",
      },
      red: "#FF4D4D",
      yellow: "#F9CB28",
      purple: "#7928CA",
      pink: "#FF0080",
      blue: "#22D3EE",
      green: "#3AD39C",
    },
  },
  plugins: [],
};
