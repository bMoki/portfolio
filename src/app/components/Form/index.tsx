"use client";
import { useState } from "react";
import { GlowingButton } from "../GlowingButton";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { sendEmail } from "@/app/lib/nodemailer";
import { ToastContainer, toast } from "react-toastify";

export function Form() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function clear() {
    setEmail("");
    setMessage("");
    setName("");
    setSubject("");
  }

  const isFormInvalid = !name || !subject || !email || !message;

  async function handleSubmit() {
    const res = sendEmail({ name, subject, email, message });

    toast.promise(
      res,
      {
        pending: "Enviando email",
        success: {
          render() {
            clear();
            return "❤️ Obrigado pelo contato!";
          },
          icon: false,
        },
        error: "Ocorreu um erro! 🤯",
      },
      {
        theme: "dark",
        hideProgressBar: true,
        position: "bottom-right",
        autoClose: 3000,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
      }
    );
  }

  return (
    <form className="w-full flex flex-col pt-0 md:pt-32 pb-28 gap-4 lg:pr-40">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Input
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Assunto"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full">
        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex justify-end pt-11 pb-4 w-full">
        <GlowingButton
          text="Enviar"
          onClick={handleSubmit}
          disabled={isFormInvalid}
        />
      </div>
      <ToastContainer />
    </form>
  );
}
