import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Obra from "./components/pages/Obra";
import NovaObra from "./components/pages/NovaObra";
import NotFound from "./components/pages/NotFound";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import PrivateRoute from "./components/routing/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/novaobra" component={NovaObra} />
              <PrivateRoute exact path="/obra" component={Obra} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
