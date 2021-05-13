import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import logo from "../../img/logologin.png";
import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

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
        <div className="grid-2" style={{ marginTop: "200px" }}>
          <div className="bg-light" style={{ padding: "50px" }}>
            <h2 className="text-color-primary text-left">Login</h2>
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

                <p className="text-right text-color-primary">Esqueci a senha</p>
              </div>
              <div className="grid-2">
                <Link to="/register">
                  <input
                    type=""
                    value="Criar conta"
                    className="btn btn-light btn-block"
                  />
                </Link>

                <input
                  type="submit"
                  value="Logar"
                  className="btn btn-primary btn-block"
                />
              </div>
            </Form>
          </div>
          <div style={{ marginTop: "150px" }}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
