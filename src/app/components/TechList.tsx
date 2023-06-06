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

export function TechList({ techList, border, size }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      className={`flex ${size === "xs" ? "gap-1" : "gap-2 md:gap-3 lg:gap-4"}`}
      ref={ref}
    >
      {techs.map((tech, index) => {
        if (techList.find((techUsed) => tech.alias === techUsed)) {
          return (
            <Tooltip.Provider delayDuration={400} key={tech.alias}>
              <Tooltip.Root>
                <Tooltip.Trigger
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                  className={clsx("transition-all duration-1000", {
                    "translate-x-0": inView,
                    "translate-x-[600%] opacity-0": !inView,
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
