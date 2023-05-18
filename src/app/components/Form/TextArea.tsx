import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({ placeholder, ...rest }: Props) {
  return (
    <textarea
      placeholder={placeholder}
      className="resize-none w-full h-40 px-3 py-1 bg-gray-800 text-base text-gray-200 rounded placeholder:text-gray-300"
      {...rest}
    />
  );
}
