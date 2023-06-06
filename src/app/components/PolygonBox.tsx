"use client";
import clsx from "clsx";
import { ForwardedRef, ReactNode } from "react";

interface Props {
  border?: "red" | "silver" | "purple";
  size: "lg" | "md" | "sm" | "xs";
  hover?: boolean;
  shadow?: boolean;
  children: ReactNode;
  ForwardRef?: ForwardedRef<HTMLDivElement>;
  className?: string;
}

export function PolygonBox({
  border,
  size,
  hover = false,
  shadow = false,
  children,
  ForwardRef,
  className,
}: Props) {
  return (
    <div
      className={`${shadow && "shadowCustom"} ${className}`}
      ref={ForwardRef}
    >
      <div
        className={clsx("polygon bg-white flex justify-center items-center", {
          "bg-transparent": border === undefined,
          "bg-gradient-to-br from-red to-yellow": border === "red",
          "bg-gradient-to-br from-white to-gray-300": border === "silver",
          "bg-gradient-to-br from-purple to-pink ": border === "purple",
          "w-[38px] h-[38px]": size === "xs",
          "xl:w-[90px] xl:h-[90px] lg:w-[90px] lg:h-[90px] md:w-[64px] md:h-[64px] w-[52px] h-[52px]":
            size === "sm",
          "xl:w-[114px] xl:h-[114px] lg:w-[114px] lg:h-[114px] md:w-[96px] md:h-[96px]":
            size === "md",
          "w-[200px] h-[200px] md:w-[362px] md:h-[362px]": size === "lg",
          "hover:cursor-pointer": hover,
        })}
      >
        <div
          className={clsx("polygon bg-black flex justify-center ", {
            "w-[36px] h-[36px]": size === "xs",
            "xl:w-[88px] xl:h-[88px] lg:w-[88px] lg:h-[88px] md:w-[62px] md:h-[62px] w-[50px] h-[50px]":
              size === "sm",
            "xl:w-[112px] xl:h-[112px] lg:w-[112px] lg:h-[112px] md:w-[94px] md:h-[94px]":
              size === "md",
            "w-[198px] h-[198px] md:w-[360px] md:h-[360px]": size === "lg",
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
