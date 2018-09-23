import React from "react";
import "./Form.css";

export function Form({ onSubmit = () => {}, children }) {
  return (
    <form
      className="Form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
    </form>
  );
}
