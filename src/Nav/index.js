import React from "react";
import { NavItemDropDown, NavItem, NavItemLabel } from "./components";
import "./index.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <NavItem>
        <NavItemLabel>Rotas</NavItemLabel>
        <NavItemDropDown>
          <NavItem>
            <NavItemLabel>Porters</NavItemLabel>
          </NavItem>
          <NavItem>
            <NavItemLabel>Kitchen</NavItemLabel>
          </NavItem>
        </NavItemDropDown>
      </NavItem>
      <NavItem>
        <NavItemLabel>Employees</NavItemLabel>
      </NavItem>
    </nav>
  );
}
