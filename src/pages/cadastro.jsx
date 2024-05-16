import "./style.css";

import * as I from "iconoir-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//images
import Button from "../components/button/button";
import LogoSenai from "../assets/logo.svg";
import decoLeft from "../assets/deco-left.svg";
import Swal from "sweetalert2";

export default function Cadastro() {
  const nav = useNavigate();

  const handleAction = () => {
    Swal.fire({
      title: "Cadastro realizado com sucesso!",
      text: `Redirecionando para a página inicial.
    Obrigado por utilizar o sistema!`,
      icon: "success",
      confirmButtonColor: '#e10613',
      
    });
    setTimeout(() => {
      nav("/");
    }, 4000);
  };

  return (
    <body>
      <header style={{ justifyContent: "end" }}>
        <div className="logo-container">
          <div className="logo-text cadastro-text">
            <h1>Feira de Profissões</h1>
            <h2>Desenvolvimento Web</h2>
          </div>
          <div className="logo-line"></div>
          <img src={LogoSenai} alt="" className="logo" />
        </div>
        <img src={decoLeft} alt="decoration" className="decoration deco-left" />
      </header>
      <main>
        <div className="title">
          <I.NavArrowLeft
            style={{ fontSize: "2em", cursor: "pointer" }}
            onClick={() => {
              nav("/");
            }}
          />
          <h1>
            Demonstração de Funionalidade
            <div className="main-line"></div>
          </h1>
        </div>
        <section className="table-container">
          <div className="top-container">
            <h2>Cadastro de Perfil</h2>
          </div>
          <div className="form" onSubmit={() => {}}>
            <div className="form-subcontainer">
              <div className="input-container">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="input-container">
                <label htmlFor="birth_date">Data de Nascimento</label>
                <input type="date" name="birth_date" id="birth_date" />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="input-container">
              <label htmlFor="professional_goal">Profissão dos Sonhos</label>
              <input
                type="text"
                name="professional_goal"
                id="professional_goal"
                placeholder="Digite sua profissão dos sonhos"
              />
            </div>
            <div className="input-container">
              <label htmlFor="neighborhood">Seu Bairro</label>
              <input
                type="text"
                name="neighborghood"
                id="neighborhood"
                placeholder="Digite o bairro em que mora"
              />
            </div>
            <Button
              label="Cadastrar"
              Click={() => {
                handleAction();
              }}
            />
          </div>
        </section>
      </main>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </body>
  );
}
