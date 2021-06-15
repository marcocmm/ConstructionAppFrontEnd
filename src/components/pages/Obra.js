import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
// import { useFormFields } from "../../libs/hooksLib";
// import { Form, Button } from "react-bootstrap";

// import { Link } from "react-router-dom";

const Obra = ({ match }) => {
  useEffect(() => {
    // getObra(match.params.id);
  }, []);

  const urlImage = "https://www.plantapronta.com.br/projetos/1011/01.jpg";
  return (
    <div>
      <Navbar type="novaobra" />

      <div className="container">
        <div style={{ height: "35vh", display: "flex", flexDirection: "row" }}>
          <div>
            <img
              src={urlImage}
              style={{ width: "350px", height: "250px", marginTop: "30px" }}
              alt="Nova Obra"
            />
          </div>
          <div style={{ backgroundColor: "green" }}>
            <p>Casa Mario Silva</p>
            <p>Data de criação: </p>
            <p>Data de início:</p>
            <p>Data de termino:</p>
            <p>BTN finalizar obra</p>
          </div>
          <div style={{ backgroundColor: "black" }}>1</div>
          <div style={{ backgroundColor: "green" }}>1</div>
        </div>

        <div style={{ height: "47vh" }}>2</div>
      </div>
    </div>
  );
};

export default Obra;
