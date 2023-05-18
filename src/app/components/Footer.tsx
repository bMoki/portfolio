import "react-toastify/dist/ReactToastify.css";
import { Title } from "./Title";
import { Form } from "./Form";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800/50 from-20% via-gray-200/50  to-gray-800/50 to-70%  pt-[1px]">
      <div className="flex flex-col md:gap-40 bg-gray-900 w-full px-12 md:max-xl:gap-24 md:max-xl:px-16 md:flex-row">
        <div className="w-full flex flex-col py-32 gap-12">
          <div className="flex flex-col sm:flex-row">
            <Title title={"Entre em\xa0"} />
            <Title title="Contato" color="purple" />
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
              href=""
              className="w-9 md:w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/Linkedin.svg" alt="" />
            </a>
            <a
              href=""
              className="w-9 md:w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/GithubCleanLogo.svg" alt="" />
            </a>
            <a
              href=""
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
