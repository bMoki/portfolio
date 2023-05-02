import clsx from "clsx";

interface Props {
  title: string;
  color?: "red" | "blue" | "purple";
}
export function Title({ title, color }: Props) {
  return (
    <h1
      className={clsx(
        "font-semibold text-4xl md:text-5xl bg-clip-text text-transparent",
        {
          "bg-gradient-to-r from-blue to-green": color === "blue",
          "bg-gradient-to-r from-red to-yellow": color === "red",
          "bg-gradient-to-r from-purple to-pink": color === "purple",
          "bg-gray-200": color === undefined,
        }
      )}
    >
      {title.toUpperCase()}
    </h1>
  );
}
