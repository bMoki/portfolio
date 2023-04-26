export type Tech = {
	imgUrl: string;
	name: string;
	description: string;
  alias: string;
};

export const techs: Tech[] = [
	{
    alias: "next",
		imgUrl: "images/techs/Next.svg",
		name: "NextJS",
		description: "Description Next js",
	},
	{
    alias: "react",
		imgUrl: "images/techs/React.svg",
		name: "React & React Native",
		description: "ReactJS é uma biblioteca para construção de interfaces web enquanto React Native é um framework para desenvolvimento de aplicativos móveis nativos, ambos baseados em componentes reutilizáveis e criados pela mesma equipe do Facebook."
	},
	{
    alias: "tailwind",
		imgUrl: "images/techs/Tailwind.svg",
		name: "Tailwind",
		description: "Description Tailwindcss",
	},
  {
    alias: "expo",
		imgUrl: "images/techs/Expo.svg",
		name: "ExpoGo",
		description: "Description Expo",
	},
  {
    alias: "fastify",
		imgUrl: "images/techs/Fastify.png",
		name: "Fastify",
		description: "Description Fastify",
	},
  {
    alias: "prisma",
		imgUrl: "images/techs/Prisma.svg",
		name: "Prisma",
		description: "Description Prisma",
	},
];