import { CompassTool } from "./icons/CompassTool";
import { DeviceMobileCamera } from "./icons/DeviceMobileCamera";
import { Globe } from "./icons/Globe";
import { Icon, IconProps } from "./icons";

interface Props {
  title: string;
  text: string;
  icon: IconProps;
}

export function ServiceCard({ icon, text, title }: Props) {
  return (
    <div className="flex flex-col items-center w-72 gap-2">
      <Icon icon={icon} />
      <h2 className="text-white text-3xl">{title}</h2>
      <span className="text-gray-300 text-xl text-center">{text}</span>
    </div>
  );
}
