import React, { useEffect, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormFields } from "../../libs/hooksLib";
import ModalAlerts from "../layout/ModalAlerts";
import ModalAlertContext from "../../context/modalAlert/modalAlertContext";
import axios from "axios";

const CustomerModal = ({ show, setShow, type, editFields }) => {
  const modalAlertContext = useContext(ModalAlertContext);
  const { setAlert } = modalAlertContext;

  const handleClose = () => setShow(false);
  const onDelete = () => setShow(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/customer/customer", fields, config);
      if (res.status === 201) {
        clearFields();
        setAlert("Registro inserido com sucesso!", "success");
      }
    } catch (e) {
      setAlert("Erro ao inserir registro!", "danger");
      console.log(e);
    }
  }
  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    telefone: "",
    nipcnif: "",
  });

  useEffect(() => {
    if (type === "editar")
      handleFieldChange({ target: "reset", value: editFields });
  }, [editFields]);

  function clearFields() {
    handleFieldChange({
      target: "reset",
      value: {
        nome: "",
        telefone: "",
        nipcnif: "",
      },
    });
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {type === "novo" ? "Novo Cliente" : "Editar Cliente"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <ModalAlerts />
            <Form.Group>
              <Form.Group
                controlId="formName"
                style={{ width: "350px", margin: "20px" }}
              >
                <Form.Group size="lg" controlId="nome">
                  <Form.Label>Nome do cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    value={fields.nome}
                    onChange={handleFieldChange}
                    required
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="nipcnif">
                  <Form.Label>NIF/NIPC</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="NIF/NIPC"
                    value={fields.nipcnif}
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
              </Form.Group>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Form.Group controlId="formBasicPassword">
              {type === "editar" && (
                <Button
                  type="button"
                  className="btn-danger"
                  variant="secondary"
                  onClick={onDelete}
                >
                  Excluir
                </Button>
              )}
              <Button type="reset" variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                {type === "novo" ? "Adicionar" : "Editar"}
              </Button>
            </Form.Group>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerModal;
