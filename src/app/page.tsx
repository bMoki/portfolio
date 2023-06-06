import { Footer } from "./components/Sections/Footer";
import { Header } from "./components/Sections/Header";
import { Line } from "./components/Line";
import { AboutMe } from "./components/Sections/AboutMe";
import { Hero } from "./components/Sections/Hero";
import { MyServices } from "./components/Sections/MyServices";
import { Projects } from "./components/Sections/Projects";

export default function Home() {
  return (
    <div className="bg-gray-800 ml-auto mr-auto pt-8 overflow-hidden">
      <Header />
      <main className="flex flex-col mt-40 sm:mt-52 mb-24 gap-32 md:gap-48 max-w-screen-xl ml-auto mr-auto">
        <Hero />
        <div className="flex flex-col justify-center items-center gap-14">
          <Line color="blue" />
          <MyServices />
          <Line color="red" />
          <AboutMe />
          <Line color="purple" />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
