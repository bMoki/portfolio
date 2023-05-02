import clsx from "clsx";

interface Props {
  color?: "red" | "purple";
  text: string;
  active?: boolean;
}

export function GlowingButton({ color, text, active = true }: Props) {
  return (
    <div
      className={`group relative w-full md:w-40 h-12 ${
        !active && "opacity-60"
      }`}
    >
      <div
        className={`absolute -inset-1 rounded-lg opacity-60 blur-xl transition duration-500 ${
          active && "animate-pulse bg-gradient-to-r from-purple to-pink"
        } group-hover:opacity-100`}
      ></div>
      <button
        className={clsx(
          " w-full md:w-40 h-12 p-[1px] relative rounded-lg  bg-opacity-5 bg-gradient-to-r text-gray-100 flex justify-center items-center font-medium text-xl",
          {
            " from-gray-300 to-gray-100": !active,
            " from-purple to-pink": active,
          }
        )}
      >
        <div className="w-full h-full rounded-lg bg-gray-800 flex justify-center items-center">
          {text}
        </div>
      </button>
    </div>
    // <div className="group relative w-40 h-12">
    //   <div className="animate-pulse absolute -inset-1 rounded-lg bg-gradient-to-r from-purple to-pink opacity-60 blur-xl transition duration-500 group-hover:opacity-100"></div>
    //   <button className="w-40 h-12 p-[1px] relative rounded-lg bg-gradient-to-r from-purple to-pink text-gray-100 flex justify-center items-center font-medium text-xl">
    //     <div className="w-full h-full rounded-lg bg-gray-800 flex justify-center items-center">
    //       {text}
    //     </div>
    //   </button>
    // </div>
  );
}
