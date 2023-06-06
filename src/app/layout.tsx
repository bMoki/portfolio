import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { barlow } from "./utils/fonts";

export const metadata = {
  title: "Breno Sonda - Desenvolvedor",
  description:
    "Portfolio de Breno Sonda, desenvolvido por ele utilizando NextJS e Tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} bg-gray-800 scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
