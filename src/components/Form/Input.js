import React from "react";
import "./Input.css";

export function Input({ name, type, value, min, max, placeholder, onChange }) {
  return (
    <input
      className="Input"
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}
