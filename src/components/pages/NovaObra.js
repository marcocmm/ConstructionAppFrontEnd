import React from "react";
import Navbar from "../layout/Navbar";
import { useFormFields } from "../../libs/hooksLib";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const NovaObra = (props) => {
  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    dataInicio: "",
    imageURL: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    // validateFields();
    // setIsLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "/construction/construction",
        fields,
        config
      );

      // if (register(fields)) {
      // setAlert("Usuário registrado!", "success");
      // }
      if (res.status === 201) {
        let id = res.data.result._id.$oid;
        props.history.push("/obra/" + id);
      }
    } catch (e) {
      console.log(e);
      // setAlert("Erro ao registrar!!", "danger");
      // setIsLoading(false);
    }
  }

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
