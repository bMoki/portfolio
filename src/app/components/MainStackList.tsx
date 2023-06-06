"use client";
import clsx from "clsx";
import { techs } from "../utils/techs";
import { MainStack } from "./MainStack";
import { useInView } from "../hooks/useInView";

interface Props {
  techList: Array<string>;
}

export function MainStackList({ techList }: Props) {
  let col = 0;
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <div className={clsx("grid grid-cols-6 gap-3")} ref={ref}>
      {techs.map((tech, i) => {
        if (techList.find((techUsed) => tech.alias === techUsed)) {
          col++;
          return (
            <MainStack
              inView={inView}
              key={tech.alias}
              description={tech.description}
              imgUrl={tech.imgUrl}
              name={tech.name}
              index={i}
              className={clsx(`col-span-2 md:col-span-1 `, {
                "col-start-3 col-span-2 md:col-start-auto md:col-span-1 ":
                  col === 1,
                "col-start-2 col-span-2 md:col-start-auto md:col-span-1":
                  col === 2,
              })}
            />
          );
        }
      })}
    </div>
  );
}
