import { Comma } from "./components/Comma";
import { Footer } from "./components/Footer";
import { GlowingButton } from "./components/GlowingButton";
import { Header } from "./components/Header";
import { Line } from "./components/Line";
import { LineDash } from "./components/LineDash";
import { MainStackList } from "./components/MainStackList";
import { PolygonBox } from "./components/PolygonBox";
import { Profile } from "./components/Profile";
import { ProjectCard } from "./components/ProjectCard";
import { ServiceCard } from "./components/ServiceCard";
import { Subtitle } from "./components/Subtitle";
import { TechList } from "./components/TechList";
import { Title } from "./components/Title";

export default function Home() {
  return (
    <div className="bg-gray-800 ml-auto mr-auto pt-8">
      <Header />
      <main className="flex flex-col mt-52 mb-24 gap-48 max-w-screen-xl  ml-auto mr-auto">
        <div className="flex gap-40 justify-center">
          <Profile />
          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-white text-6xl w-full">Olá</h3>
              <h3 className="text-white text-5xl">sou Breno Sonda.</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h3 className="bg-gradient-to-r from-blue to-green text-4xl font-semibold bg-clip-text text-transparent">
                Desenvolvedor
              </h3>
              <h3 className="bg-gradient-to-r from-purple to-pink text-4xl font-semibold bg-clip-text text-transparent">
                Full Stack
              </h3>
            </div>
            <div className="flex gap-12 mt-5">
              <GlowingButton text="Contato" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-14">
          <Line color="blue" />
          <Title color="blue" title="O que faço" />
          <div
            style={{ backgroundImage: "url(images/Group_1.svg)" }}
            className="bg-no-repeat bg-center w-full h-[513px] mt-16 items-center pt-14 px-14 mb-48"
          >
            <div className="flex justify-around px-20">
              <ServiceCard
                title="WEB"
                text="Desenvolvimento de sites programados em Next, React e Typescript"
                icon="Globe"
              />
              <ServiceCard
                title="APP"
                text="Desenvolvimento de aplicativos IOS e Android utilizando React Native"
                icon="DeviceMobileCamera"
              />
            </div>
            <div className="flex justify-center items-center h-full mt-10">
              <ServiceCard
                title="UX"
                text="Desenvolvimento de protótipos de alta fidelidade utilizando Figma"
                icon="CompassTool"
              />
            </div>
          </div>
          <Line color="red" />
          <Title color="red" title="Sobre mim" />
          <div className="flex items-center w-full h-[512px] mt-12 justify-center">
            <div className="h-full flex items-start m-4">
              <Comma rotate />
            </div>

            <span className="text-gray-300 text-xl h-72 w-[532px]">
              Eu sou Breno Sonda, um desenvolvedor <b>Full-Stack</b> envolvido
              na area de programação desde o ensino médio. <br />
              <br /> Sou
              <b>proeficiente</b> em desenvolvimento web, mobile e backend,
              tendo experiência em várias tecnologias, incluindo React, Node e
              React Native com Typescript.
              <br />
              <br />
              Sou <b>apaixonado</b> por novos desafios e estou sempre atualizado
              com as últimas tendências e padrões de desenvolvimento.
            </span>

            <LineDash />
            <span className="text-gray-300 text-xl h-72 w-[532px]">
              Além de ser um desenvolvedor Full-Stack experiente, sou também um
              grande fã de literatura, adoro ler livros e assistir filmes.{" "}
              <br />
              <br />
              Passar tempo com minha família também é uma das minhas atividades
              favoritas, pois valorizo a importância de <b>equilibrar</b> minha
              vida pessoal e profissional.
              <br />
              <br /> Sempre busco novas maneiras de <b>crescer</b> pessoalmente
              e profissionalmente.
            </span>
            <div className="h-full flex items-end m-4">
              <Comma />
            </div>
          </div>
          <div className="flex flex-col gap-16 items-center">
            <Subtitle text="minha stack" />
            <div className="flex gap-6 justify-center">
              <MainStackList
                techList={[
                  "react",
                  "next",
                  "tailwind",
                  "expo",
                  "fastify",
                  "prisma",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col gap-16 items-center mt-3 mb-40">
            <Subtitle text="Outras" />
            <div className="flex flex-col mt-1">
              <div className="flex gap-4 justify-center">
                <TechList
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
                  ]}
                />
              </div>
              <div className="flex gap-4 justify-center">
                <PolygonBox size="sm" border="silver">
                  <img src="images/techs/Github.svg" alt="" className="w-4/5" />
                </PolygonBox>
                <PolygonBox size="sm" border="silver">
                  <img src="images/techs/Figma.svg" alt="" className="w-4/5" />
                </PolygonBox>
                <PolygonBox size="sm" border="silver">
                  <img src="images/techs/Stripe.svg" alt="" className="w-4/5" />
                </PolygonBox>
                <PolygonBox size="sm" border="silver">
                  <img
                    src="images/techs/Prismic.svg"
                    alt=""
                    className="w-3/5 mix-blend-luminosity"
                  />
                </PolygonBox>
                <PolygonBox size="sm" border="silver">
                  <img
                    src="images/techs/NextAuth.svg"
                    alt=""
                    className="w-4/5 mix-blend-luminosity"
                  />
                </PolygonBox>

                <PolygonBox size="sm" border="silver">
                  <img
                    src="images/techs/Postgresql.svg"
                    alt=""
                    className="w-4/5 mix-blend-luminosity"
                  />
                </PolygonBox>
                <PolygonBox size="sm" border="silver">
                  <img src="images/techs/Mysql.svg" alt="" className="w-4/5" />
                </PolygonBox>
              </div>
            </div>
          </div>
          <Line color="purple" />
          <Title color="purple" title="projetos" />
          <div className="flex flex-col items-center gap-44 mt-14">
            <ProjectCard
              title="Coffe Delivery"
              description="E-commerce for a coffee shop with clean and expandable styling system. The project showcases important concepts in ReactJS, such as state management, ContextAPI, and componentization."
              repository="https://github.com/bMoki/Coffee-Delivery"
              site="https://coffee-delivery-ochre.vercel.app/"
              imgUrl="images/projetosCapa/CoffeeDelivery.png"
            >
              <TechList
                border="purple"
                size="xs"
                techList={["React", "NextJS"]}
              />
            </ProjectCard>

            <ProjectCard
              title="Ignews"
              description="Ignews is a blog application that provides news and articles about the React world. Users can subscribe to a monthly plan and get access to exclusive content. The project is built using modern frameworks and integrates with various services."
              repository="https://github.com/bMoki/Ignews"
              site="https://ignews-eight-lyart.vercel.app/"
              imgUrl="images/projetosCapa/Ignews.png"
              reverse
            >
              <PolygonBox size="xs" border="purple">
                <img src="images/techs/Next.svg" alt="" className="w-4/5" />
              </PolygonBox>
              <PolygonBox size="xs" border="purple">
                <img
                  src="images/techs/Typescript.svg"
                  alt=""
                  className="w-4/5"
                />
              </PolygonBox>
              <PolygonBox size="xs" border="purple">
                <img src="images/techs/Stripe.svg" alt="" className="w-4/5" />
              </PolygonBox>
              <PolygonBox size="xs" border="purple">
                <img src="images/techs/Prismic.svg" alt="" className="w-3/5" />
              </PolygonBox>
              <PolygonBox size="xs" border="purple">
                <img
                  src="images/techs/NextAuth.svg"
                  alt=""
                  className="w-4/5 mix-blend-luminosity"
                />
              </PolygonBox>
              <PolygonBox size="xs" border="purple">
                <img src="images/techs/Fauna.svg" alt="" className="w-4/5" />
              </PolygonBox>
            </ProjectCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
