import Link from "next/link";

interface Props {
  title: string;
  link: string;
}

export function MenuItem({ title, link }: Props) {
  return (
    <Link
      href={link}
      className="text-transparent text-base sm:text-xl md:text-2xl text-white hover:bg-gradient-to-r from-purple to-pink bg-clip-text hover:text-transparent transition-all "
    >
      {title.toUpperCase()}
    </Link>
  );
}