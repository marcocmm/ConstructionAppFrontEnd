import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ type }) => {
  const authContext = useContext(AuthContext);

  const { logout, user } = authContext; //loadUser

  useEffect(() => {
    // loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const navbarContent = () => {
    if (type === "home")
      return (
        <ul>
          {" "}
          <Fragment>
            <li>Hello {user && user.nome}</li>
            <li>
              <a onClick={onLogout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </Fragment>
        </ul>
      );
  };
  const navbarLinksContent = () => {
    if (type === "register") return <ul>Cadastro de usuário</ul>;
    else if (type === "home")
      return (
        <Fragment>
          <ul>Obras em andamento</ul>
          <ul>Relatórios</ul>
          <ul>Fornecedores</ul>
        </Fragment>
      );
  };

  return (
    <div>
      <div className="navbar bg-primary1">
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
        {navbarContent()}
      </div>
      <div className="navbarLinks" style={{ backgroundColor: "#f6f6f6" }}>
        {navbarLinksContent()}
      </div>
    </div>
  );
};

export default Navbar;
