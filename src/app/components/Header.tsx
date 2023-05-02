import { MenuItem } from "./MenuItem";

export function Header() {
  return (
    <header className="max-w-screen-lg ml-auto mr-auto">
      <ul className="flex justify-between">
        <li className="list-none w-32">
          <MenuItem title="o que faço" link="" />
        </li>
        <li className="list-none w-32">
          <MenuItem title="sobre mim" link="" />
        </li>
        <li className="list-none w-32">
          <MenuItem title="projetos" link="" />
        </li>
        <li className="list-none w-32">
          <MenuItem title="contato" link="" />
        </li>
      </ul>
    </header>
  );
}
