import React from "react";
import Navbar from "../layout/Navbar";
import CardObra from "../layout/CardObra";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar type="home" />

      <div
        style={{
          padding: "2.5rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <CardObra
          name={"Casa - Mario Silva"}
          urlImage={"https://www.plantapronta.com.br/projetos/1011/01.jpg"}
        />
        <CardObra
          name={"Casa - Manuel"}
          urlImage={
            "https://plantasdecasas.com/wp-content/uploads/2018/09/projetos-de-casas-rio-verde-min.jpg"
          }
        />
        <CardObra />
        <CardObra />
      </div>
    </div>
  );
};

export default Home;
