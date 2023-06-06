"use client";
import { useInView } from "@/app/hooks/useInView";
import { GlowingButton } from "../GlowingButton";
import { Profile } from "../Profile";
import clsx from "clsx";

export function Hero() {
  const { ref, inView } = useInView();
  return (
    <section
      id="hero"
      className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:gap-40"
      ref={ref}
    >
      <Profile />
      <div className="flex flex-col justify-center gap-2 md:gap-8">
        <div
          className={clsx(
            "flex flex-col justify-center  transition-all duration-1000",
            {
              "translate-x-full opacity-0": !inView,
              "translate-x-0": inView,
            }
          )}
        >
          <h3 className="text-white text-3xl md:text-6xl w-full">Olá</h3>
          <h3 className="text-white text-3xl md:text-5xl">sou Breno Sonda.</h3>
        </div>
        <div
          className={clsx(
            "flex gap-3 items-center delay-200 transition-all duration-1000",
            {
              "translate-x-full opacity-0": !inView,
              "translate-x-0": inView,
            }
          )}
        >
          <h3 className="bg-gradient-to-r from-blue to-green text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent">
            Desenvolvedor
          </h3>
          <h3 className="bg-gradient-to-r from-purple to-pink text-2xl sm:text-3xl md:text-4xl font-semibold bg-clip-text text-transparent">
            Full Stack
          </h3>
        </div>
        <div
          className={clsx(
            "flex gap-12 mt-5 transition-all duration-1000 delay-[400ms]",
            {
              "translate-x-full opacity-0": !inView,
              "translate-x-0": inView,
            }
          )}
        >
          <a href="#contato">
            <GlowingButton text="Contato" />
          </a>
        </div>
      </div>
    </section>
  );
}
