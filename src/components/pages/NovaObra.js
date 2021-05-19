import React from "react";
import Navbar from "../layout/Navbar";
import { useFormFields } from "../../libs/hooksLib";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const NovaObra = () => {
  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    dataInicio: "",
    imageURL: "",
  });

  function handleSubmit(event) {}
  return (
    <div>
      <Navbar type="novaobra" />

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
        <Form onSubmit={handleSubmit}>
          <Form.Group
            style={{
              padding: "2.5rem",
              marginTop: "-40px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Form.Group
              controlId="formName"
              style={{ width: "400px", margin: "20px" }}
            >
              <Form.Group size="lg" controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome"
                  value={fields.nome}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>

              <Form.Group size="lg" controlId="dataInicio">
                <Form.Label>Data início</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Data inicio"
                  value={fields.dataInicio}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
              <Form.Group size="lg" controlId="imageURL">
                <Form.Label>URL imagem</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL imagem"
                  value={fields.imageURL}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
            </Form.Group>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            style={{
              width: "400px",
              margin: "20px",
              display: "flex",
              // flexDirection: "row",
              // flexWrap: "wrap",
              // alignItems: "flex-start",
              alignContent: "right",
            }}
          >
            <Button variant="secundary" type="reset">
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Criar Conta
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default NovaObra;
