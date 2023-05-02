"use client";
import { techs } from "../utils/techs";
import { PolygonBox } from "./PolygonBox";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Props {
  border: "purple" | "red" | "silver";
  size: "xs" | "sm" | "md";
  techList: Array<string>;
}

export function TechList({ techList, border, size }: Props) {
  return (
    <>
      {techs.map((tech) => {
        if (techList.find((techUsed) => tech.alias === techUsed))
          return (
            <Tooltip.Provider delayDuration={400}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <PolygonBox size={size} border={border}>
                    <img
                      src={tech.imgUrl}
                      alt={tech.name}
                      className="w-3/5 mix-blend-luminosity"
                    />
                  </PolygonBox>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="max-w-md flex justify-center items-center rounded-lg p-8 text-xl text-gray-100 shadow-4xl bg-gray-900 text-center"
                    sideOffset={50}
                  ></Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          );
      })}
    </>
  );
}
