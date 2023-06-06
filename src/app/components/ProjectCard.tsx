"use client";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useState } from "react";
import { TechList } from "./TechList";
import { useMediaQuery } from "../hooks/useMediaQuery";
import clsx from "clsx";
import { useInView } from "../hooks/useInView";
import Image from "next/image";

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
  const isBreakpoint = useMediaQuery(1024);
  const [showDescription, setShowDescription] = useState(false);

  function handleShowDescription() {
    setShowDescription((state) => !state);
  }

  const { ref, inView } = useInView();

  if (isBreakpoint) {
    return (
      <div className="flex flex-col gap-6 p-12 md:p-0" ref={ref}>
        <div
          className="max-w-xl group text-gray-100 text-base text-center relative"
          onClick={handleShowDescription}
        >
          {showDescription && (
            <div className=" z-20 absolute inset-0 flex justify-center items-center  hover:cursor-pointer p-5">
              {description}
            </div>
          )}
          <img
            src={imgUrl}
            alt=""
            className={clsx("rounded-md cursor-pointer", {
              "group-hover:opacity-100 opacity-80 ": !showDescription,
              "opacity-10": showDescription,
            })}
          />
        </div>
        <div className="flex flex-col gap-5  justify-center ">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-200 text-3xl">
              {title}
            </span>
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
          <div className="flex gap-3 w-fit">
            <TechList border="purple" size="xs" techList={techUsed} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx("flex items-center transition-all duration-1000", {
        "flex-row-reverse": reverse,
      })}
      ref={ref}
    >
      <div className="max-w-xl group">
        <img
          src={imgUrl}
          alt=""
          className="rounded-md opacity-70 group-hover:opacity-90"
        />
      </div>
      <div
        className={clsx(
          "flex flex-col gap-5  justify-center transition-all duration-1000",
          {
            "xl:-mr-12 lg:-mr-24 md:-mr-40 items-start": reverse && inView,
            "xl:-ml-12 lg:-ml-24 md:-ml-40 items-end": !reverse && inView,
            "-ml-96 items-end opacity-0": !reverse && !inView,
            "-mr-96 items-end opacity-0": reverse && !inView,
          }
        )}
      >
        <span className="font-semibold text-gray-200 text-3xl">{title}</span>
        <div
          className={`flex justify-center items-center bg-gray-900 w-[508px] h-[152px] rounded-md p-5  z-10 ${
            reverse ? "shadow-3xlR" : "shadow-3xlL"
          }`}
        >
          <span className="text-gray-200 text-base text-center">
            {description}
          </span>
        </div>

        <div className="flex gap-3 w-fit">
          <TechList border="purple" size="xs" techList={techUsed} />
        </div>
        <div className="flex gap-3 items-center">
          <a
            about="Go to repository"
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
              about="Go to site"
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
