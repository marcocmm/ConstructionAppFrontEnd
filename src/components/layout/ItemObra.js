import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CustomerModal from "../modal/CustomerModal";
import ProviderModal from "../modal/ProviderModal";
import ConsumableModal from "../modal/ConsumableModal";
import EquipmentModal from "../modal/EquipmentModal";
import MaterialModal from "../modal/MaterialModal";
import { typeToTitle } from "../../utils/types";

const ItemObra = ({ obraID, type, getData }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [itemID, setItemID] = useState();
  const [modalType, setModalType] = useState("novo");

  useEffect(() => {
    getData(setData);
  }, []);

  useEffect(() => {
    getData(setData);
  }, [show]);

  function getModal(type) {
    switch (type) {
      case "cliente":
        return (
          <CustomerModal
            show={show}
            modalType={modalType}
            setShow={setShow}
            obraID={obraID}
            itemID={itemID}
          />
        );

      case "consumivel":
        return (
          <ConsumableModal
            show={show}
            modalType={modalType}
            setShow={setShow}
            obraID={obraID}
            itemID={itemID}
          />
        );
      case "equipamento":
        return (
          <EquipmentModal
            show={show}
            modalType={modalType}
            setShow={setShow}
            obraID={obraID}
            itemID={itemID}
          />
        );
      case "material":
        return (
          <MaterialModal
            show={show}
            modalType={modalType}
            setShow={setShow}
            obraID={obraID}
            itemID={itemID}
          />
        );
      case "fornecedor":
        return (
          <ProviderModal
            show={show}
            modalType={modalType}
            setShow={setShow}
            obraID={obraID}
            itemID={itemID}
          />
        );
      default:
        break;
    }
  }

  return (
    <div
      style={{
        width: "200px",
        height: "350px",
        marginRight: "20px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #d1d1d1",
        borderRadius: "8px",
        boxShadow: "1px 1px 2px 1px",
      }}
    >
      {getModal(type)}

      <div
        style={{
          flex: 1,
          width: "200px",
          borderBottom: "1px solid #d1d1d1",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {typeToTitle(type)}
      </div>
      <div
        style={{
          flex: 10,
          width: "200px",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          cursor: "pointer",
        }}
      >
        {data.map((cliente) => {
          return (
            <div
              onClick={() => {
                setShow(true);
                setModalType("editar");
                setItemID(cliente._id.$oid);
              }}
              style={{
                height: "10%",
                width: "200px",
                borderBottom: "1px solid #d1d1d1",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "160px",
                  marginLeft: "10px",
                }}
              >
                {cliente.nome}
              </div>
              <div
                style={{
                  width: "20px",
                }}
              >
                {">"}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          flex: 2,
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #d1d1d1",
        }}
      >
        {" "}
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            // clearFields();
            setModalType("novo");
            setShow(true);
          }}
        >
          Novo Item
        </Button>
      </div>
    </div>
  );
};

export default ItemObra;
