import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import CardObra from "../layout/CardObra";
import axios from "axios";

const Home = () => {
  const [allObras, setAllObras] = useState([]);
  useEffect(() => {
    getAllObras();
  }, []);

  async function getAllObras() {
    try {
      const res = await axios.get("/construction/all");
      if (res.status === 200) setAllObras(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

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
        {allObras.map((obra) => {
          return (
            <CardObra
              name={obra.nome}
              urlImage={obra.imageURL}
              id={obra._id.$oid}
            />
          );
        })}

        <CardObra />
      </div>
    </div>
  );
};

export default Home;
