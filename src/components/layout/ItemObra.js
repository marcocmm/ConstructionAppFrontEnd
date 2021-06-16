import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { typeToTitle } from "../../utils/types";

const ItemObra = ({ type }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <div
        style={{
          height: "10%",
          width: "200px",
          borderBottom: "1px solid #d1d1d1",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        {typeToTitle(type)}
      </div>
      <div
        style={{
          height: "80%",
          width: "200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
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
              width: "180px",
              marginLeft: "10px",
            }}
          >
            {type}
          </div>
          <div
            style={{
              width: "20px",
            }}
          >
            {">"}
          </div>
        </div>
      </div>
      <div
        style={{
          height: "10%",
          width: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        {" "}
        <Button variant="primary" type="submit" onClick={handleShow}>
          Novo Item
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemObra;
