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
import * as I from "iconoir-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoSenai from "../assets/logo.svg";
import decoRight from "../assets/deco-right.svg";

import Button from "../components/button/button";

export default function HomePage() {
  const nav = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function createData(
    name,
    date_birth,
    email,
    professional_goal,
    neighborhood
  ) {
    return { name, date_birth, email, professional_goal, neighborhood };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
        <h1>Demonstração de Funcionalidade</h1>
        <div className="main-line"></div>
        <section className="table-container">
          <div className="top-container">
            <h2>Perfis Cadastrados</h2>
            <Button label="Novo Cadastro" Click={() => {nav("/cadastro")}} />
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
                  <TableCell
                    style={{ backgroundColor: "#f0f0f0" }}
                    align="right"
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.date_birth}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.professional_goal}</TableCell>
                    <TableCell>{row.neighborhood}</TableCell>
                    <TableCell
                      align="right"
                      style={{ display: "flex", gap: "2em" }}
                    >
                      <I.Trash
                        style={{ cursor: "pointer" }}
                        onClick={() => {}}
                      />
                      <I.EditPencil
                        style={{ cursor: "pointer" }}
                        onClick={() => {}}
                      />
                    </TableCell>
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
