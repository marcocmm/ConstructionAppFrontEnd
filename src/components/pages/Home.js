import React from "react";
import Navbar from "../layout/Navbar";
import CardObra from "../layout/CardObra";

import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Navbar />

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
        <CardObra />
        <CardObra />
      </div>
    </div>
  );
};

export default Home;
