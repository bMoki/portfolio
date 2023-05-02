import "./globals.css";
import { Barlow, Lily_Script_One } from "next/font/google";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const lilyScriptOne = Lily_Script_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lilyScriptOne",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} font-sans bg-gray-800 ${lilyScriptOne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
