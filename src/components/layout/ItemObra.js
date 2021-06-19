import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CustomerModal from "../modal/CustomerModal";
import { typeToTitle } from "../../utils/types";

const ItemObra = ({ type, getData }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [modalType, setModalType] = useState("novo");
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    getData(setData);
  }, []);

  useEffect(() => {
    getData(setData);
  }, [show]);

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
      <CustomerModal
        show={show}
        setShow={setShow}
        type={modalType}
        editFields={selectedItem}
      />
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
                cliente._id = cliente._id.$oid;
                setSelectedItem(cliente);
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
