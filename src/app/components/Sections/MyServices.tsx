import { ServiceCard } from "../ServiceCard";
import { Title } from "../Title";

export function MyServices() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      id="oquefaço"
    >
      <Title color="blue" title="O que faço" />
      <div
        className="flex flex-col bg-none md:bg-services bg-no-repeat bg-center  w-full h:full md:h-[513px] mt-16 items-center md:pt-14 md:px-14 mb-32 md:mb-48 gap-16"
        id="oquefaço"
      >
        <div className="items-center flex-col justify-center flex md:flex-row md:justify-around md:px-20 gap-16">
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
        <div className="justify-center flex md:justify-center md:items-center h-full mt-0 md:mt-10">
          <ServiceCard
            title="UX"
            text="Desenvolvimento de protótipos de alta fidelidade utilizando Figma"
            icon="CompassTool"
          />
        </div>
      </div>
    </section>
  );
}
