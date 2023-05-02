interface Props {
  color?: "red" | "purple";
  text: string;
}

export function GlowingButton({ color, text }: Props) {
  return (
    <div className="group relative w-40 h-12">
      <div className="animate-pulse absolute -inset-1 rounded-lg bg-gradient-to-r from-purple to-pink opacity-60 blur-xl transition duration-500 group-hover:opacity-100"></div>
      <button className="w-40 h-12 p-[1px] relative rounded-lg bg-gradient-to-r from-purple to-pink text-gray-100 flex justify-center items-center font-medium text-xl">
        <div className="w-full h-full rounded-lg bg-gray-800 flex justify-center items-center">
          {text}
        </div>
      </button>
    </div>
  );
}
