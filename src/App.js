import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import Rota from "./Rota";
import Employees from "./Employees";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/" render={() => <Redirect to="/rota" />} />
        <Route exact path="/rota" component={Rota} />
        <Route exact path="/employees" component={Employees} />
      </Fragment>
    </Router>
  );
}
