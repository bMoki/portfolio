import { GlowingButton } from "./GlowingButton";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { Title } from "./Title";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800/50 from-20% via-gray-200/50  to-gray-800/50 to-70%  pt-[1px]">
      <div className="flex gap-40 bg-gray-900 w-full px-48 md:max-xl:gap-24 md:max-xl:px-16 ">
        <div className="w-full flex flex-col py-32 gap-12">
          <div className="flex">
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
              className="w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/Linkedin.svg" alt="" />
            </a>
            <a
              href=""
              className="w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/GithubCleanLogo.svg" alt="" />
            </a>
            <a
              href=""
              className="w-12 opacity-50 hover:opacity-100 hover:cursor-pointer"
            >
              <img src="images/icons/Whatsapp.svg" alt="" />
            </a>
          </div>
        </div>
        <form className="w-full flex flex-col pt-32 pb-28 gap-4 ">
          <div className="flex gap-4 w-4/5 md:max-xl:w-full">
            <Input placeholder="Nome Completo" />
            <Input placeholder="Assunto" />
          </div>
          <div className="w-4/5 md:max-xl:w-full">
            <Input placeholder="Email" />
          </div>
          <div className="w-4/5 md:max-xl:w-full">
            <TextArea placeholder="Mensagem" />
          </div>
          <div className="flex justify-end w-4/5 pt-11 pb-4 md:max-xl:w-full">
            <GlowingButton text="Enviar" active={true} />
          </div>
        </form>
      </div>
    </footer>
  );
}
