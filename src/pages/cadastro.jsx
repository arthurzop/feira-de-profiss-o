import "./style.css";
import { useState } from "react";
import * as I from "iconoir-react";
import { useNavigate } from "react-router-dom";

//images
import Button from "../components/button/button";
import LogoSenai from "../assets/logo.svg";
import decoLeft from "../assets/deco-left.svg";
import Swal from "sweetalert2";
import axios from "axios";
import { validate,res } from "react-email-validator";

export default function Cadastro() {
  const nav = useNavigate();

  const handleAction = async () => {
    validate(email);
    if (res) {
      console.log('entrou na res', res)
      if (
        name == "" ||
        neighborhood == "" ||
        email == "" ||
        professional_goal == ""
      ) {
      } else {
        try {
          const response = await axios.post(
            "http://localhost:8080/presence/add",
            { name, date_birth, email, professional_goal, neighborhood },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status == 200) {
            Swal.fire({
              title: "Cadastro realizado com sucesso!",
              text: `Redirecionando para a página inicial. Obrigado por utilizar nosso sistema!`,
              icon: "success",
              confirmButtonColor: "#e10613",
            });
            setNull();
            setTimeout(() => {
              nav("/");
            }, 3000);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error..",
              text: "Erro ao realizar cadastro!",
              confirmButtonColor: "#e10613",
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Email Inválido!",
        text: "Por Favor, preencha um email válido.",
        confirmButtonColor: "#e10613",
      });
      setNull();
    }
  };

  const setNull = () => {
    setDate(new Date());
    setEmail("");
    setName("");
    setProfessional("");
    setNeighborhood("");
  };

  const [name, setName] = useState("");
  const [date_birth, setDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [professional_goal, setProfessional] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

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
      <main className="main">
        <div className="title">
          <I.NavArrowLeft
            style={{ fontSize: "2em", cursor: "pointer" }}
            className="nav-arrow"
            onClick={() => {
              nav("/");
            }}
          />
          <h1>
            Demonstração de Funionalidade
            <div className="main-line cad-line"></div>
          </h1>
        </div>
        <section className="table-container">
          <div className="top-container">
            <h2>Cadastro de Perfil</h2>
          </div>
          {/* onSubmit={() => {handleAction()}} */}
          <div className="form">
            <div className="form-subcontainer">
              <div className="input-container">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Digite seu nome"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label htmlFor="date_birth">Data de Nascimento</label>
                <input
                  type="date"
                  name="date_birth"
                  id="date_birth"
                  autoComplete="on"
                  required
                  value={date_birth}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
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
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="professional_goal">Profissão dos Sonhos</label>
              <input
                type="text"
                name="professional_goal"
                id="professional_goal"
                placeholder="Digite sua profissão dos sonhos"
                required
                value={professional_goal}
                onChange={(e) => {
                  setProfessional(e.target.value);
                }}
              />
            </div>
            <div className="input-container">
              <label htmlFor="neighborhood">Seu Bairro</label>
              <input
                type="text"
                name="neighborghood"
                id="neighborhood"
                placeholder="Digite o bairro em que mora"
                required
                value={neighborhood}
                onChange={(e) => {
                  setNeighborhood(e.target.value);
                }}
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
    </body>
  );
}
