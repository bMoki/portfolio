import { CompassTool } from "./CompassTool";
import { DeviceMobileCamera } from "./DeviceMobileCamera";
import { Globe } from "./Globe";

export type IconProps = "CompassTool" | "DeviceMobileCamera" | "Globe";

interface Props {
  icon: IconProps;
}

export function Icon({ icon }: Props) {
  if (icon === "CompassTool") return <CompassTool />;
  if (icon === "DeviceMobileCamera") return <DeviceMobileCamera />;
  if (icon === "Globe") return <Globe />;
  return <></>;
}
