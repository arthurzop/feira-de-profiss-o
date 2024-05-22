import "./style.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LogoSenai from "../assets/logo.svg";
import decoRight from "../assets/deco-right.svg";

import Button from "../components/button/button";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [perfis, setPerfis] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    axios
      .get("http://localhost:8080/presence/all", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPerfis(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <body>
      <header>
        <div className="logo-container">
          <img src={LogoSenai} alt="" className="logo" />
          <div className="logo-line"></div>
          <div className="logo-text">
            <h1>Feira de Profissões</h1>
            <h2>Desenvolvimento Web</h2>
          </div>
        </div>
        <img src={decoRight} alt="decoration" className="decoration" />
      </header>

      <main>
        <h1>
          Demonstração de Funcionalidade
          <div className="main-line "></div>
        </h1>
        <section className="table-container">
          <div className="top-container">
            <h2>Perfis Cadastrados</h2>
            <Button
              label="Novo Cadastro"
              Click={() => {
                nav("/cadastro");
              }}
            />
          </div>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 520 }}
            style={{ overflowY: "scroll" }}
          >
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Nome</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Data de Nascimento</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Email</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Profissão dos Sonhos</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Bairro</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {perfis.map((perfis) => (
                  <TableRow
                    key={perfis.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {perfis.name}
                    </TableCell>
                    <TableCell>{perfis.date_birth}</TableCell>
                    <TableCell>{perfis.email}</TableCell>
                    <TableCell>{perfis.professional_goal}</TableCell>
                    <TableCell>{perfis.neighborhood}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </main>
    </body>
  );
}
