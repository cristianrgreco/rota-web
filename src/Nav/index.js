import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavItemDropDown, NavItem, NavItemLabel } from "./components";
import "./index.css";

export default function Nav() {
  return (
    <Fragment>
      <nav className="Nav">
        <NavItem>
          <NavItemLabel>Rotas</NavItemLabel>
          <NavItemDropDown>
            <NavItem>
              <NavItemLabel>
                <Link to="/rotas/porters">Porters</Link>
              </NavItemLabel>
            </NavItem>
            <NavItem>
              <NavItemLabel>
                <Link to="/rotas/kitchen">Kitchen</Link>
              </NavItemLabel>
            </NavItem>
          </NavItemDropDown>
        </NavItem>
        <NavItem>
          <NavItemLabel>
            <Link to="/employees">Employees</Link>
          </NavItemLabel>
        </NavItem>
      </nav>
    </Fragment>
  );
}
