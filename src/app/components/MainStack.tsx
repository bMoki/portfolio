"use client";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { SealQuestion } from "./icons/SealQuestion";
import * as Tooltip from "@radix-ui/react-tooltip";

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
        <div className="polygon bg-white flex justify-center items-center bg-gradient-to-br from-red to-yellow w-[114px] h-[114px] hover:cursor-pointer">
          {showBack ? (
            <div className="back polygon bg-black flex justify-center w-[112px] h-[112px]">
              <div className="flex justify-center items-center p-4 text-center flex-col gap-2">
                <span className="text-sm font-semibold text-gray-200">
                  {name}
                </span>
                <Tooltip.Provider delayDuration={400}>
                  <Tooltip.Root>
                    <Tooltip.Trigger>
                      <SealQuestion size={20} />
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
            <div className="polygon bg-black flex justify-center w-[112px] h-[112px]">
              <img src={imgUrl} alt="" className="w-4/5" />
            </div>
          )}
        </div>
      </div>
    </Tilt>
  );
}
