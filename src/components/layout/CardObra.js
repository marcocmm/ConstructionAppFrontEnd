import React from "react";
import imgNovaObra from "../../img/novaObra.png";

const CardObra = ({ obra }) => {
  const novaObra = (
    <div
      style={{
        width: "422px",
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
  );

  return <div>{!obra && novaObra}</div>;
};

// CardObra.propTypes = {
//   img: PropTypes.string.isRequired,
// };

// CardObra.defaultProps = {
//   img: novaObra,
// };

export default CardObra;
