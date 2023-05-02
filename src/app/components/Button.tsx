import { DownloadSimple } from "@phosphor-icons/react";

interface Props {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <button className="w-40 h-12 relative rounded-lg bg-gray-800 text-gray-100 flex justify-center items-center font-medium text-xl border border-gray-100 gap-3 hover:bg-white hover:text-black">
      <DownloadSimple size={24} />
      {title}
    </button>
  );
}
