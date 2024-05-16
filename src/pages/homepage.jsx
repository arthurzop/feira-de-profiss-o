import "./style.css";

import LogoSenai from "../assets/logo.svg";
import decoRight from '../assets/deco-right.svg'

import Button from "../components/button/button";


export default function HomePage() {
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={LogoSenai} alt="" className="logo" />
          <div className="logo-line"></div>
          <div className="logo-text">
            <h1>Feira de Profissões</h1>
            <h2>Desenvolvimento Web</h2>
          </div>
        </div>
        <img src={decoRight} alt="decoration" className="decoration"/>
      </header>
      <main>
        <h1>Demonstração de Funcionalidade</h1>
        <div className="main-line"></div>
        <section className="table-container">
          <div className="top-container">
            <h2>Perfis Cadastrados</h2>
            <Button label='Novo Cadastro'/>
          </div>
        </section>
      </main>
    </>
  );
}
