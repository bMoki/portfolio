import { Title } from "../Title";
import { Form } from "../Form";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="contato"
      className="bg-gradient-to-r from-gray-800/50 from-20% via-gray-200/50  to-gray-800/50 to-70%  pt-[1px]"
    >
      <div className="flex flex-col xl:gap-56 bg-gray-900 w-full md:px-20 lg:gap-24  px-16 lg:flex-row pb-28">
        <div className="w-full flex flex-col pt-32 pb-12 gap-12">
          <div className="flex flex-wrap">
            <Title title={"Entre em\xa0"} animation={false} />
            <Title title="Contato" color="purple" animation={false} />
          </div>
          <div className="flex flex-col gap-4 text-gray-300 text-xl">
            <span>
              Se você está interessado em conhecer mais sobre o meu trabalho ou
              entrar em contato comigo, fique à vontade para acessar minhas
              redes sociais.
            </span>
            <span>
              Se preferir, você também pode me enviar e-mail preenchendo o
              formulário.
            </span>
            <span>
              Será um prazer trocar experiências e informações com você.
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <a
              about="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/breno-sonda/"
              className="w-9 md:w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/Linkedin.svg" alt="" />
            </a>
            <a
              about="GitHub"
              target="_blank"
              href="https://github.com/bMoki"
              className="w-9 md:w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/GithubCleanLogo.svg" alt="" />
            </a>
            <a
              about="WhatsApp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5554997072601"
              className="w-9 md:w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/Whatsapp.svg" alt="" />
            </a>
          </div>
        </div>
        <Form />
      </div>
    </footer>
  );
}
