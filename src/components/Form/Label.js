import React from "react";
import "./Label.css";

export function Label({ name, children }) {
  return (
    <label className="Label" htmlFor={name}>
      {children}
    </label>
  );
}
