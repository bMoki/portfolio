"use client";
import clsx from "clsx";
import { techs } from "../utils/techs";
import { PolygonBox } from "./PolygonBox";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useInView } from "../hooks/useInView";
import Image from "next/image";

interface Props {
  border: "purple" | "red" | "silver";
  size: "xs" | "sm" | "md";
  techList: Array<string>;
}

export function TechGrid({ techList, border, size }: Props) {
  let col = 0;
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-12 md:grid-cols-16 px-2 ${
        size === "xs" ? "gap-1" : "gap-1 sm:gap-2 md:gap-3 lg:gap-4"
      }`}
    >
      {techs.map((tech, index) => {
        if (techList.find((techUsed) => tech.alias === techUsed)) {
          col++;
          return (
            <Tooltip.Provider delayDuration={400} key={tech.alias}>
              <Tooltip.Root>
                <Tooltip.Trigger
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className={clsx("col-span-2 transition-all duration-1000", {
                    "translate-x-[500%] opacity-0": !inView,
                    "translate-x-0": inView,
                    "col-start-2 md:col-start-auto": col === 7,
                    "col-start-3 md:col-start-auto": col === 12,
                    "md:col-start-2": col === 9,
                  })}
                >
                  <PolygonBox size={size} border={border}>
                    <img
                      src={tech.imgUrl}
                      alt={tech.name}
                      className="w-3/4 md:w-3/5 mix-blend-luminosity"
                    />
                  </PolygonBox>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="max-w-md flex justify-center items-center rounded-lg p-3 text-base text-gray-100 shadow-4xl bg-gray-900 text-center z-20"
                    sideOffset={-20}
                  >
                    {tech.name}
                    <Tooltip.Arrow className="fill-gray-900" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          );
        }
      })}
    </div>
  );
}
