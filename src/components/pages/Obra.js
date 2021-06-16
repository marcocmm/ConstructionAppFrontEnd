import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import ItemObra from "../layout/ItemObra";
import axios from "axios";
import graph1 from "../../img/graph1.png";
import graph2 from "../../img/graph2.png";

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
            style={{
              height: "35vh",
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
            }}
          >
            <div>
              <img
                src={obra.imageURL}
                style={{ width: "350px", height: "250px" }}
                alt="Nova Obra"
              />
            </div>
            <div style={{ width: "18%", paddingLeft: "20px" }}>
              <p>{obra.nome}</p>
              {/* <p>Data de criação: </p> */}
              <p>Data de início: {obra.dataInicio}</p>
              {/* <p>Data de termino:</p> */}
              <p>BTN finalizar obra</p>
            </div>
            <div style={{ width: "25%" }}>
              {" "}
              <img src={graph1} alt="Logo" />
            </div>
            <div style={{ width: "25%", paddingLeft: "20px" }}>
              {" "}
              <img src={graph2} alt="Logo" />
            </div>
          </div>

          <div
            style={{ height: "47vh", display: "flex", flexDirection: "row" }}
          >
            <ItemObra type={"colaborador"} />
            <ItemObra type={"consumivel"} />
            <ItemObra type={"equipamento"} />
            <ItemObra type={"cliente"} />
            <ItemObra type={"material"} />
            <ItemObra type={"servicos"} />
            <ItemObra type={"presenca"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Obra;
