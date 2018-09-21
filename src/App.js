import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Rota from "./Rota";
import Employee from "./Employee";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Nav />
        <Route exact path="/rotas/:rota" component={Rota} />
        <Route exact path="/employees" component={Employee} />
      </Fragment>
    </Router>
  );
}
