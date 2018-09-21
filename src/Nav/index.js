import React, { Fragment } from "react";
import "./index.css";

import {
  NavItemDropDown,
  NavItem,
  NavItemText,
  NavItemLink
} from "./components";

export default function Nav() {
  return (
    <Fragment>
      <nav className="Nav">
        <NavItem>
          <NavItemText>Rotas</NavItemText>
          <NavItemDropDown>
            <NavItem>
              <NavItemLink to="/rotas/porters">Porters</NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink to="/rotas/kitchen">Kitchen</NavItemLink>
            </NavItem>
          </NavItemDropDown>
        </NavItem>
        <NavItem>
          <NavItemLink to="/employees">Employees</NavItemLink>
        </NavItem>
      </nav>
    </Fragment>
  );
}
