import { lilyScriptOne } from "../utils/fonts";

interface Props {
  rotate?: boolean;
}

export function Comma({ rotate = false }: Props) {
  return (
    <h1
      className={`${
        lilyScriptOne.className
      } text-6xl md:text-8xl bg-gradient-to-r from-red to-yellow bg-clip-text text-transparent ${
        rotate && "rotate-180"
      }`}
    >
      "
    </h1>
  );
}
