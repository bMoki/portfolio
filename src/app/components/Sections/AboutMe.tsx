"use client";

import { useInView } from "@/app/hooks/useInView";
import { Comma } from "../Comma";
import { LineDash } from "../LineDash";
import { MainStackList } from "../MainStackList";
import { Subtitle } from "../Subtitle";
import { TechGrid } from "../TechGrid";
import clsx from "clsx";
import { Title } from "../Title";

export function AboutMe() {
  const [commaRef, commaInView] = useInView();
  const [spanRef, spanInView] = useInView();

  return (
    <section
      className="flex flex-col items-center justify-center gap-14"
      id="sobremim"
    >
      <Title color="red" title="Sobre mim" />
      <div className="overflow-hidden flex flex-col lg:flex-row items-center px-8 w-full h-[1024] lg:h-[512px]  md:mt-0 lg:mt-12 justify-center ">
        <div
          className={clsx(
            "w-full lg:w-fit h-full flex items-start m-4 transition-all duration-1000 delay-700",
            {
              "-translate-x-full opacity-0": !commaInView,
              "translate-x-0": commaInView,
            }
          )}
          ref={commaRef}
        >
          <Comma rotate />
        </div>

        <span
          ref={spanRef}
          className={clsx(
            "text-gray-300 text-xl h-fit w-full px-6 transition-all duration-1000",
            {
              "-translate-x-full opacity-0": !spanInView,
              "translate-x-0 visible": spanInView,
            }
          )}
        >
          Eu sou Breno Sonda, um desenvolvedor <b>Full-Stack</b> envolvido na
          area de programação desde o ensino médio. <br />
          <br /> Sou
          <b> proficiente</b> em desenvolvimento web, mobile e backend, tendo
          experiência em várias tecnologias, incluindo React, Node e React
          Native com Typescript.
          <br />
          <br />
          Sou <b>apaixonado</b> por novos desafios e estou sempre atualizado com
          as últimas tendências e padrões de desenvolvimento.
        </span>

        <LineDash />
        <span
          className={clsx(
            "text-gray-300 text-xl h-fit w-full px-6 transition-all duration-1000",
            {
              "translate-x-full opacity-0": !spanInView,
              "translate-x-0": spanInView,
            }
          )}
        >
          Além de ser um desenvolvedor Full-Stack experiente, sou também um
          grande fã de literatura, adoro ler livros e assistir filmes. <br />
          <br />
          Passar tempo com minha família também é uma das minhas atividades
          favoritas, pois valorizo a importância de <b>equilibrar</b> minha vida
          pessoal e profissional.
          <br />
          <br /> Sempre busco novas maneiras de <b>crescer</b> pessoalmente e
          profissionalmente.
        </span>
        <div
          className={clsx(
            "w-full lg:w-fit h-full flex justify-end items-end m-4 transition-all duration-1000 delay-700",
            {
              "translate-x-full opacity-0": !commaInView,
              "translate-x-0": commaInView,
            }
          )}
        >
          <Comma />
        </div>
      </div>
      <div className="flex flex-col gap-16 items-center mt-12 lg:mt-0">
        <Subtitle text="minha stack" />

        <MainStackList
          techList={["react", "next", "tailwind", "expo", "fastify", "prisma"]}
        />
      </div>
      <div className="flex flex-col gap-16 items-center mt-3 mb-40">
        <Subtitle text="Outras" />
        <TechGrid
          size={"sm"}
          border={"silver"}
          techList={[
            "nest",
            "stitches",
            "typescript",
            "java",
            "springboot",
            "docker",
            "fauna",
            "planetscale",
            "github",
            "figma",
            "stripe",
            "prismic",
            "nextauth",
            "postgresql",
            "mysql",
          ]}
        />
      </div>
    </section>
  );
}
