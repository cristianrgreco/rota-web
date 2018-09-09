import React from "react";
import "./Button.css";

export function Button({ children, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
}
