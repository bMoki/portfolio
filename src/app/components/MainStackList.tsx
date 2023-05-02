import { techs } from "../utils/techs";
import { MainStack } from "./MainStack";

interface Props {
  techList: Array<string>;
}

export function MainStackList({ techList }: Props) {
  return (
    <div className="flex xl:gap-6 lg:gap-4 md:gap-2 justify-center">
      {techs.map((tech) => {
        if (techList.find((techUsed) => tech.alias === techUsed))
          return (
            <MainStack
              key={tech.alias}
              description={tech.description}
              imgUrl={tech.imgUrl}
              name={tech.name}
            />
          );
      })}
    </div>
  );
}
