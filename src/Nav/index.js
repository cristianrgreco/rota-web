import React from "react";
import { NavItem, NavItemLink } from "./components";
import "./index.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <NavItem>
        <NavItemLink to="/rota">Rota</NavItemLink>
      </NavItem>
      <NavItem>
        <NavItemLink to="/employees">Employees</NavItemLink>
      </NavItem>
    </nav>
  );
}
