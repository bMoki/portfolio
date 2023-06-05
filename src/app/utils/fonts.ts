import { Barlow, Lily_Script_One } from "next/font/google";

export const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const lilyScriptOne = Lily_Script_One({
  weight: ["400"],
  subsets: ["latin"],
});
