import clsx from "clsx";

interface Props {
  color: "red" | "blue" | "purple";
}

export function Line({ color }: Props) {
  return (
    <div className="w-2 ml-auto mr-auto flex flex-col items-center justify-center">
      <span
        className={clsx("w-[1px] h-64 ", {
          "bg-gradient-to-t from-green via-blue via-30%": color === "blue",
          "bg-gradient-to-t from-yellow via-red via-30%": color === "red",
          "bg-gradient-to-t from-pink via-purple via-30%": color === "purple",
        })}
      ></span>
      <div
        className={clsx("w-[6px] h-[6px] rounded-full", {
          "bg-green": color === "blue",
          "bg-yellow": color === "red",
          "bg-pink": color === "purple",
        })}
      ></div>
    </div>
  );
}
