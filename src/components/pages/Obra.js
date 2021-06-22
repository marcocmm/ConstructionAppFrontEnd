import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import ItemObra from "../layout/ItemObra";
import { getClientes, getFornecedores } from "../../utils/api";
import axios from "axios";
import graph1 from "../../img/graph1.png";
import graph2 from "../../img/graph2.png";

// import { Button } from "react-bootstrap";

const Obra = ({ match }) => {
  const [obra, setObra] = useState();

  useEffect(() => {
    getObra(match.params.id);
  }, []);

  async function getObra(id) {
    try {
      const res = await axios.get("/construction?obra_id=" + id);
      if (res.status === 200) setObra(res.data.result[0]);
      console.log(res);
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
            style={{
              height: "47vh",
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
            }}
          >
            <ItemObra
              obraID={obra._id.$oid}
              getData={getClientes}
              type={"cliente"}
            />
            {/* <ItemObra getData={getClientes} type={"consumivel"} />
            <ItemObra getData={getClientes} type={"equipamento"} />
            <ItemObra getData={getClientes} type={"colaborador"} />
            <ItemObra getData={getClientes} type={"material"} />
            <ItemObra getData={getClientes} type={"servico"} />
            <ItemObra getData={getClientes} type={"presenca"} /> */}
            <ItemObra getData={getFornecedores} type={"fornecedor"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Obra;
