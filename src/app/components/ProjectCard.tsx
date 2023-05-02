"use client";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { TechList } from "./TechList";

interface Props {
  reverse?: boolean;
  title: string;
  description: string;
  site?: string;
  repository: string;
  imgUrl: string;
  techUsed: Array<string>;
}

export function ProjectCard({
  reverse = false,
  title,
  description,
  repository,
  site,
  imgUrl,
  techUsed,
}: Props) {
  return (
    <div className={`flex items-center ${reverse && "flex-row-reverse"}`}>
      <div className="max-w-xl group">
        <img
          src={imgUrl}
          alt=""
          className="rounded-md opacity-70 group-hover:opacity-90"
        />
      </div>
      <div
        className={`flex flex-col gap-5  justify-center  ${
          reverse
            ? "xl:-mr-12 lg:-mr-24 md:-mr-40 items-start"
            : "xl:-ml-12 lg:-ml-24 md:-ml-40 items-end"
        }`}
      >
        <span className="font-semibold text-gray-200 text-3xl">{title}</span>
        <div
          className={`flex justify-center items-center bg-gray-900 w-[508px] h-[152px] rounded-md p-5  z-10 ${
            reverse ? "shadow-3xlR" : "shadow-3xlL"
          }`}
        >
          <span className="text-gray-300 text-base text-center">
            {description}
          </span>
        </div>

        <div className="flex gap-3">
          <TechList border="purple" size="xs" techList={techUsed} />
        </div>
        <div className="flex gap-3 items-center">
          <a
            target="_blank"
            href={repository}
            className="w-7 opacity-50 hover:opacity-100 hover:cursor-pointer"
          >
            <img
              className="aspect-square"
              src="images/icons/GithubCleanLogo.svg"
              alt="Icone do Github"
            />
          </a>
          {site && (
            <a
              href={site}
              target="_blank"
              className="text-gray-300 hover:text-white hover:cursor-pointer "
            >
              <ArrowSquareOut size={32} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
