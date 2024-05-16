import "./style.css";
import LogoSenai from '../assets/logo.svg'
import Button from "../components/button/button";

export default function HomePage() {
  return (
    <>
      <header>
        <img src={LogoSenai} alt="" className="logo" />
        <div className="header-text">
          <h1>Feira de Profissões</h1>
          <h2>Desenvolvimento Web</h2>
        </div>
        <Button label='Cadastrar Novo Usuário' color='#ff0000'/>
      </header>
      <main>
        <h2>Demonstração <br /> de Funcionalidade</h2>
        <div className="main-container">
            <table>
                <thead></thead>
            </table>
        </div>
      </main>
    </>
  );
}
