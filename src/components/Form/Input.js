import React from "react";
import "./Input.css";

export function Input({ name, type, value, onChange, autoFocus = false }) {
  return (
    <input
      className="Input"
      id={name}
      type={type}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  );
}
