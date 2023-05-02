import type { HTMLProps } from "react";

interface Props extends HTMLProps<typeof HTMLTextAreaElement> {}

export function TextArea({ placeholder }: Props) {
  return (
    <textarea
      placeholder={placeholder}
      className="resize-none w-full h-40 px-3 py-1 bg-gray-800 text-base text-gray-200 rounded placeholder:text-gray-300"
    ></textarea>
  );
}
