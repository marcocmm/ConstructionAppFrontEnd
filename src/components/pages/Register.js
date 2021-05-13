import React from "react";
import Navbar from "../layout/Navbar";
import { useFormFields } from "../../libs/hooksLib";
import { Form, Button } from "react-bootstrap";

const Home = () => {
  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    email: "",
    nif: "",
    cargo: "Gestor",
    password: "",
    password2: "",
  });

  function validateFields() {}

  async function handleSubmit(event) {
    event.preventDefault();

    // setIsLoading(true);

    try {
      // await Auth.signIn(fields.email, fields.password);
      // userHasAuthenticated(true);
      // history.push("/");
      console.log(fields);
    } catch (e) {
      console.log(e);
      // setIsLoading(false);
    }
  }

  return (
    <div>
      <Navbar type="register" />
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
                />
              </Form.Group>

              <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={fields.email}
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="nif">
                <Form.Label>NIF/NIPC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NIF/NIPC"
                  value={fields.nif}
                  onChange={handleFieldChange}
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              controlId="cargoForm"
              style={{ width: "400px", margin: "20px" }}
            >
              <Form.Group controlId="cargo" size="lg">
                <Form.Label>Selecionar o cargo</Form.Label>
                <Form.Control
                  as="select"
                  style={{ color: "#e97d11" }}
                  value={fields.cargo}
                  onChange={handleFieldChange}
                >
                  <option>Gestor</option>
                  <option>Operacional</option>
                  <option>Encarregado</option>
                  <option>Administrativo</option>
                </Form.Control>
              </Form.Group>
            </Form.Group>

            <Form.Group
              controlId="formPassword"
              style={{ width: "400px", margin: "20px" }}
            >
              <Form.Group size="lg" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={fields.password}
                  onChange={handleFieldChange}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password2">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar senha"
                  value={fields.password2}
                  onChange={handleFieldChange}
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

export default Home;
