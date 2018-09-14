import React from "react";
import "./Button.css";

export function Button({ children, onClick, disabled = false }) {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
