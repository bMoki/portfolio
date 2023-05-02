"use client";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { SealQuestion } from "@phosphor-icons/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { gray } from "tailwindcss/colors";

type Props = {
  name: string;
  imgUrl: string;
  description: string;
};

export function MainStack({ description, imgUrl, name }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (flipped !== showBack) {
        setShowBack((state) => !state);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [flipped]);

  return (
    <Tilt scale={1.2} transitionSpeed={1000} flipHorizontally={flipped}>
      <div
        className="transition-all duration-300 shadow-base"
        onClick={() => setFlipped((state) => !state)}
      >
        <div className="polygon bg-white flex justify-center items-center bg-gradient-to-br from-red to-yellow xl:w-[114px] xl:h-[114px] lg:w-[114px] lg:h-[114px] md:w-[96px] md:h-[96px] w-[76px] h-[76px] hover:cursor-pointer">
          {showBack ? (
            <div className="back polygon bg-black flex justify-center xl:w-[112px] xl:h-[112px] lg:w-[112px] lg:h-[112px] md:w-[94px] md:h-[94px] w-[74px] h-[74px]">
              <div className="flex justify-center items-center p-4 text-center flex-col gap-2">
                <span className="text-sm font-semibold text-gray-200">
                  {name}
                </span>
                <Tooltip.Provider delayDuration={400}>
                  <Tooltip.Root>
                    <Tooltip.Trigger>
                      <SealQuestion
                        size={20}
                        weight="fill"
                        className="text-gray-200 hover:text-white"
                      />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="max-w-md flex justify-center items-center rounded-lg p-8 text-xl text-gray-100 shadow-4xl bg-gray-900 text-center"
                        sideOffset={50}
                      >
                        {description}
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>
          ) : (
            <div className="polygon bg-black flex justify-center xl:w-[112px] xl:h-[112px] lg:w-[112px] lg:h-[112px] md:w-[94px] md:h-[94px] w-[74px] h-[74px]">
              <img src={imgUrl} alt="" className="w-3/4 md:w-4/5" />
            </div>
          )}
        </div>
      </div>
    </Tilt>
  );
}
