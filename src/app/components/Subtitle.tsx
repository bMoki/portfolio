interface Props {
  text: string;
}
export function Subtitle({ text }: Props) {
  return (
    <h3 className="font-bold text-base text-gray-300 tracking-[.25rem]">
      {text.toUpperCase()}
    </h3>
  );
}
