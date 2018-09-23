import React from "react";
import "./Input.css";

export function Input({
  name,
  type,
  value,
  placeholder,
  required,
  min,
  max,
  onChange
}) {
  return (
    <input
      className="Input"
      id={name}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
}
