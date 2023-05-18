"use client";
import clsx from "clsx";
import { techs } from "../utils/techs";
import { PolygonBox } from "./PolygonBox";
import * as Tooltip from "@radix-ui/react-tooltip";

interface Props {
  border: "purple" | "red" | "silver";
  size: "xs" | "sm" | "md";
  techList: Array<string>;
}

export function TechGrid({ techList, border, size }: Props) {
  let col = 0;
  return (
    <div
      className={`grid grid-cols-12 md:grid-cols-16 px-2${
        size === "xs" ? "gap-1" : "gap-1 sm:gap-2 md:gap-3 lg:gap-4"
      }`}
    >
      {techs.map((tech) => {
        if (techList.find((techUsed) => tech.alias === techUsed)) {
          col++;
          return (
            <Tooltip.Provider delayDuration={400} key={tech.alias}>
              <Tooltip.Root>
                <Tooltip.Trigger
                  className={clsx("col-span-2", {
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
                    className="max-w-md flex justify-center items-center rounded-lg p-8 text-xl text-gray-100 shadow-4xl bg-gray-900 text-center z-20"
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

  // return (
  //   <div className={`flex ${size === "xs" ? "gap-1" : "gap-4"} justify-center`}>
  //     {techs.map((tech) => {
  //       if (techList.find((techUsed) => tech.alias === techUsed))
  //         return (
  //           <Tooltip.Provider delayDuration={400} key={tech.alias}>
  //             <Tooltip.Root>
  //               <Tooltip.Trigger>
  //                 <PolygonBox size={size} border={border}>
  //                   <img
  //                     src={tech.imgUrl}
  //                     alt={tech.name}
  //                     className="w-3/4 md:w-3/5 mix-blend-luminosity"
  //                   />
  //                 </PolygonBox>
  //               </Tooltip.Trigger>
  //               <Tooltip.Portal>
  //                 <Tooltip.Content
  //                   className="max-w-md flex justify-center items-center rounded-lg p-8 text-xl text-gray-100 shadow-4xl bg-gray-900 text-center z-20"
  //                   sideOffset={-20}
  //                 >
  //                   {tech.name}
  //                   <Tooltip.Arrow className="fill-gray-900" />
  //                 </Tooltip.Content>
  //               </Tooltip.Portal>
  //             </Tooltip.Root>
  //           </Tooltip.Provider>
  //         );
  //     })}
  //   </div>
  // );
}
