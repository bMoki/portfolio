import { techs } from "../utils/techs";
import { MainStack } from "./MainStack";

interface Props {
  techList: Array<string>;
}

export function MainStackList({ techList }: Props) {
  return (
    <>
      {techs.map((tech) => {
        if (techList.find((techUsed) => tech.alias === techUsed))
          return (
            <MainStack
              description={tech.description}
              imgUrl={tech.imgUrl}
              name={tech.name}
            />
          );
      })}
    </>
  );
}
