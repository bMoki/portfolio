import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ placeholder, ...rest }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-11 px-3 py-1 bg-gray-800 text-base text-gray-200 rounded placeholder:text-gray-300"
      {...rest}
    />
  );
}
