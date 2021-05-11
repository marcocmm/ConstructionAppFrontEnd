import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import logo from "../../img/logologin.png";
import {
  Container,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (Boolean(error)) {
      //mesage
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]); // props.history]);

  const { nif, senha } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (nif === "" || senha === "") {
      // Alert("Please fill in all fields", "danger");
    } else {
      login({
        nif,
        senha,
      });
    }
  };

  return (
    <div className="bgLogin">
      <Container>
        <div className="grid-2">
          <div className="bg-light">
            <h2 className="text-primary text-left">Login</h2>
            <Form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="text">NIF</label>
                <input
                  id="nif"
                  type="text"
                  name="nif"
                  value={nif}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  id="senha"
                  type="password"
                  name="senha"
                  value={senha}
                  onChange={onChange}
                />
              </div>
              <div className="grid-2">
                <input
                  type=""
                  value="Criar conta"
                  className="btn btn-light btn-block"
                />
                <input
                  type="submit"
                  value="Logar"
                  className="btn btn-primary btn-block"
                />
              </div>
            </Form>
          </div>
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
