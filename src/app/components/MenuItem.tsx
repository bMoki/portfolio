interface Props {
  title: string;
  href: string;
}

export function MenuItem({ title, href }: Props) {
  return (
    <a
      href={href}
      className="text-base sm:text-xl md:text-2xl text-white hover:bg-gradient-to-r from-purple to-pink bg-clip-text hover:text-transparent hover:font-medium transition-colors"
    >
      {title.toUpperCase()}
    </a>
  );
}
