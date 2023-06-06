"use client";
import clsx from "clsx";
import { useInView } from "../hooks/useInView";

interface Props {
  title: string;
  color?: "red" | "blue" | "purple";
  animation?: boolean;
}
export function Title({ title, color, animation = true }: Props) {
  const { ref, inView } = useInView();
  return (
    <h1
      ref={ref}
      className={clsx(
        "font-semibold text-4xl md:text-5xl bg-clip-text text-transparent transition-all duration-1000 truncate",
        {
          "bg-gradient-to-r from-blue to-green": color === "blue",
          "bg-gradient-to-r from-red to-yellow": color === "red",
          "bg-gradient-to-r from-purple to-pink": color === "purple",
          "bg-gray-200": color === undefined,
          "translate-y-0": inView,
          "opacity-0 translate-y-full": !inView && animation,
        }
      )}
    >
      {title.toUpperCase()}
    </h1>
  );
}
