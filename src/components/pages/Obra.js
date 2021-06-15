import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";

// import { useFormFields } from "../../libs/hooksLib";
// import { Form, Button } from "react-bootstrap";

// import { Link } from "react-router-dom";

const Obra = ({ match }) => {
  const [obra, setObra] = useState();

  useEffect(() => {
    getObra(match.params.id);
  }, []);

  async function getObra(id) {
    try {
      const res = await axios.get("/construction?construction_id=" + id);
      if (res.status === 200) setObra(res.data.result[0]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar type="novaobra" />
      {obra && (
        <div className="container">
          <div
            style={{ height: "35vh", display: "flex", flexDirection: "row" }}
          >
            <div>
              <img
                src={obra.imageURL}
                style={{ width: "350px", height: "250px", marginTop: "30px" }}
                alt="Nova Obra"
              />
            </div>
            <div style={{ backgroundColor: "green" }}>
              <p>{obra.nome}</p>
              {/* <p>Data de criação: </p> */}
              <p>Data de início: {obra.dataInicio}</p>
              {/* <p>Data de termino:</p> */}
              <p>BTN finalizar obra</p>
            </div>
            <div style={{ backgroundColor: "black" }}>1</div>
            <div style={{ backgroundColor: "green" }}>1</div>
          </div>

          <div style={{ height: "47vh" }}>2</div>
        </div>
      )}
    </div>
  );
};

export default Obra;
