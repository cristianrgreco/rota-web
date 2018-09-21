import React from "react";
import { Link } from "react-router-dom";

export function NavItemLink({ to, children }) {
  return (
    <Link to={to} className="NavItemLink">
      {children}
    </Link>
  );
}
