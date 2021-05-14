import React, { useContext } from "react";
import Navbar from "../layout/Navbar";
import { useFormFields } from "../../libs/hooksLib";
import { Form, Button } from "react-bootstrap";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { register } = authContext;

  const { setAlert } = alertContext;

  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    telefone: "",
    nif: "",
    cargo: "Gestor",
    senha: "",
    senha2: "",
    tipo_usuario_id: "1",
  });

  function validateFields() {
    if (fields.senha !== fields.senha2)
      setAlert("Senhas não são iguais!", "danger");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    validateFields();
    // setIsLoading(true);
    try {
      if (register(fields)) {
        setAlert("Usuário registrado!", "success");
        props.history.push("/");
      }
    } catch (e) {
      console.log(e);
      setAlert("Erro ao registrar!!", "danger");
      // setIsLoading(false);
    }
  }

  return (
    <div>
      <Navbar type="registrar" />
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
              style={{ width: "350px", margin: "20px" }}
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

              <Form.Group size="lg" controlId="telefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Telefone"
                  value={fields.telefone}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
              <Form.Group size="lg" controlId="nif">
                <Form.Label>NIF/NIPC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="NIF/NIPC"
                  value={fields.nif}
                  onChange={handleFieldChange}
                  required
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              controlId="cargoForm"
              style={{ width: "350px", margin: "20px" }}
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
              style={{ width: "350px", margin: "20px" }}
            >
              <Form.Group size="lg" controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={fields.senha}
                  onChange={handleFieldChange}
                  minLength={6}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="senha2">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar senha"
                  value={fields.senha2}
                  onChange={handleFieldChange}
                  minLength={6}
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

export default Register;
