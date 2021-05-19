import React from "react";
import imgNovaObra from "../../img/novaObra.png";
import { Link } from "react-router-dom";

const CardObra = ({ name, urlImage }) => {
  const novaObra = (
    <Link to="/novaobra">
      <div
        style={{
          width: "350px",
          height: "365px",
          backgroundColor: "#F6F6F6",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={imgNovaObra}
          style={{ width: "250px", marginTop: "30px" }}
          alt="Nova Obra"
        />
      </div>
    </Link>
  );

  const obra = (
    <Link to="/novaobra">
      <div
        style={{
          width: "90%",
          height: "365px",
          backgroundColor: "#F6F6F6",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginTop: "10px", marginBottom: "-15px" }}>{name}</h4>
        <img
          src={urlImage}
          style={{ width: "350px", height: "250px", marginTop: "30px" }}
          alt="Nova Obra"
        />
        <p style={{ marginTop: "10px" }}> Ver detalhes</p>
      </div>
    </Link>
  );
  return (
    <div>
      {!name && novaObra}
      {name && obra}
    </div>
  );
};

// CardObra.propTypes = {
//   img: PropTypes.string.isRequired,
// };

// CardObra.defaultProps = {
//   img: novaObra,
// };

export default CardObra;
