"use client";

import { useInView } from "../hooks/useInView";
import { Icon, IconProps } from "./icons";
import clsx from "clsx";

interface Props {
  title: string;
  text: string;
  icon: IconProps;
}

export function ServiceCard({ icon, text, title }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      className={clsx(
        "flex flex-col items-center w-72 gap-2 transition-all duration-1000",
        {
          "translate-y-0": inView && icon === "CompassTool",
          "translate-x-0":
            (inView && icon === "Globe") || icon === "DeviceMobileCamera",
          "opacity-0 translate-y-full": !inView && icon === "CompassTool",
          "opacity-0 -translate-x-full": !inView && icon === "Globe",
          "opacity-0 translate-x-full":
            !inView && icon === "DeviceMobileCamera",
        }
      )}
      ref={ref}
    >
      <Icon icon={icon} />
      <h2 className="text-white text-3xl">{title}</h2>
      <span className="text-gray-300 text-xl text-center">{text}</span>
    </div>
  );
}
