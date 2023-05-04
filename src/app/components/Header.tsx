"use client";
import * as Popover from "@radix-ui/react-popover";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MenuItem } from "./MenuItem";
import clsx from "clsx";
import { Hamburger, List } from "@phosphor-icons/react";

export function Header() {
  const isBreakpoint = useMediaQuery(639);

  if (isBreakpoint) {
    return (
      <header className="px-8 max-w-screen-lg ml-auto mr-auto">
        <div className="relative inline-block text-left">
          <Popover.Root modal>
            <Popover.Trigger asChild>
              <button type="button">
                <List size={32} className="text-gray-100 hover:opacity-70" />
              </button>
            </Popover.Trigger>
            <Popover.Content
              sideOffset={10}
              side="bottom"
              align="center"
              className={clsx(
                "z-50 w-48 rounded-lg p-4 shadow-md md:w-56 ml-8",
                "bg-gray-900"
              )}
            >
              <ul className="flex flex-col sm:flex-row sm:justify-around lg:justify-between p-4 gap-2">
                <li className="list-none w-auto lg:w-32">
                  <MenuItem title="o que faço" link="" />
                </li>
                <li className="list-none lg:w-32">
                  <MenuItem title="sobre mim" link="" />
                </li>
                <li className="list-none lg:w-32">
                  <MenuItem title="projetos" link="" />
                </li>
                <li className="list-none lg:w-32">
                  <MenuItem title="contato" link="" />
                </li>
              </ul>
            </Popover.Content>
          </Popover.Root>
        </div>
      </header>
    );
  }

  return (
    <header className="max-w-screen-lg ml-auto mr-auto">
      <ul className="flex justify-around lg:justify-between">
        <li className="list-none lg:w-32">
          <MenuItem title="o que faço" link="" />
        </li>
        <li className="list-none lg:w-32">
          <MenuItem title="sobre mim" link="" />
        </li>
        <li className="list-none lg:w-32">
          <MenuItem title="projetos" link="" />
        </li>
        <li className="list-none lg:w-32">
          <MenuItem title="contato" link="" />
        </li>
      </ul>
    </header>
  );
}
