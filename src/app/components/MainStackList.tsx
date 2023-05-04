import { techs } from "../utils/techs";
import { MainStack } from "./MainStack";

interface Props {
  techList: Array<string>;
}

export function MainStackList({ techList }: Props) {
  let col = 0;
  return (
    <div className="grid grid-cols-6 gap-3">
      {techs.map((tech) => {
        if (techList.find((techUsed) => tech.alias === techUsed)) {
          col++;
          return (
            <MainStack
              key={tech.alias}
              description={tech.description}
              imgUrl={tech.imgUrl}
              name={tech.name}
              className={
                col === 1
                  ? "col-start-3 col-span-2 md:col-start-auto md:col-span-1"
                  : col === 2
                  ? "col-start-2 col-span-2 md:col-start-auto md:col-span-1"
                  : "col-span-2 md:col-span-1"
              }
            />
          );
        }
      })}
    </div>
  );
}
