import React from "react";

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
