import "./style.css";

import * as I from "iconoir-react";
import Button from "../components/button/button";

//images
import LogoSenai from "../assets/logo.svg";
import decoLeft from "../assets/deco-left.svg";

export default function Cadastro() {
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
        <I.NavArrowLeft />
        <h1>Demonstração de Funionalidade</h1>
        <div className="main-line"></div>
        <section className="table-container">
          <div className="top-container">
            <h2>Cadastro de Perfil</h2>
          </div>
          <form action="POST">
            <div className="form-subcontainer">
              <div className="input-container">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="birth_date">Data de Nascimento</label>
                <input type="date" name="birth_date" id="birth_date" required />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
                required
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
              <input type="text" name="neighborghood" id="neighborhood" placeholder="Digite o bairro em que mora"/>
            </div>
            <Button label="Cadastrar" />
          </form>
        </section>
      </main>
    </body>
  );
}
