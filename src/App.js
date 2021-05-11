import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import AuthState from "./context/auth/AuthState";
import PrivateRoute from "./components/routing/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;
