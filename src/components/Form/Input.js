import React from "react";
import "./Input.css";

export function Input({ name, type, value, min, max, onChange }) {
  return (
    <input
      className="Input"
      id={name}
      type={type}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}
