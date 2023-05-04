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
      fontFamily: {
        sans: ["var(--font-barlow)"],
        display: ["var(--font-lilyScriptOne)"],
      },
      boxShadow: {
        "3xlR": "5px 5px 6px 1px rgba(0, 0, 0, 0.4)",
        "3xlL": "-5px 5px 6px 1px rgba(0, 0, 0, 0.4)",
        "4xl": "10px 10px 4px 2px rgba(0, 0, 0, 0.6)",
      },
      // keyframes: {
      // 	animated_gradient_title_1: {
      // 		'0%, 16.667%, 100%': {
      // 			opacity: 1
      // 		},

      // 		'33.333%, 83.333%': {
      // 			opacity: 0
      // 		},
      // 	},
      // 	animated_gradient_title_2: {
      // 		'0%, 16.667%, 66.667%, 100%': {
      // 			opacity: 0
      // 		},

      // 		'33.333%, 50%': {
      // 			opacity: 1
      // 		}
      // 	}
      // }
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
