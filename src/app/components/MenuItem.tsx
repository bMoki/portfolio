interface Props {
  title: string;
  link: string;
}

export function MenuItem({ title, link }: Props) {
  return (
    <a
      href={link}
      className="text-transparent text-2xl text-white hover:bg-gradient-to-r from-purple to-pink bg-clip-text hover:text-transparent transition-all "
    >
      {title.toUpperCase()}
    </a>
  );
}
