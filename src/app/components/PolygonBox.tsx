import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  border?: "red" | "silver" | "purple";
  size: "lg" | "md" | "sm" | "xs";
  hover?: boolean;
  shadow?: boolean;
  children: ReactNode;
}

export function PolygonBox({
  border,
  size,
  hover = false,
  shadow = false,
  children,
}: Props) {
  return (
    <div className={shadow ? "shadowCustom" : ""}>
      <div
        className={clsx("polygon bg-white flex justify-center items-center", {
          "bg-transparent": border === undefined,
          "bg-gradient-to-br from-red to-yellow": border === "red",
          "bg-gradient-to-br from-white to-gray-300": border === "silver",
          "bg-gradient-to-br from-purple to-pink ": border === "purple",
          "w-[38px] h-[38px]": size === "xs",
          "w-[90px] h-[90px]": size === "sm",
          "w-[114px] h-[114px]": size === "md",
          "w-[362px] h-[362px]": size === "lg",
          "hover:cursor-pointer": hover,
        })}
      >
        <div
          className={clsx("polygon bg-black flex justify-center ", {
            "w-[36px] h-[36px]": size === "xs",
            "w-[88px] h-[88px]": size === "sm",
            "w-[112px] h-[112px]": size === "md",
            "w-[360px] h-[360px]": size === "lg",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
