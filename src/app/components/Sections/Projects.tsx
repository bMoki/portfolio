import { ProjectCard } from "../ProjectCard";
import { Title } from "../Title";

export function Projects() {
  return (
    <section
      id="projetos"
      className="flex flex-col items-center md:gap-44 mt-14"
    >
      <Title color="purple" title="projetos" />
      <div className="flex flex-col md:gap-44">
        <ProjectCard
          title="Coffe Delivery"
          description="E-commerce for a coffee shop with clean and expandable styling system. The project showcases important concepts in ReactJS, such as state management, ContextAPI, and componentization."
          repository="https://github.com/bMoki/Coffee-Delivery"
          site="https://coffee-delivery-ochre.vercel.app/"
          imgUrl="images/projetosCapa/CoffeeDelivery.png"
          techUsed={["react", "next"]}
        />

        <ProjectCard
          title="Ignews"
          description="Ignews is a blog application that provides news and articles about the React world. Users can subscribe to a monthly plan and get access to exclusive content. The project is built using modern frameworks and integrates with various services."
          repository="https://github.com/bMoki/Ignews"
          site="https://ignews-bmoki.vercel.app/"
          imgUrl="images/projetosCapa/Ignews.png"
          reverse
          techUsed={["react"]}
        />
      </div>
    </section>
  );
}
