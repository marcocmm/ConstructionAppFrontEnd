import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { logout, user, loadUser } = authContext;

  useEffect(() => {
    // loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  return (
    <div className="navbar bg-primary1">
      <h1>
        <Link to="/">
          <img src={logo} />
        </Link>
      </h1>
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
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Cards Manager",
  icon: "fas fa-cube",
};

export default Navbar;
