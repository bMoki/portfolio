import clsx from "clsx";

interface Props {
  color?: "red" | "purple";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function GlowingButton({ text, disabled = false, onClick }: Props) {
  return (
    <div
      className={`group relative w-full md:w-40 h-12 transition-all duration-1000 ${
        disabled && "opacity-60"
      }`}
    >
      <div
        className={`absolute -inset-1 rounded-lg opacity-60 blur-xl transition-all duration-1000 ${
          !disabled && "animate-pulse bg-gradient-to-r from-purple to-pink"
        } group-hover:opacity-100`}
      ></div>
      <button
        type="button"
        className={clsx(
          "transition-all duration-1000 w-full md:w-40 h-12 p-[1px] relative rounded-lg  bg-opacity-5 bg-gradient-to-r text-gray-100 flex justify-center items-center font-medium text-xl",
          {
            " from-gray-300 to-gray-100": disabled,
            " from-purple to-pink": !disabled,
          }
        )}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="transition-all duration-1000 w-full h-full rounded-lg bg-gray-800 flex justify-center items-center">
          {text}
        </div>
      </button>
    </div>
  );
}
