/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormFields } from "../../libs/hooksLib";
import ModalAlerts from "../layout/ModalAlerts";
import ModalAlertContext from "../../context/modalAlert/modalAlertContext";
import axios from "axios";

const CustomerModal = ({ show, setShow, modalType, obraID, itemID }) => {
  const modalAlertContext = useContext(ModalAlertContext);
  const { setAlert } = modalAlertContext;
  const [fields, handleFieldChange] = useFormFields({
    nome: "",
    telefone: "",
    nipcnif: "",
    obra_id: obraID,
  });

  useEffect(() => {
    if (show && modalType === "editar") {
      getCustomer();
    } else clearFields();
  }, [show]);

  async function getCustomer() {
    let cliente;
    try {
      const res = await axios.get("/customer?customer_id=" + itemID);
      if (res.status === 200) {
        cliente = res.data.result[0];
        cliente._id = cliente._id.$oid;
        handleFieldChange({
          target: "reset",
          value: cliente,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onClose = () => {
    setShow(false);
    clearFields();
  };

  async function onDelete(setAlert) {
    try {
      let res = await axios.delete("/customer?customer_id=" + fields._id);
      if (res.status === 204) {
        setShow(false);
      }
    } catch (e) {
      setAlert("Erro ao deletar registro!", "danger");
      console.log(e);
    }
  }

  async function onSubmit(setAlert, clearFields, event) {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let res;
      if (modalType === "novo")
        res = await axios.post("/customer/customer", fields, config);
      else res = await axios.put("/customer", fields, config);

      if (res.status === 201) {
        clearFields();
        setAlert("Registro inserido com sucesso!", "success");
      }
      if (res.status === 200) {
        setAlert("Registro alterado com sucesso!", "success");
      }
    } catch (e) {
      setAlert("Erro ao inserir registro!", "danger");
      console.log(e);
    }
  }

  function clearFields() {
    handleFieldChange({
      target: "reset",
      value: {
        nome: "",
        telefone: "",
        nipcnif: "",
        obra_id: obraID,
      },
    });
  }

  return (
    <div>
      <Modal show={show} onHide={onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "novo" ? "Novo Cliente" : "Editar Cliente"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(event) => onSubmit(setAlert, clearFields, event)}>
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
              {modalType === "editar" && (
                <Button
                  type="button"
                  className="btn-danger"
                  variant="secondary"
                  onClick={onDelete}
                >
                  Excluir
                </Button>
              )}
              <Button type="reset" variant="secondary" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                {modalType === "novo" ? "Adicionar" : "Editar"}
              </Button>
            </Form.Group>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerModal;
